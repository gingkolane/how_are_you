class Trial < ApplicationRecord
  has_many :conditions_trials
  has_many :trials, through: :conditions_trials
end
