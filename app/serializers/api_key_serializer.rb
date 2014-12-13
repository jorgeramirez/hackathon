class APIKeySerializer < ActiveModel::Serializer
  attributes :id, :access_token
  has_one :usuario, embed: :id
end
