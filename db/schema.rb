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

ActiveRecord::Schema.define(version: 20141213192311) do

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
