export default {
  forDataAction(dataValue, callback) {
    for (let i = 0; i < dataValue.length; i++) {
      callback(dataValue[i])
    }
  }
}
