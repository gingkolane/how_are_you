class Treatment < ApplicationRecord
  has_many :conditions_treatments
  has_many :conditions, through: :conditions_treatments

  has_many :treatments_visits
  has_many :visits, through: :treatments_visits

end
