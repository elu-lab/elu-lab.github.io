const BASE_PATH = '/'

export function httpGet (path, onSuccess, onError) {
  window.axios.get(BASE_PATH + path.join('/'), { withCredentials: true })
    .then((response) => {
      if (response.status !== 200) return onError('HTTP connection error')
      onSuccess(response.data)
    }).catch((error) => onError(error))
}

export function monthParser(month) {
  if (typeof(month) === 'undefined') return ''

  month = month.toLowerCase()
  if (month.startsWith("jan")) return "01"
  if (month.startsWith("feb")) return "02"
  if (month.startsWith("mar")) return "03"
  if (month.startsWith("apr")) return "04"
  if (month.startsWith("may")) return "05"
  if (month.startsWith("jun")) return "06"
  if (month.startsWith("jul")) return "07"
  if (month.startsWith("aug")) return "08"
  if (month.startsWith("sep")) return "09"
  if (month.startsWith("oct")) return "10"
  if (month.startsWith("nov")) return "11"
  if (month.startsWith("dec")) return "12"
}


export function nameParser(names) {
  return names.split('and').map((name) => {
    const split = name.split(',')
    if (split.length > 1) {
      return split[1].trim() + ' ' + split[0].trim()
    } else {
      return name.trim()
    }
  })
}
