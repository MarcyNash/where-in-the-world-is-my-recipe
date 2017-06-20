'use strict'

const showRecipesTemplate = require('../templates/recipe-listing.handlebars')

const recipeEngine = require('../store')

const onGetRecipesSuccess = () => {
  $('.recipe-rows').empty()

  const showRecipesHtml = showRecipesTemplate({ recipes: recipeEngine.recipes })
  $('.recipe-rows').append(showRecipesHtml)
  $('#welcome-pg').hide(500)
  $('#recipes-table').show(500)
}

const onGetRecipesFailure = (error) => {
  $('div#statusBar').text('Get recipes failed. Status = ' + error.status + ' ' + error.statusText)
  $('div#statusBar').show(3000)
  $('div#statusBar').hide(5000)
}

const onGetRecipeSuccess = (response) => {

}

const onGetRecipeFailure = (error) => {
  $('div#statusBar').text('Get recipe failed. Status = ' + error.status + ' ' + error.statusText)
  $('div#statusBar').show(3000)
  $('div#statusBar').hide(5000)
}

const onUpdateRecipeSuccess = (response) => {
  // $('#show-my-recipes-btn').click()
  $('#update-recipe-close').click()
  $('#show-my-recipes-btn').click()
}

const onUpdateRecipeFailure = (error) => {
  $('div#statusBar').text('Edit recipe failed. Status = ' + error.status + ' ' + error.statusText)
  $('div#statusBar').show(3000)
  $('div#statusBar').hide(5000)
}

const onCreateRecipeSuccess = () => {
  $('#add-recipe-close').click()
  const recipeToArray = []
  recipeToArray.push(recipeEngine.recipe)
  const showRecipesHtml = showRecipesTemplate({ recipes: recipeToArray })
  $('.recipe-rows').append(showRecipesHtml)
  $('#show-my-recipes-btn').click()
}

const onCreateRecipeFailure = (error) => {
  $('div#statusBar').text('Add recipe failed. Status = ' + error.status + ' ' + error.statusText)
  $('div#statusBar').show(3000)
  $('div#statusBar').hide(5000)
}

const onDestroyRecipeSuccess = () => {
  $('#show-my-recipes-btn').click()
}

const onDestroyRecipeFailure = (error) => {
  $('div#statusBar').text('Delete recipe failed. Status = ' + error.status + ' ' + error.statusText)
  $('div#statusBar').show(3000)
  $('div#statusBar').hide(5000)
}

module.exports = {
  onGetRecipesSuccess,
  onGetRecipesFailure,
  onGetRecipeSuccess,
  onGetRecipeFailure,
  onUpdateRecipeSuccess,
  onUpdateRecipeFailure,
  onCreateRecipeSuccess,
  onCreateRecipeFailure,
  onDestroyRecipeSuccess,
  onDestroyRecipeFailure
}
