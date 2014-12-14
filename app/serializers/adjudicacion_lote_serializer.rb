class AdjudicacionLoteSerializer < ActiveModel::Serializer
  attributes :id, :id_contrato, :id_lote, :numero_lote, :nombre_lote
  has_one :adjudicaciones
end
