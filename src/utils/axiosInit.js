import axios from 'axios'

export default {
  axiosInit(option, callback) {
    axios({
      method: option.axiosMethod || 'get',
      url: `${option.axiosUrl || ''}${option.axiosPath || ''}`,
      params: option.axiosParams || ''
    })
      .then(data => {
        callback && callback(data)
      })
      .catch(err => console.log(err))
  }
}
