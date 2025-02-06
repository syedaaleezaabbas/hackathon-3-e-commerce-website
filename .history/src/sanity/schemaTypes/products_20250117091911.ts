import { defineField, defineType } from 'sanity'

export const products = defineType({
    name: 'products',
    title: 'Products',
    type: 'document',

    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'description',
            title: 'description',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title'
            }
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: 'originalPrice',
            title: 'Original Price',
            type: 'number',
        }),
        defineField({
            name: 'salesPrice',
            title: 'Sales Price',
            type: 'number',
        }),
        defineField({
            name: 'paragraph',
            title: 'Paragraph',
            type: 'text',
        }),
        defineField({
            name: 'availability',
            title: 'Availability',
            type: 'string',
        }),
    ]
})

