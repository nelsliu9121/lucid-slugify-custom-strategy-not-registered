import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import { TransliterateSlugifyStrategy } from 'App/Strategies/slugify/Transliterate'

export default class AppProvider {
  constructor(protected app: ApplicationContract) {
  }

  public register() {
    // Register your own bindings
  }

  public async boot() {
    const { Slugify } = this.app.container.use('Adonis/Addons/LucidSlugify')

    Slugify.extend(
      'transliterate',
      (_slugify, config) => {
        return new TransliterateSlugifyStrategy(config)
      }
    )
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
