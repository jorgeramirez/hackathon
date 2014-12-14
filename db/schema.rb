# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141214142313) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "api_keys", force: true do |t|
    t.integer  "usuario_id"
    t.string   "access_token"
    t.string   "scope"
    t.datetime "expired_at"
    t.datetime "created_at"
    t.integer  "sucursal_id"
  end

  add_index "api_keys", ["access_token"], name: "index_api_keys_on_access_token", unique: true, using: :btree
  add_index "api_keys", ["sucursal_id"], name: "index_api_keys_on_sucursal_id", using: :btree
  add_index "api_keys", ["usuario_id"], name: "index_api_keys_on_usuario_id", using: :btree

  create_table "categorias", force: true do |t|
    t.string   "codigo"
    t.string   "descripcion"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "convocatoria", force: true do |t|
    t.string   "estado"
    t.integer  "categoria_id"
    t.integer  "tipo_operacion_id"
    t.string   "tipo_garantia_oferta"
    t.string   "sistema_adjudicacion"
    t.string   "forma_pago"
    t.string   "moneda"
    t.string   "planificacion_id"
    t.string   "id_llamado"
    t.string   "nombre_licitacion"
    t.string   "convocante"
    t.string   "metodo_seleccion"
    t.string   "fecha_publicacion"
    t.string   "fuente_financiamiento"
    t.string   "plazo_entrega_adquisición"
    t.string   "lugar_entrega_adquisicion"
    t.string   "vigencia_contrato"
    t.string   "nombre_contacto"
    t.string   "cargo_contacto"
    t.string   "telefono_contacto"
    t.string   "email_contacto"
    t.string   "fecha_junta_aclaracion"
    t.string   "lugar_junta_aclaracion"
    t.string   "lugar_consulta"
    t.string   "fecha_tope_consulta"
    t.string   "fecha_tope_respuesta"
    t.string   "lugar_entrega_oferta"
    t.string   "fecha_entrega_oferta"
    t.string   "lugar_apertura_oferta"
    t.string   "fecha_apertura_oferta"
    t.string   "fecha_inicio_propuesta"
    t.string   "fecha_cierre_propuesta"
    t.string   "fecha_etapa_competitiva"
    t.string   "observaciones"
    t.string   "restricciones"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "convocatoria", ["categoria_id"], name: "index_convocatoria_on_categoria_id", using: :btree
  add_index "convocatoria", ["tipo_operacion_id"], name: "index_convocatoria_on_tipo_operacion_id", using: :btree

  create_table "items", force: true do |t|
    t.string   "producto_codigo"
    t.string   "producto_descripcion"
    t.string   "precio_minimo"
    t.string   "precio_maximo"
    t.string   "precio_promedio"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "pacs", force: true do |t|
    t.string   "id_pac"
    t.integer  "categoria_id"
    t.string   "id_llamado"
    t.string   "anio"
    t.integer  "tipo_operacion_id"
    t.string   "moneda"
    t.string   "nombre_licitacion"
    t.string   "convicante"
    t.string   "fecha_estimada"
    t.string   "fecha_publicacion"
    t.string   "estado_actual"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "pacs", ["categoria_id"], name: "index_pacs_on_categoria_id", using: :btree
  add_index "pacs", ["tipo_operacion_id"], name: "index_pacs_on_tipo_operacion_id", using: :btree

  create_table "recursos", force: true do |t|
    t.string   "codigo"
    t.string   "descripcion"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "recursos_roles", force: true do |t|
    t.integer  "rol_id"
    t.integer  "recurso_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "recursos_roles", ["recurso_id"], name: "index_recursos_roles_on_recurso_id", using: :btree
  add_index "recursos_roles", ["rol_id"], name: "index_recursos_roles_on_rol_id", using: :btree

  create_table "roles", force: true do |t|
    t.string   "codigo"
    t.string   "descripcion"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "roles_usuarios", force: true do |t|
    t.integer  "rol_id"
    t.integer  "usuario_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "roles_usuarios", ["rol_id"], name: "index_roles_usuarios_on_rol_id", using: :btree
  add_index "roles_usuarios", ["usuario_id"], name: "index_roles_usuarios_on_usuario_id", using: :btree

  create_table "sucursales_usuarios", force: true do |t|
    t.integer "usuario_id"
    t.integer "sucursal_id"
  end

  add_index "sucursales_usuarios", ["sucursal_id"], name: "index_sucursales_usuarios_on_sucursal_id", using: :btree
  add_index "sucursales_usuarios", ["usuario_id"], name: "index_sucursales_usuarios_on_usuario_id", using: :btree

  create_table "tipo_operaciones", force: true do |t|
    t.string   "codigo"
    t.string   "descripcion"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "usuarios", force: true do |t|
    t.string   "nombre"
    t.string   "apellido"
    t.string   "email"
    t.string   "username"
    t.string   "password_digest"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "direccion"
    t.string   "telefono"
  end

  add_index "usuarios", ["email"], name: "index_usuarios_on_email", unique: true, using: :btree
  add_index "usuarios", ["username"], name: "index_usuarios_on_username", unique: true, using: :btree

end
