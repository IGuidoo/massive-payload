import { CollectionConfig } from "payload/types";

const Authors: CollectionConfig = {
    slug: "writers",
    access: {
        read: () => true
    },
    admin: {
        useAsTitle: 'fullName',
    },   
    fields: [
        {
            name: 'firstName',
            label: 'First Name',
            type: 'text',
            required: true,
        },
        {
            name: 'lastName',
            label: 'Last Name',
            type: 'text',
            required: true,
        },
        {
            name: 'fullName',
            label: 'Full Name/ Display Name',
            type: 'text',
            required: true,
        },
        {
            name: 'bioGraphy',
            label: 'Bio',
            type: 'textarea',
            required: true,
        },
        {
            name: 'profilePicture',
            label: 'Profile Picture',
            type: 'upload',
            relationTo: 'media',
            // required: true,
        }
    ]
}

export default Authors;