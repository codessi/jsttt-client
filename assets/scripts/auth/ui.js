const store = require('./../store')

const onSignUpSuccess = function (res) {
  const user = res.user
  $('#sign-up-display').html(`
    <p>New user
    ${user.email} successfully created!</p>
  `)
}
const onSignUpError = function (error) {
  $('#sign-up-display').text('Error Signing Up Code: ' + error.statusText)
  console.log('error is:', error)
}
const onSignInSuccess = function (res) {
  const user = res.user
  store.user = res.user
  $('#sign-in-display').html(`
    <p>Hello
    ${user.email}! </p>
  `)
}
const onSignInError = function (error) {
  $('#sign-in-display').text('Error Signing In Code: ' + error.statusText)
  console.log('error is:', error)
}

const onSignOutSuccess = function () {
  $('#sign-out-display').html(`
    <p>User ${store.user.email} successfully signed out! </p>
  `)
}

const onSignOutError = function (error) {
  $('#sign-out-display').text('Error Signing Out Code: ' + error.statusText)
  console.log('error is:', error)
}

const onChangePwSuccess = function () {
  $('#change-pw-display').text('Password successfully changed!')
}

const onChangePwError = function (error) {
  $('#change-pw-display').text('Error Changing Password Code: ' + error.statusText)
  console.log('error is:', error)
}

module.exports = {
  onSignUpSuccess,
  onSignUpError,
  onSignInSuccess,
  onSignInError,
  onSignOutSuccess,
  onSignOutError,
  onChangePwSuccess,
  onChangePwError
}