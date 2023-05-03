import Meta from "@/components/general/Meta"
import appConfig from "@/config/appConfig"
import { useEffect } from "react"
import PageContainer from "@/components/general/PageContainer"
import { useRouter } from "next/router"
import Image from "next/image"
import LinkSection from "@/components/general/link/LinkSection"
import style from "@/styles/pages/Company.module.scss"
import CompanyDetailViewModel from "@/viewmodel/company/detail/company_detail_viewmodel"
import Button from "@/components/general/Button"
import ProjectList from "@/components/project/list/ProjectList"
import { translations } from "@/util/locale/localization"

const CompanyListPage = () => {
  const router = useRouter()

  const viewModel = CompanyDetailViewModel()

  useEffect(() => {
    viewModel.init(router.query.name as string)
  }, [router.query.name])

  const company = viewModel.company
  return (
    <>
      <Meta title={appConfig.website.name} />
      <PageContainer>
        {
          company == null ?
            null :
            <div className={style.container}>
              <div className={style.infoContainer}>
                <div className={style.titleContainer}>
                  <Image
                    className={company.useLogoInsteadOfTextTitle ? style.titleImage : style.titleText}
                    height={company.useLogoInsteadOfTextTitle ? 64 : 48}
                    width={company.useLogoInsteadOfTextTitle ? 64 : 48}
                    alt={company.name}
                    src={company.images.logoUrl} />
                  {
                    company.useLogoInsteadOfTextTitle ?
                      null :
                      <h1>{company.name}</h1>
                  }
                </div>
                <p className={style.description}>{company.description}</p>
                <Button
                  title={translations.company_detail_website_btn}
                  linkTo={company.links.website}
                  target="_blank" />
                <div className={style.phoneProjectListContainer}>
                  <ProjectList
                    projects={company.projects} />
                </div>
                <LinkSection
                  title={translations.company_detail_dev_team_title}
                  largeImages={false}
                  links={viewModel.devTeamLinks} />
              </div>
              <div className={style.projectListContainer}>
                <ProjectList
                  projects={company.projects} />
              </div>
            </div>
        }
      </PageContainer>
    </>
  )
}

export default CompanyListPage