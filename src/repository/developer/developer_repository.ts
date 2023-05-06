import * as developerService from '@/service/developer/developer_service'

export function getMinimizedDevelopers(): Promise<Array<MinimizedDeveloper>> {
    return developerService.getMinimizedDevelopers()
}

export function getDeveloper(githubUserName: string): Promise<Developer> {
    return developerService.getDeveloper(githubUserName)
}
