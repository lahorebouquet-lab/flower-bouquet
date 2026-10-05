import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Lahore Bouquet Content')
    .items([
      S.documentTypeListItem('product').title('Bouquets & Products'),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('review').title('Customer Reviews'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['product', 'category', 'review'].includes(item.getId()!)
      ),
    ])
