class DoctorsVisit < ApplicationRecord
  belongs_to :doctor 
  belongs_to :visit
end
