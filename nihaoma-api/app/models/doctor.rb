class Doctor < ApplicationRecord

  has_many :records
  has_many :users, through: :records
  
  has_many :doctors_trials
  has_many :trials, through: :doctors_trials

  has_many :conditions_doctors
  has_many :conditions, through: :conditions_doctors

end
