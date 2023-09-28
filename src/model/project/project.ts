interface Project {
    name: string,
    description: string,
    publisher?: string,
    developers: Array<{
        githubUserName: string,
        profilePictureUrl: string,
    }>,
    releaseData: Date,
    links: {
        appstore?: string,
        playstore?: string,
        webApp?: string,
        marketingWebsite?: string,
        youTube?: string,
        demoYouTubeVideo?: string,
        openSourceCode?: string,
    },
    images: {
        appIconUrl: string,
        companyLogoUrl?: string,
        bannerUrl?: string,
        mockupPrimaryUrl?: string,
        mockupSecondaryUrl?: string,
        screenshotUrls: Array<string>,
    },
    involvedCompanies: Array<MinimizedCompany>,
}
