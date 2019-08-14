class User < ApplicationRecord
  has_secure_password
  validates :username, uniqueness: true

  has_many :visits

  has_many :groups_users
  has_many :groups, through: :groups_users

  has_many :diseases_users
  has_many :diseases, through: :diseases_users

end
