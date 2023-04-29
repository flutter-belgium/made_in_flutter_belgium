import { useState } from "react"
import * as projectsRepo from "@/repository/project/project_repository"
import { logError } from "@/util/logger/logger"

export default function ProjectDetailViewModel() {
    const [error, setError] = useState("")
    const [isLoading, setLoading] = useState(true)
    const [project, setProject] = useState<Project>()

    async function init(projectName: string) {
        await getData(projectName)
    }

    async function getData(projectName: string) {
        setLoading(true)
        try {
            const project = await projectsRepo.getProject(projectName)
            setProject(project)
        } catch (e) {
            logError('Failed to get minimized projects', e)
        }
        setLoading(false)
    }

    return {
        init,
        isLoading,
        error,
        project,
    }
}