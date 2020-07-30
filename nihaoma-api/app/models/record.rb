class Record < ApplicationRecord

  # belongs_to :conditions_user
  # has_one :condition, through: :conditions_user
  # has_one :user, through: :conditions_user

  belongs_to :user
  belongs_to :doctor
  belongs_to :condition

  has_many :records_treatments
  has_many :treatments, through: :records_treatments

end
