class User < ApplicationRecord
# this is to set up has_secure_password, but will not use it until things are all setup
  # has_secure_password
  # validates :username, uniqueness: true

  has_many :visits
  has_many :groups_users
  has_many :groups, through: :groups_users

end
