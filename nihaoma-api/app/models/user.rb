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

  def my_treatments
    self.records.map {|record| record.treatments}
  end

  def my_treatments_by_condition(condition_name)
    self.records.map {|record| record.treatments if record.condition.condition_name === condition_name}
  end
  
end
