class Condition < ApplicationRecord
  
  has_many :records
  has_many :users, through: :records

  has_many :conditions_doctors
  has_many :doctors, through: :conditions_doctors


  has_many :conditions_trials
  has_many :trials, through: :conditions_trials

  has_many :conditions_treatments
  has_many :treatments, through: :conditions_treatments
  
  # need to double check condition-group relationship
  # has_many :groups
end
