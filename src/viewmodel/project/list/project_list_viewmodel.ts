import { useState } from "react"
import * as projectsRepo from "@/repository/project/project_repository"
import { logError } from "@/util/logger/logger"

export default function ProjectListViewModel() {
    const [error, setError] = useState<unknown>()
    const [isLoading, setLoading] = useState(true)
    const [projects, setProjects] = useState<Array<MinimizedProject>>([])

    async function init() {
        await getData()
    }

    async function getData() {
        setLoading(true)
        try {
            const projects = await projectsRepo.getMinimizedProjects()
            setProjects(projects)
        } catch (e) {
            logError('Failed to get minimized projects', e)
            setError(e)
        }
        setLoading(false)
    }

    return {
        init,
        isLoading,
        error,
        projects,
    }
}