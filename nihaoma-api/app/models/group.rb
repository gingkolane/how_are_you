class Group < ApplicationRecord
  belongs_to :disease

  has_many :groups_users
  has_many :users, through: :groups_users
end
