class PhoneNumberValidator < ActiveModel::EachValidator
  @@invalid_message = I18n.t :invalid_phone_number, scope: [:activerecord, :errors, :messages]
  def validate_each(record, attribute, value)
    record.errors.add attribute, (options[:message] || @@invalid_message) unless
      value =~ /(\(\d{4}\))?\d{3}-?\d{3}$/
    end
end