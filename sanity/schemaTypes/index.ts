import { type SchemaTypeDefinition } from 'sanity'
import { productType } from './product'
import { categoryType } from './category'
import { reviewType } from './review'
import { blogType } from './blog'
import { areaPageType } from './areaPage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType, categoryType, reviewType, blogType, areaPageType],
}
