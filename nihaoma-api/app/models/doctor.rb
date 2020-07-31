class Doctor < ApplicationRecord

  has_many :records
  has_many :users, through: :records
  has_many :conditions, through: :records

end
