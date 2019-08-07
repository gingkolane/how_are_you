class TreatmentsVisit < ApplicationRecord
  belongs_to :treatment 
  belongs_to :visit
end
