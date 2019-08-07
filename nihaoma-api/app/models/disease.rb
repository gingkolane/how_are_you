class Disease < ApplicationRecord
  has_many :diseases_doctors
  has_many :disease_trials
  has_many :disease_treatments
  
  has_many :doctors, through: diseases_doctors
  has_many :trials, through: disease_trials
  has_many :treatments, through: disease_treatments
  
  # need to double check disease-group relationship
  has_many :groups
end
