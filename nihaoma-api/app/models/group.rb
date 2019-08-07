class Group < ApplicationRecord
  belongs_to :disease
  has_many :users
end
