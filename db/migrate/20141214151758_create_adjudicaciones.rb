class CreateAdjudicaciones < ActiveRecord::Migration
  def change
    create_table :adjudicaciones do |t|
      t.references :pac, index: true
      t.references :convocatoria, index: true
      t.references :categoria, index: true
      t.references :tipo_operacion, index: true

      t.timestamps
    end
  end
end
