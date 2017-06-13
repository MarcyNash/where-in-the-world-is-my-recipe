'use strict'

const showRecipesTemplate = require('../templates/recipe-listing.handlebars')

const recipeEngine = require('../store')

const onGetRecipesSuccess = () => {
  console.log('onGetRecipesSuccess')
  $('.recipe-rows').empty()
  $('#recipes-table').show()
  const showRecipesHtml = showRecipesTemplate({ recipes: recipeEngine.recipes })
  $('.recipe-rows').append(showRecipesHtml)
  // Add an event listener for each edit and delete button
  // recipeEngine.addEditAndDeleteHandlers(recipeEngine.recipes)
}

const onGetRecipesFailure = (error) => {
  console.log('onGetRecipesFailure')
  console.log(error.status + ' - ' + error.statusText)
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
  $('#show-my-recipes-btn').click()
  $('#update-recipe-close').click()
}

const onUpdateRecipeFailure = (response) => {
  console.log('onUpdateRecipeFailure')
  // $('#notifications').text('Unable to update the Recipe.')
}

const onCreateRecipeSuccess = () => {
  console.log('onCreateRecipeSuccess')
  const recipeToArray = []
  recipeToArray.push(recipeEngine.recipe)
  $('#recipes-table').show()  // ??? should really check if hidden
  const showRecipesHtml = showRecipesTemplate({ recipes: recipeToArray })
  $('.recipe-rows').append(showRecipesHtml)
  // $('#notifications').text('Created the Tic Tac Toe Recipe. Start playing!')
  $('#add-recipe-close').click()
}

const onCreateRecipeFailure = (response) => {
  console.log('onCreateRecipeFailure')
  // $('#notifications').text('Unable to create the Recipe.')
}

const onDestroyRecipeSuccess = () => {
  console.log('onDestroyRecipeSuccess')
  $('#show-my-recipes-btn').click()
  // $('#notifications').text('Created the Tic Tac Toe Recipe. Start playing!')
}

const onDestroyRecipeFailure = (response) => {
  console.log('onDestroyRecipeFailure')
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
  onCreateRecipeFailure,
  onDestroyRecipeSuccess,
  onDestroyRecipeFailure
}
