export default {
  dateFormatAction(dateValue, formatType) {
    const dateGetTime = new Date(dateValue)
    const y = dateGetTime.getFullYear()
    let m = dateGetTime.getMonth() + 1
    let d = dateGetTime.getDate()
    let h = dateGetTime.getHours()
    let mi = dateGetTime.getMinutes()
    let s = dateGetTime.getSeconds()
    if (m < 10) {
      m = `0${m}`
    }
    if (d < 10) {
      d = `0${d}`
    }
    if (h < 10) {
      h = `0${h}`
    }
    if (mi < 10) {
      mi = `0${mi}`
    }
    if (s < 10) {
      s = `0${s}`
    }
    const formatValue = formatType.replace('YYYY', y).replace('MM', m).replace('DD', d).replace('hh', h).replace('mm', mi).replace('ss', s)
    return formatValue
  }
}
