const axios = require('axios')

const isPublic = repo =>
  new Promise((resolve, reject) => {
    axios
      .head('https://github.com/' + repo)
      .then(response => resolve(true))
      .catch(error => {
        if (error.response && error.response.status === 404) resolve(false)
        else reject('Could not fetch information')
      })
  })

module.exports = isPublic
