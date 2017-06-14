'use strict'

const showRecipesTemplate = require('../templates/recipe-listing.handlebars')

const recipeEngine = require('../store')

const onGetRecipesSuccess = () => {
  console.log('onGetRecipesSuccess')
  $('.recipe-rows').empty()

  const showRecipesHtml = showRecipesTemplate({ recipes: recipeEngine.recipes })
  $('.recipe-rows').append(showRecipesHtml)
  $('#welcome-pg').hide(500)
  $('#recipes-table').show(500)
}

const onGetRecipesFailure = (error) => {
  console.log('onGetRecipesFailure')
  console.log(error.status + ' - ' + error.statusText)
  // $('#notifications').text('Unable to get the requested Recipes. Cannot calculate statistics.')
  $('div#statusBar').text('Get recipes failed. Status = ' + error.status + ' ' + error.statusText)
  $('div#statusBar').show(3000)
  $('div#statusBar').hide(5000)
}

const onGetRecipeSuccess = (response) => {

}

const onGetRecipeFailure = (error) => {
  console.log('onGetRecipeSuccess')
  // $('#notifications').text('Unable to get the requested Recipe.')
  $('div#statusBar').text('Get recipe failed. Status = ' + error.status + ' ' + error.statusText)
  $('div#statusBar').show(3000)
  $('div#statusBar').hide(5000)
}

const onUpdateRecipeSuccess = (response) => {
  console.log('onUpdateRecipeSuccess')
  // $('#show-my-recipes-btn').click()
  $('#update-recipe-close').click()
  $('#show-my-recipes-btn').click()
}

const onUpdateRecipeFailure = (error) => {
  console.log('onUpdateRecipeFailure')
  $('div#statusBar').text('Edit recipe failed. Status = ' + error.status + ' ' + error.statusText)
  $('div#statusBar').show(3000)
  $('div#statusBar').hide(5000)
}

const onCreateRecipeSuccess = () => {
  console.log('onCreateRecipeSuccess')
  $('#add-recipe-close').click()
  const recipeToArray = []
  recipeToArray.push(recipeEngine.recipe)
  const showRecipesHtml = showRecipesTemplate({ recipes: recipeToArray })
  $('.recipe-rows').append(showRecipesHtml)
  $('#show-my-recipes-btn').click()
  // $('#welcome-pg').hide(200)
  // $('#recipes-table').show(200)
}

const onCreateRecipeFailure = (error) => {
  console.log('onCreateRecipeFailure')
  $('div#statusBar').text('Add recipe failed. Status = ' + error.status + ' ' + error.statusText)
  $('div#statusBar').show(3000)
  $('div#statusBar').hide(5000)
}

const onDestroyRecipeSuccess = () => {
  console.log('onDestroyRecipeSuccess')
  $('#show-my-recipes-btn').click()
  // $('#notifications').text('Created the Tic Tac Toe Recipe. Start playing!')
}

const onDestroyRecipeFailure = (error) => {
  console.log('onDestroyRecipeFailure')
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
