import Restaurant from 'App/Models/Restaurant'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Restaurant, ({ faker }) => {
  return {
    name: faker.name.fullName(),
  }
}).build()
