class Doctor < ApplicationRecord

  has_many :doctors_visits
  has_many :visits, through: :doctors_visits
  
  has_many :diseases_doctors
  has_many :diseases, through: :diseases_doctors

end
