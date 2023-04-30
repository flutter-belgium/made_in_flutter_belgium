interface Company {
    name: string,
    description: string,
    useLogoInsteadOfTextTitle: boolean,
    developers: Array<{
        githubUserName: string,
        profilePictureUrl: string,
        role?: string,
    }>,
    projects: Array<MinimizedProject>,
    links: {
        website?: string,
    },
    images: {
        logoUrl: string,
    },
}
