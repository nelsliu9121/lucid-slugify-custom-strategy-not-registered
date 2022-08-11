import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import RestaurantFactory from 'Database/factories/RestaurantFactory'

export default class extends BaseSeeder {
  public async run() {
    RestaurantFactory.createMany(25)
  }
}
