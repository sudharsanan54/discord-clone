export const userSchema = {
    name: 'users',
    type: 'document',
    title: 'Users',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        {
            name: 'walletAddress',
            type: 'string',
            title: 'wallet Address',
        },
        {
            name: 'profileImage',
            type: 'string',
            title: 'Profile Image',
        }
    ],
}