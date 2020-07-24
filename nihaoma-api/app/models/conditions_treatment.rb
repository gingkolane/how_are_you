class ConditionsTreatment < ApplicationRecord
  belongs_to :condition 
  belongs_to :treatment 
end
