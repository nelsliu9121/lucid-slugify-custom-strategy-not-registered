import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Restaurant from 'App/Models/Restaurant'
import RestaurantFactory from 'Database/factories/RestaurantFactory'

export default class RestaurantsController {
  public async index({ }: HttpContextContract) {
    return Restaurant.all()
  }

  public async create({ }: HttpContextContract) { }

  public async store({ }: HttpContextContract) {
    const restaurant = await RestaurantFactory.create()

    return restaurant
  }

  public async show({ }: HttpContextContract) { }

  public async edit({ }: HttpContextContract) { }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
