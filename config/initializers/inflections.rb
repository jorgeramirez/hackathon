# Be sure to restart your server when you modify this file.

# Add new inflection rules using the following format. Inflections
# are locale specific, and you may define rules for as many different
# locales as you wish. All of these examples are active by default:
# ActiveSupport::Inflector.inflections(:en) do |inflect|
#   inflect.plural /^(ox)$/i, '\1en'
#   inflect.singular /^(ox)en/i, '\1'
#   inflect.irregular 'person', 'people'
#   inflect.uncountable %w( fish sheep )
# end

# These inflection rules are supported but not enabled by default:
# ActiveSupport::Inflector.inflections(:en) do |inflect|
#   inflect.acronym 'RESTful'
# end

ActiveSupport::Inflector.inflections(:en) do |inflect|
  inflect.acronym 'API'
  inflect.irregular 'empresa', 'empresas'
  inflect.irregular 'sucursal', 'sucursales'
  inflect.irregular 'rol', 'roles'
  inflect.irregular 'recurso', 'recursos'
  inflect.irregular 'usuario_surcursal', 'usuarios_sucursales'
  inflect.irregular 'sucursal_usuario', 'sucursales_usuarios'
  inflect.irregular 'categoria_cliente','categoria_clientes'
  inflect.irregular 'ciudad', 'ciudades'
  inflect.irregular 'vinculo_familiar', 'vinculo_familiares'
  inflect.irregular 'ingreso_familiar', 'ingreso_familiares'
  inflect.irregular 'referencia', 'referencias'
  inflect.irregular 'persona', 'personas'
  inflect.irregular 'solicitud','solicitudes'

end
