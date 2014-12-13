class DocumentoSerializer < ActiveModel::Serializer
  attributes :id, :nombre, :estado, :nombre_archivo, :archivo
  has_one :tipo_documento
end
