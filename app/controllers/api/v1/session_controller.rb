# encoding: utf-8
class API::V1::SessionController < ApplicationController
  def create
    user = Usuario.where("username = ? OR email = ?", params[:username], params[:username]).first
    check_only = params[:check_only] == "1"

    if user
      verificarPassword = user.authenticate(params[:password])
      if verificarPassword
        permisos = user.getPermisos
        if check_only
          render json: {:username =>  params[:username], :nombre => user.nombre_completo, :permisos => permisos }, status: 201
        else
          session = user.session_api_key(params[:sucursal])

          render json: {:access_token => session.access_token, :token_type => 'bearer', 
            :username =>  params[:username], :nombre => user.nombre_completo, :sucursal => sucursal.descripcion, :permisos => permisos }, status: 201
        end
      else
        if not verificarSucursal
          render json: {:errors =>"Sin acceso a sucursal"}, status: 401
        else 
          render json: {:errors =>"Credenciales no válidas"}, status: 401
        end
      end
    else
      render json: {:errors =>"Credenciales no válidas"}, status: 401
    end
  end
end
