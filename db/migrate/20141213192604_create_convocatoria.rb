class CreateConvocatoria < ActiveRecord::Migration
  def change
    create_table :convocatoria do |t|
      t.string :codigo
      t.string :nombre_licitacion
      t.string :convocante
      t.string :tipo_contratacion
      t.string :sistema_adjudicacion
      t.string :forma_pago
      t.string :apertura_competencia
      t.string :estado

      t.timestamps
    end
  end
end
