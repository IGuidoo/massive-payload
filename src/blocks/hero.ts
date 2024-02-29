import { Block } from "payload/types";

export const Hero: Block = {
    slug: "hero",
    labels: {
        singular: "Hero",
        plural: "Hero",
    },
    fields: [
        {
            name: "title",
            label: "Title",
            type: "text",
            required: true,
        },
        // {
        //     name: "slug",
        //     label: "Slug",
        //     type: "text",
        //     required: true,
        // },
        {
            name: 'heroImage',
            label: 'Hero Image',
            type: 'upload',
            relationTo: 'media',
        }
    ],
}




// export const Hero: React.FC = () => {
//     return (
//         <div>
//             <h1>Hero < /h1>
//         < /div>
//     )
// }
