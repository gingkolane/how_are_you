class Doctor < ApplicationRecord

  has_many :doctors_visits
  has_many :visits, through: :doctors_visits
  
  has_many :conditions_doctors
  has_many :conditions, through: :conditions_doctors

end
