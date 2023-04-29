import { apiClient } from "@/service/api_service"

export async function getCompany(companyName: string): Promise<Company> {
    const result = await apiClient.get(`companies/${companyName}/info.json`)
    return result.data
}