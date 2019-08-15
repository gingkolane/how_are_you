class Visit < ApplicationRecord
  belongs_to :conditions_user

  has_many :doctors_visits
  has_many :doctors, through: :doctors_visits

  has_many :treatments_visits
  has_many :treatments, through: :treatments_visits
end
