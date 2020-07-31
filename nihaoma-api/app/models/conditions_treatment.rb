class ConditionsTreatment < ApplicationRecord
  belongs_to :condition 
  belongs_to :treatment 

  belongs_to :record
end
