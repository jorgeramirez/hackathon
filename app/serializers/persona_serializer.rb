class PersonaSerializer < ActiveModel::Serializer
  attributes :id, :tipo_persona, :ci_ruc, :razon_social, :direccion, :barrio, :telefono, :celular, :estado_civil, :fecha_nacimiento, :correo, :antiguedad, :salario_mensual, :matricula_nro, :ramo, :otros_ingresos
  has_one :ciudad
  has_one :cargo
end
