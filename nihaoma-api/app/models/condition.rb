class Condition < ApplicationRecord
  
  has_many :conditions_users
  has_many :users, through: :conditions_users

  has_many :conditions_doctors
  has_many :doctors, through: :conditions_doctors

  has_many :conditions_trials
  has_many :trials, through: :conditions_trials

  has_many :conditions_treatments
  has_many :treatments, through: :conditions_treatments

end 
