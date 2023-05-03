import { useState } from "react"
import * as companyRepo from "@/repository/company/company_repository"
import { logError } from "@/util/logger/logger"

export default function CompanyListViewModel() {
    const [error, setError] = useState("")
    const [isLoading, setLoading] = useState(true)
    const [companies, setCompanies] = useState<Array<Company>>([])

    async function init() {
        await getData()
    }

    async function getData() {
        setLoading(true)
        try {
            const companies = await companyRepo.getCompanies()
            setCompanies(companies)
        } catch (e) {
            logError('Failed to get company details', e)
        }
        setLoading(false)
    }

    return {
        init,
        isLoading,
        error,
        companies,
    }
}