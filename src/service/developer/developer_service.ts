import { apiClient } from "@/service/api_service"

export async function getMinimizedDevelopers(): Promise<Array<MinimizedDeveloper>> {
    const result = await apiClient.get('developers/minimized_all.json')
    return result.data
}

export async function getDeveloper(githubUserName: string): Promise<Developer> {
    const result = await apiClient.get(`developers/${githubUserName}/info.json`)
    return result.data
}