import Route from '@ioc:Adonis/Core/Route'
import './auth'
import './posts'
import './registers'

Route.get('/', 'PostsController.index')
