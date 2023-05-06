import { useState } from "react"
import * as developerRepo from "@/repository/developer/developer_repository"
import { logError } from "@/util/logger/logger"

export default function DeveloperDetailViewModel() {
    const [error, setError] = useState("")
    const [isLoading, setLoading] = useState(true)
    const [developer, setDeveloper] = useState<Developer>()

    async function init(companyName: string) {
        await getData(companyName)
    }

    async function getData(companyName: string) {
        if (!companyName) return
        setLoading(true)
        try {
            const developer = await developerRepo.getDeveloper(companyName)
            setDeveloper(developer)
        } catch (e) {
            logError('Failed to get company details', e)
        }
        setLoading(false)
    }

    return {
        init,
        isLoading,
        error,
        developer,
    }
}