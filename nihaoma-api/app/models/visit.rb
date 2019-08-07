class Visit < ApplicationRecord
  has_many :treatments_visits
  has_many :treatments, through: :treatments_visits
end
