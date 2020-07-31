class Condition < ApplicationRecord
  
  has_many :records

  has_many :doctors, through: :records
  has_many :users, through: :records

  has_many :conditions_trials
  has_many :trials, through: :conditions_trials

  has_many :conditions_treatments
  has_many :treatments, through: :conditions_treatments

  has_one :group

end 
