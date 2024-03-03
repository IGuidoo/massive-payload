import type { CollectionConfig } from 'payload/types'
import { slugField } from '../fields/slug'

const Tags: CollectionConfig = {
    slug: 'tags',
    admin: {
        useAsTitle: 'title',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'categories',
            type: 'relationship',
            relationTo: 'categories',
            required: true,
            admin: {
                position: 'sidebar',
            },
        },
        slugField()
    ],
}

export default Tags
