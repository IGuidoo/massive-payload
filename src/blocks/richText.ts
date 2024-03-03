import { Block } from "payload/types";

export const RichText: Block = {
    slug: "RichText",
    labels: {
        singular: "Rich Text",
        plural: "Rich Textareas",
    },
    fields: [
        {
            name: "content",
            label: "Content",
            type: "richText",
            required: true,
        }
    ],
}
