class Record < ApplicationRecord

  belongs_to :user
  belongs_to :condition
  belongs_to :doctor

  has_many :records_treatments
  has_many :treatments, through: :records_treatments

  # belongs_to :conditions_user
  # has_one :condition, through: :conditions_user
  # has_one :user, through: :conditions_user

  # belongs_to :doctors_user
  # has_one :doctor, through: :doctors_user


end
