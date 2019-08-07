class DiseasesDoctor < ApplicationRecord
  belongs_to :disease 
  belongs_to :doctor
end
