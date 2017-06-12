'use strict'

const config = require('../config')
const store = require('../store')

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/recipes',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.token
    }
  })
  .then((response) => {
    console.log(response)
    store.recipes = response.recipes
  })
}

const show = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/recipes/' + store.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.token
    }
  })
  .then((response) => {
    console.log(response)
    store.recipe = response.recipe
  })
}

const update = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/recipes/' + store.recipe.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.token
    },
    data
  })
  .then((response) => {
    console.log(response)
    store.recipe = response.recipe
  })
}

const create = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/recipes',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.token
    },
    data
  })
  .then((response) => {
    console.log(response)
    store.recipe = response.recipe
  })
}

module.exports = {
  index,
  show,
  update,
  create
}
