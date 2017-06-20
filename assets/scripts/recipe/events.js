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

const onShowUpdateForm = function (event) {
  const recipeID = event.relatedTarget.parentNode.getAttribute('data-id')

  const currentRow = $(event.relatedTarget).closest('tr')
  const name = currentRow.find('.rname').text()
  const location = currentRow.find('.rlocation').text()
  const comment = currentRow.find('.rcomment').text()

  const form = $('#update-recipe')
  form.find('.modal-title').text('Update Recipe')
  form.find('.urname').val(name)
  form.find('.urlocation').val(location)
  form.find('.urcomment').val(comment)
  form.find('.urid').val(recipeID)
  form.find('.urid').hide()

  // $('.modal-body.recipeID').val(recipeID)
}

const onUpdateRecipe = function (event) {
  event.preventDefault()
  const form = $('#update-recipe')
  const recipeID = form.find('.urid').val()
  const data = getFormFields(event.target)
  api.update(data, recipeID)
  .then((response) => {
    // console.log('onUpdateRecipe')
    // console.log(response)
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

const onDeleteRecipe = function (event) {
  event.preventDefault()
  const recipeID = event.currentTarget.parentNode.getAttribute('data-id')
  api.destroy(recipeID)
  .then(ui.onDestroyRecipeSuccess)
  .catch(ui.onDestroyRecipeFailure)
}

const addHandlers = () => {
  $('#add-recipe').on('submit', onCreateRecipe)
  $('#update-recipe').on('show.bs.modal', onShowUpdateForm)
  $('#show-my-recipes-btn').on('click', onGetRecipes)
  $('body').on('click', '.deleteRecipe', onDeleteRecipe)
  $('#update-recipe').on('submit', onUpdateRecipe)
}

module.exports = {
  addHandlers,
  onShowUpdateForm,
  onUpdateRecipe,
  onCreateRecipe,
  onGetRecipes,
  onGetRecipe,
  onDeleteRecipe
}
