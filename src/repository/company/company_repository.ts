import * as companyService from '@/service/company/company_service'

export function getCompanies(): Promise<Array<Company>> {
    return companyService.getCompanies()
}

export function getCompany(companyName: string): Promise<Company> {
    return companyService.getCompany(companyName)
}
