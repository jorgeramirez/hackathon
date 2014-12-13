class ConvocatoriaSerializer < ActiveModel::Serializer
  attributes :id, :codigo, :nombre_licitacion, :convocante, :tipo_contratacion, :sistema_adjudicacion, :forma_pago, :apertura_competencia, :estado
end
