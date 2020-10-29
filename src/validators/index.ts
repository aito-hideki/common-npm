export const isValid = (
  value: any,
  message = 'This field is required'
) => !!value || message

export const isEmail = (
  email: string,
  message = 'Please enter a valid email'
) => /(.+)@(.+){2,}\.(.+){2,}/.test(email) || message

export const isZipCode = (
  zip: string,
  message = 'Please enter a valid zip code'
) => /^\d{5}(?:[-\s]\d{4})?$/.test(zip) || message

export const isValidPhone = (
  phone: string,
  message = 'Please enter a valid phone number'
) => /\(\d{3}\) \d{3}-\d{4}( ext \d{2,5})?/.test(phone) || message

export const isValidFax = (
  fax: string,
  message = 'Please enter a valid fax number'
) => /\(\d{3}\) \d{3}-\d{4}( ext \d{2,5})?/.test(fax) || message

export const isValidSSN = (
  ssn: string,
  message = 'Please enter a valid SSN'
) => /\d{3}-\d{2}-\d{4}/.test(ssn) || message

const formatPhoneNumber = (number = '', format = true) => {
  if (!format) {
    return number.replace(/\D/g, '')
  }

  const cleaned = number.replace(/D/g, '')
  let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }

  match = cleaned.match(/^(\d{3})(\d{3})(\d{4})(\d{2,5})$/)
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]} ext ${match[4]}`
  }

  return ''
}

const formatSSN = (ssn = '', format = true) => {
  if (!format) {
    return ssn.replace(/\D/g, '')
  }

  const cleaned = ssn.replace(/D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{2})(\d{4})$/)
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`
  }

  return ''
}

export default {
  isValid,
  isEmail,
  isZipCode,
  isValidPhone,
  isValidFax,
  isValidSSN,
  formatPhoneNumber,
  formatSSN
}
