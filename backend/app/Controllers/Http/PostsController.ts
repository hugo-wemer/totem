import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'

export default class PostsController {
  public async index({}: HttpContextContract) {
    const posts = await Post.all()

    return posts
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only([
      'name',
      'temperature',
      'blood_oxygen',
      'heart_rate',
      'fever',
      'headache',
      'runny_nose'
    ])
    const post = await Post.create(data)
    return post
  }

  public async show({ params }: HttpContextContract) {
    const post = await Post.findOrFail(params.slug)
    return post
  }

  public async update({ request, params }: HttpContextContract) {
    const post = await Post.findOrFail(params.slug)
    const data = request.only(['transference'])
    post.merge(data)
    await post.save()
    return post
  }

  public async destroy({ params }: HttpContextContract) {
    const post = await Post.findOrFail(params.slug)
    await post.delete()
  }
}
