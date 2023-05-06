import { apiClient } from "@/service/api_service"

export async function getMinimizedProjects(): Promise<Array<MinimizedProject>> {
    const result = await apiClient.get('projects/minimized_all.json')
    return result.data
}

export async function getProject(projectName: string): Promise<Project> {
    const result = await apiClient.get(`projects/${projectName}/info.json`)
    return result.data
}