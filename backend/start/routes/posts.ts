import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'PostsController.index')
  Route.post('/', 'PostsController.store').middleware('auth')

  Route.get('/:id', 'PostsController.show')
  Route.put('/:id', 'PostsController.update').middleware('auth')
  Route.delete('/:id', 'PostsController.destroy').middleware('auth')
}).prefix('/posts')
