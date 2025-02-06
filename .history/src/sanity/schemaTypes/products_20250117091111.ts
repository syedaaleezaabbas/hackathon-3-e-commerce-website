import { defineField, defineType } from 'sanity'

export const products = defineType({
    name: 'products',
    title: 'Products',
    type: 'document',

    fields: [
        defineField({
            name: 'name',
            title: 'Product Name',
            type: 'string'
        }),
        defineField({
            name: 'image',
            title: 'Product Image',
            type: 'image',
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: 'price',
            title: 'Product Price',
            type: 'number',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'stock',
            title: 'Stock',
            type: 'number',
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{ type: 'category' }]
        }),
    ]
})

