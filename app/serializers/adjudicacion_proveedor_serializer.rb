class AdjudicacionProveedorSerializer < ActiveModel::Serializer
  attributes :id, :monto_adjudicado, :moneda, :id_contrato, :codigo_contratacion, :razon_social, :ruc
  has_one :adjudicaciones
end
