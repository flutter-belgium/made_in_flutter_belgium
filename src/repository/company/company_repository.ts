import * as companyService from '@/service/company/company_service'

export function getCompany(companyName: string): Promise<Company> {
    return companyService.getCompany(companyName)
}
