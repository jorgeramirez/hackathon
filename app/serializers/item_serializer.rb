class ItemSerializer < ActiveModel::Serializer
  attributes :id, :producto_codigo, :producto_descripcion, :precio_minimo, :precio_maximo, :precio_promedio
end
