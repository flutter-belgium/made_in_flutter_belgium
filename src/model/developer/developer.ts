interface Developer {
    githubUserName: string,
    name?: string,
    description?: string,
    links?: {
        personalWebsite?: string,
        freelanceWebsite?: string,
    },
    images: {
        profilePictureUrl: string,
    },
    projects: Array<MinimizedProject>,
}
