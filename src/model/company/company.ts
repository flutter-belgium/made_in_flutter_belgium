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
    involvedProjects: Array<MinimizedProject>,
    links: {
        website?: string,
        jobWebsite?: string,
    },
    images: {
        logoUrl: string,
    },
    isAgency: boolean,
}
