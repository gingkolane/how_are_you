class RemoveColumnFromVisits < ActiveRecord::Migration[5.2]
  def change
    remove_column :visits, :doctor_id, :string
  end
end
