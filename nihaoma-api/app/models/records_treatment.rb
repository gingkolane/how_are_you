class RecordsTreatment < ApplicationRecord
  belongs_to :treatment 
  belongs_to :record
end
