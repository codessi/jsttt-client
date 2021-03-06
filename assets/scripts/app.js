'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./games/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // Hide these when you first open the webpage
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#create-games').hide()
  $('#create-show-games').hide()
  $('#gameboard').hide()
  $('#change-password').hide()
  // Eventlisteners
  $('#sign-up').on('submit', authEvents.signUp)
  $('#sign-in').on('submit', authEvents.signIn)
  $('#sign-out').on('submit', authEvents.signOut)
  $('#change-password').on('submit', authEvents.changePassword)
  $('#create-games').on('click', gameEvents.createGames)
  // $('#create-games').on('click', function (event) {
  //   gameData = ['', '', '', '', '', '', '', '', '']
  //   gameEvents.createGames(event)
  // })
  $('#show-games').on('click', gameEvents.showGames)
  $('.box').on('click', gameEvents.playGames)
})
