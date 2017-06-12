'use strict'

const showRecipesTemplate = require('../templates/recipe-listing.handlebars')

const recipeEngine = require('../store')

const onGetRecipesSuccess = () => {
  console.log('onGetRecipesSuccess')
  $('.recipe-rows').empty()
  $('#recipes-table').show()
  const showRecipesHtml = showRecipesTemplate({ recipes: recipeEngine.recipes })
  $('.recipe-rows').append(showRecipesHtml)
}

const onGetRecipesFailure = (response) => {
  console.log('onGetRecipesFailure')
  // $('#notifications').text('Unable to get the requested Recipes. Cannot calculate statistics.')
}

const onGetRecipeSuccess = (response) => {
  // $('#notifications').text('Got the requested Recipe.')
  console.log('onGetRecipesFailure')
}

const onGetRecipeFailure = (response) => {
  console.log('onGetRecipeSuccess')
  // $('#notifications').text('Unable to get the requested Recipe.')
}

const onUpdateRecipeSuccess = (response) => {
  console.log('onUpdateRecipeSuccess')
}

const onUpdateRecipeFailure = (response) => {
  console.log('onUpdateRecipeFailure')
  // $('#notifications').text('Unable to update the Recipe.')
}

const onCreateRecipeSuccess = (response) => {
  console.log('onCreateRecipeSuccess')
  const recipeToArray = []
  recipeToArray.push(recipeEngine.recipe)
  const showRecipesHtml = showRecipesTemplate({ recipes: recipeToArray })
  $('.recipe-rows').append(showRecipesHtml)
  // $('#notifications').text('Created the Tic Tac Toe Recipe. Start playing!')
}

const onCreateRecipeFailure = (response) => {
  console.log('onCreateRecipeFailure')
  // $('#notifications').text('Unable to create the Recipe.')
}

module.exports = {
  onGetRecipesSuccess,
  onGetRecipesFailure,
  onGetRecipeSuccess,
  onGetRecipeFailure,
  onUpdateRecipeSuccess,
  onUpdateRecipeFailure,
  onCreateRecipeSuccess,
  onCreateRecipeFailure
}
