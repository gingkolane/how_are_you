class User < ApplicationRecord
  has_secure_password
  validates :username, uniqueness: true

  has_many :records
  has_many :conditions, through: :records
  has_many :doctors, through: :records
  # has_many :conditions, {:through=>:records, :source=>"condition"}

  has_many :records_treatments, through: :records

  has_many :groups_users
  has_many :groups, through: :groups_users

  def mytreatments
    self.records.map {|record| record.treatments}
  end

  def mytreatments_by_condition(condition_name)
    self.records.map {|record| record.treatments if record.condition.condition_name === condition_name}
  end

  # def get_treatments

  # def create_conditions_user(condition)
  #   currentCondition = Condition.find_by(condition_name: condition)
  #   ConditionsUser.create(
  #     condition_id: currentCondition.id, 
  #     user_id: self.id
  #   )
  #   return currentCondition
  # end
  
end
