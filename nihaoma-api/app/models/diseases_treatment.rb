class DiseasesTreatment < ApplicationRecord
  belongs_to :disease 
  belongs_to :treatment 
end
