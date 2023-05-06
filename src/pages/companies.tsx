import Meta from "@/components/general/Meta"
import appConfig from "@/config/appConfig"
import { useEffect } from "react"
import PageContainer from "@/components/general/PageContainer"
import { useRouter } from "next/router"
import style from "@/styles/pages/Companies.module.scss"
import { translations } from "@/util/locale/localization"
import CompanyListViewModel from "@/viewmodel/company/list/company_list_viewmodel"

const CompanyListPage = () => {
  const router = useRouter()

  const viewModel = CompanyListViewModel()

  useEffect(() => {
    viewModel.init()
  }, [])

  const companies = viewModel.companies
  return (
    <>
      <Meta title={appConfig.website.name} />
      <PageContainer>
        <div className={style.titleContainer}>
          <h1>{translations.companies_title}</h1>
          <p>{translations.companies_subtitle}</p>
        </div>
      </PageContainer>
    </>
  )
}

export default CompanyListPage