class Doctor < ApplicationRecord
  has_many :diseases_doctors
  has_many :diseases, through: :diseases_doctors

  has_many :
end
