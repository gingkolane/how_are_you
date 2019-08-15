class ConditionsDoctor < ApplicationRecord
  belongs_to :condition 
  belongs_to :doctor
end
