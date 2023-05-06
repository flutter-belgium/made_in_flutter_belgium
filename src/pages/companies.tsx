import Meta from "@/components/general/Meta"
import { useEffect } from "react"
import PageContainer from "@/components/general/PageContainer"
import style from "@/styles/pages/Companies.module.scss"
import { translations } from "@/util/locale/localization"
import CompanyListViewModel from "@/viewmodel/company/list/company_list_viewmodel"
import CompanyList from "@/components/company/list/CompanyList"

const CompanyListPage = () => {

  const viewModel = CompanyListViewModel()

  useEffect(() => {
    viewModel.init()
  }, [])

  const companies = viewModel.companies
  return (
    <>
    <Meta title={translations.companies_meta_title} />
      <PageContainer>
        <div className={style.titleContainer}>
          <h1>{translations.companies_title}</h1>
          <p>{translations.companies_subtitle}</p>
        </div>
        <CompanyList
          companies={companies} />
      </PageContainer>
    </>
  )
}

export default CompanyListPage