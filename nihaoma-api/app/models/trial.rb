class Trial < ApplicationRecord
  has_many :diseases_trials
  has_many :trials, through: :diseases_trials
end
