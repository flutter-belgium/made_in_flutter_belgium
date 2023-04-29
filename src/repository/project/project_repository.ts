import * as projectService from '@/service/project/project_service'

export async function getMinimizedProjects(): Promise<Array<MinimizedProject>> {
    return projectService.getMinimizedProjects()
}

export function getProject(projectName: string): Promise<Project> {
    return projectService.getProject(projectName)
}
