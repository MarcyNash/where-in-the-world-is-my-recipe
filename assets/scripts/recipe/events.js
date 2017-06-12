'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onGetRecipes = function (event) {
  event.preventDefault()
  api.index()
  .then(ui.onGetRecipesSuccess)
  .catch(ui.onGetRecipesFailure)
}

const onGetRecipe = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.show(data)
  .then(ui.onGetRecipeSuccess)
  .catch(ui.onGetRecipeFailure)
}

const onUpdateRecipe = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.update(data)
  .then((response) => {
  })
  .then(ui.onUpdateRecipeSuccess)
  .catch(ui.onUpdateRecipeFailure)
}

const onCreateRecipe = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.create(data)
  .then(ui.onCreateRecipeSuccess)
  .catch(ui.onCreateRecipeFailure)
}

const addHandlers = () => {
  $('#add-recipe').on('submit', onCreateRecipe)
  $('#show-my-recipes-btn').on('click', onGetRecipes)
}

module.exports = {
  addHandlers,
  onUpdateRecipe,
  onCreateRecipe,
  onGetRecipes,
  onGetRecipe
}
