import * as companyService from '@/service/company/company_service'

export function getMinimizedCompanies(): Promise<Array<MinimizedCompany>> {
    return companyService.getMinimizedCompanies()
}

export function getCompany(companyName: string): Promise<Company> {
    return companyService.getCompany(companyName)
}