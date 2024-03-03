import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
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
    },
    // Email added by default
    // Add more fields as needed
  ],
}

export default Users
