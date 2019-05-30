class CreateLeaderboards < ActiveRecord::Migration[5.2]
  def change
    create_table :leaderboards do |t|
      t.string :name
      t.integer :score
      t.integer :time

      t.timestamps
    end
  end
end
