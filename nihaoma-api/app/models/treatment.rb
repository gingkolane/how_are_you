class Treatment < ApplicationRecord
  has_many :conditions_treatments
  has_many :conditions, through: :conditions_treatments

  has_many :records_treatments
  has_many :records, through: :records_treatments

end
