class ConditionsUser < ApplicationRecord
  has_many :visits

  belongs_to :condition
  belongs_to :user
end
