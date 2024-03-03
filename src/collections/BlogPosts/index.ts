import { CollectionConfig } from "payload/types";
import { Hero } from "../../blocks/hero";
import { slugField } from "../../fields/slug";
import { RichText } from "../../blocks/richText";

const BlogPosts: CollectionConfig = {
    slug: "blog-posts",
    labels: {
        singular: "Blog Post",
        plural: "Blog Posts",
    },
    admin: {
        useAsTitle: "title",
    },
    access: {
        read: () => true
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Page',
                    description: 'settings for the page',
                    fields: [
                        {
                            name: "title",
                            label: "Title",
                            type: "text",
                            required: true,
                        },
                        {
                            name: "timeToRead",
                            label: "Time to Read",
                            type: "number",
                            required: true,
                        }
                    ]
                },
                {
                    label: 'Hero',
                    description: 'settings for the hero',
                    fields: [
                        {
                            name: 'heroImage',
                            label: 'Hero Image',
                            type: 'upload',
                            relationTo: 'media',
                        }
                    ]
                },
                {
                    label: 'Content',
                    description: 'settings for the content',
                    fields: [
                        {
                            name: "layout",
                            label: "Layout",
                            type: "blocks",
                            blocks: [
                                Hero,
                                RichText
                            ]
                        },
                    ]
                },
                {
                    label: 'Related Posts',
                    description: 'settings for related posts',
                    fields: [
                        {
                            name: 'relatedPosts',
                            type: 'relationship',
                            relationTo: 'blog-posts',
                            hasMany: true,
                            filterOptions: ({ id }) => {
                                return {
                                    id: {
                                        not_in: [id],
                                    },
                                }
                            },
                        },
                    ]
                }
            ]
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
        {
            name: 'tags',
            type: 'relationship',
            relationTo: 'tags',
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'writers',
            type: 'relationship',
            relationTo: 'writers',
            hasMany: true,

            admin: {
                position: 'sidebar',

                // labelField: 'fullName',
            },
        },
        {
            name: 'publishedAt',
            type: 'date',
            required: true,
            admin: {
                position: 'sidebar',
                date: {
                    pickerAppearance: 'dayAndTime',
                },
            },
            hooks: {
                beforeChange: [
                    ({ siblingData, value }) => {
                        if (siblingData._status === 'published' && !value) {
                            return new Date()
                        }
                        return value
                    },
                ],
            },
        },
        slugField(),

        // {
        //     name: "slug",
        //     label: "Slug",
        //     type: "text",
        //     hooks: {
        //         beforeChange: [
        //             async ({ data, originalDoc, req }) => {
        //                 const { categories, tags } = data;

        //                 console.log('Data:', data);

        //                 // // Assuming you have functions to fetch category and tag names by their IDs
        //                 const categorieSlug = await getCategorieSlugById(categories);
        //                 console.log('Category Names:', categorieSlug);
        //                 const tagSlug = await getTagSlugById(tags);
        //                 console.log('Tag Names:', tagSlug);
        //                 // const tagNames = await fetchTagNamesByIds(tags, req);

        //                 // Create slug parts, ensuring they are URL-friendly
        //                 // const categorySlugPart = categorieSlug.map(name => name.toLowerCase().replace(/ /g, '-')).join(',');
        //                 // const tagSlugPart = tagNames.map(name => name.toLowerCase().replace(/ /g, '-')).join(',');

        //                 // Construct the full slug
        //                 return `/categorie/${categorieSlug}/tag/${tagSlug}`;
        //             },
        //         ],
        //     }
        // },
    ],
}

export default BlogPosts
