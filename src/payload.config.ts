import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

// plugins
import seoPlugin from '@payloadcms/plugin-seo';

// collections
import Users from './collections/Users'
import BlogPosts from './collections/BlogPosts'
import Media from './collections/Media'
import Categories from './collections/Categories'
import nestedDocs from '@payloadcms/plugin-nested-docs'
import Tags from './collections/Tags'

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [
    Users,
    BlogPosts,
    Media,
    Categories,
    Tags,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    // nestedDocs({
    //   collections: ['blog-posts'],
    // }),
    seoPlugin({
      collections: [
        'blog-posts'
      ],
      uploadsCollection: 'media',
      // @ts-ignore
      generateTitle: ({ doc }) => `Massive - ${doc.title.value}`,
      // @ts-ignore
      generateDescription: ({ doc }) => doc.excerpt,
    })
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
})
