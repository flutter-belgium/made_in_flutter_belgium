import { useState } from "react"
import * as projectRepo from "@/repository/project/project_repository"
import { logError } from "@/util/logger/logger"

export default function ProjectDetailViewModel() {
    const [error, setError] = useState("")
    const [publisherLinks, setPublisherLinks] = useState<Array<LinkItem>>([])
    const [devTeamLinks, setDevTeamLinks] = useState<Array<LinkItem>>([])
    const [involvedCompanies, setInvolvedCompanies] = useState<Array<LinkItem>>([])
    const [isLoading, setLoading] = useState(true)
    const [project, setProject] = useState<Project>()

    async function init(projectName: string) {
        await getData(projectName)
    }

    async function getData(projectName: string) {
        if (!projectName) return
        setLoading(true)
        try {
            const project = await projectRepo.getProject(projectName)
            setProject(project)
            setDevTeamLinks(project.developers.map((e) => ({
                title: e.githubUserName,
                imageUrl: e.profilePictureUrl,
                website: `/developer?githubUserName=${e.githubUserName}`,
            })))
            setInvolvedCompanies(project.involvedCompanies.map((e) => ({
                title: e.name,
                imageUrl: e.logoUrl,
                website: `/company?name=${e.name}`,
            })))
            if (project.publisher) {
                setPublisherLinks([{
                    title: project.publisher,
                    imageUrl: project.images.companyLogoUrl!,
                    website: `/company?name=${project.publisher}`,
                }])
            }
        } catch (e) {
            logError('Failed to get project details', e)
        }
        setLoading(false)
    }

    return {
        init,
        isLoading,
        error,
        project,
        publisherLinks,
        involvedCompanies,
        devTeamLinks,
    }
}