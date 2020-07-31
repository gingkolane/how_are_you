class DoctorsTrial < ApplicationRecord
  belongs_to :doctor 
  belongs_to :trial
end
