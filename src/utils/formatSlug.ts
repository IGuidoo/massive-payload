import type { FieldHook } from 'payload/types'

const format = (val: string): string =>
    val
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '')
        .toLowerCase()

const formatSlug =
    (fallback: string): FieldHook =>
        ({ operation, value, originalDoc, data }) => {
            if (typeof value === 'string') {
                return format(value)
            }

            if (operation === 'create') {
                const fallbackData = data?.[fallback] || originalDoc?.[fallback]

                if (fallbackData && typeof fallbackData === 'string') {
                    return format(fallbackData)
                }

                // If no slug or fallback data is provided, use the 'title' field
                const title = data?.title || originalDoc?.title

                if (title && typeof title === 'string') {
                    return format(title)
                }

                // If no slug, fallback data, or title is provided, throw an error
                throw new Error('A slug or title must be provided.')
            }

            return value
        }

export default formatSlug