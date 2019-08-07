class CreateDoctorsVisits < ActiveRecord::Migration[5.2]
  def change
    create_table :doctors_visits do |t|
      t.integer "doctor_id", foreign_key:true
      t.integer "visit_id", foreign_key:true
    end
  end
end
