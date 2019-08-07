class User < ApplicationRecord
  has_many :visits

  has_many :groups_users
  has_many :groups, through: :groups_users

end
