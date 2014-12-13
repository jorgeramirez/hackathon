class API::V1::PersonasController < ApplicationController
  respond_to :json

  PER_PAGE_RECORDS = 5

  def index
    @personas = apply_scopes(Persona).page(params[:page]).per(PER_PAGE_RECORDS)
    render json: @personas, each_serializer: PersonaSerializer, meta: {total: apply_scopes(Persona).all.count, total_pages: @personas.num_pages}
  end

  def show
    respond_with Persona.find(params[:id])
  end

  def persona_params
    params.require(:persona).permit(:tipo_persona, :ci_ruc, :razon_social, :direccion, :barrio, :telefono, :celular, :estado_civil, :fecha_nacimiento, :correo, :antiguedad, :salario_mensual, :matricula_nro, :ramo, :otros_ingresos, :ciudad_id, :cargo_id)
  end


end
