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
    store.recipes = response.recipes
  })
}

const show = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/recipes/' + data,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.token
    }
  })
  .then((response) => {
    store.recipe = response.recipe
  })
}

const update = function (data, id) {
  return $.ajax({
    url: config.apiOrigin + '/recipes/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.token
    },
    data
  })
  .then((response) => {
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
    store.recipe = response.recipe
  })
}

const destroy = function (recipeID) {
  return $.ajax({
    url: config.apiOrigin + '/recipes/' + recipeID,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.token
    }
  })
    .then((response) => {
      // console.log(response)
    })
}

module.exports = {
  index,
  show,
  update,
  create,
  destroy
}
