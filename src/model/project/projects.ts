interface Project {
    name: string,
    description: string,
    publisher?: string,
    developers: Array<{
        githubUserName: string,
        profilePicture: string,
    }>,
    releaseData: Date,
    links: {
        appstore?: string,
        playstore?: string,
        website?: string,
        youTube?: string,
        demoYouTubeVideo?: string,
    },
    images: {
        appIconUrl: string,
        companyLogoUrl?: string,
        bannerUrl?: string,
        screenshotUrls: Array<string>,
    },
}
