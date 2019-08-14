class Disease < ApplicationRecord
  has_many :diseases_users
  has_many :users, through: :diseases_users

  has_many :diseases_doctors
  has_many :doctors, through: :diseases_doctors

  has_many :diseases_trials
  has_many :trials, through: :diseases_trials

  has_many :diseases_treatments
  has_many :treatments, through: :diseases_treatments
  
  # need to double check disease-group relationship
  has_many :groups
end
