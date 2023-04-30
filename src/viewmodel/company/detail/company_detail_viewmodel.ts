import { useState } from "react"
import * as companyRepo from "@/repository/company/company_repository"
import { logError } from "@/util/logger/logger"

export default function CompanyDetailViewModel() {
    const [error, setError] = useState("")
    const [devTeamLinks, setDevTeamLinks] = useState<Array<LinkItem>>([])
    const [isLoading, setLoading] = useState(true)
    const [company, setCompany] = useState<Company>()

    async function init(companyName: string) {
        await getData(companyName)
    }

    async function getData(companyName: string) {
        if (!companyName) return
        setLoading(true)
        try {
            const company = await companyRepo.getCompany(companyName)
            setCompany(company)
            setDevTeamLinks(company.developers.map((e) => ({
                title: e.githubUserName,
                imageUrl: e.profilePictureUrl,
                website: `/developer/${e.githubUserName}`,
            })))
        } catch (e) {
            logError('Failed to get company details', e)
        }
        setLoading(false)
    }

    return {
        init,
        isLoading,
        error,
        company,
        devTeamLinks,
    }
}