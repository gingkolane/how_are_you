class Treatment < ApplicationRecord
  has_many :diseases_treatments
  has_many :diseases, through: :diseases_treatments

  has_many :treatments_visits
  has_many :visits, through: :treatments_visits

end
