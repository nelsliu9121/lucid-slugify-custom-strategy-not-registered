import {
  SlugifyConfig,
  SlugifyStrategyContract,
} from '@ioc:Adonis/Addons/LucidSlugify'
import { LucidModel } from '@ioc:Adonis/Lucid/Orm'
import { slugify } from 'transliteration'

export class TransliterateSlugifyStrategy implements SlugifyStrategyContract {
  constructor(private config: SlugifyConfig) { }

  public makeSlug(
    _model: LucidModel,
    _field: string,
    value: string
  ) {
    return slugify(
      value,
      { separator: this.config.separator }
    )
  }

  public makeSlugUnique(
    _model: LucidModel,
    _field: string,
    slug: string
  ) {
    return slug + (this.config.separator ?? '_') + 'duplicates'
  }
}
