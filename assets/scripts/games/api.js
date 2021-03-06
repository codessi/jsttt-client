const config = require('../config')
const store = require('../store')

const createGames = formData => {
  const user = store.user
  const headers = {}
  if (user) {
    headers.Authorization = 'Bearer ' + user.token
  }
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data: {},
    headers
  })
} // else { console.log('User not logged in.') }

const updateGames = data => {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const showGames = formData => {
  const user = store.user
  const headers = {}
  if (user) {
    headers.Authorization = 'Bearer ' + user.token
  }
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    data: {},
    headers
  })
}
//   return $.ajax({
//     url: config.apiUrl + '/games',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

module.exports = {
  createGames,
  updateGames,
  showGames
}
