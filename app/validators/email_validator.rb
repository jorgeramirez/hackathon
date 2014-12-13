class EmailValidator < ActiveModel::EachValidator
  @@invalid_message = I18n.t :invalid_email, scope: [:activerecord, :errors, :messages]
  def validate_each(record, attribute, value)
    record.errors.add attribute, (options[:message] || @@invalid_message) unless
      value =~ /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
  end
end