export const isValid = (value: any) => !!value || 'This field is required'
export const isEmail = (email: string) =>
  /(.+)@(.+){2,}\.(.+){2,}/.test(email) || 'Please enter a valid email'
export const isZipCode = (zip: string) =>
  /^\d{5}(?:[-\s]\d{4})?$/.test(zip) || 'Please enter a valid zip code'
export const isValidPhone = (phone: string) =>
  /\(\d{3}\) \d{3}-\d{4}( ext \d{2,5})?/.test(phone) ||
  'Please enter a valid phone number'
export const isValidFax = (phone: string) =>
  /\(\d{3}\) \d{3}-\d{4}( ext \d{2,5})?/.test(phone) ||
  'Please enter a valid fax number'
export const isValidSSN = (ssn: string) =>
  /\d{3}-\d{2}-\d{4}/.test(ssn) ||
  'Please enter a valid SSN'

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
