class User < ApplicationRecord
  has_secure_password
  validates :username, uniqueness: true

  has_many :visits

  has_many :groups_users
  has_many :groups, through: :groups_users

  has_many :conditions_users
  has_many :conditions, through: :conditions_users


  def create_conditions_user(condition)
    currentCondition = Condition.find_by(condition_name: condition)
    ConditionsUser.create(
      condition_id: currentCondition.id, 
      user_id: self.id, 
      myCondition: currentCondition.condition_name
    )
    return currentCondition
  end
end
