class DiseasesUser < ApplicationRecord
  has_many :visits

  belongs_to :disease
  belongs_to :user
end
