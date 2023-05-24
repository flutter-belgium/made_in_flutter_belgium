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
import { IconType } from "@/components/general/link/LinkSectionItem"

const CompanyDetailPage = () => {
  const router = useRouter()

  const viewModel = CompanyDetailViewModel()

  useEffect(() => {
    viewModel.init(router.query.name as string)
  }, [router.query.name])

  const company = viewModel.company
  const hasInvolvedProjects = (company?.involvedProjects.length ?? 0) > 0;
  return (
    <>
      <Meta title={`${translations.company_title}${company?.name ?? appConfig.website.name}`} />
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
                {
                  company.isAgency ?
                    <p className={style.agencyDecsription}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><circle cx="128" cy="128" r="96" opacity="0.2" /><path d="M120,120a8,8,0,0,1,8,8v40a8,8,0,0,0,8,8" fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><circle cx="128" cy="128" r="96" fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><circle fill="black" cx="124" cy="84" r="12" /></svg>
                      {`${company.name} ${translations.company_agency_description}`}
                    </p>
                    : <></>
                }
                <div className={style.linksContainer}>
                  <Button
                    title={translations.company_detail_website_btn}
                    linkTo={company.links.website}
                    target="_blank" />
                  {
                    company.links.jobWebsite ?
                      <Button
                        title={translations.company_detail_job_website_btn}
                        linkTo={company.links.jobWebsite}
                        target="_blank" />
                      : <></>
                  }
                </div>
                <div className={style.phoneProjectListContainer}>
                  {
                    hasInvolvedProjects ?
                      <ProjectList
                        title={translations.companies_involved_projects_title}
                        projects={company.involvedProjects} />
                      : <></>
                  }
                  <ProjectList
                    title={hasInvolvedProjects ? translations.companies_projects_title : undefined}
                    projects={company.projects} />
                </div>
                <LinkSection
                  title={translations.company_detail_dev_team_title}
                  iconType={IconType.smallCircle}
                  links={viewModel.devTeamLinks} />
              </div>
              <div className={style.projectListContainer}>
                {
                  hasInvolvedProjects ?
                    <ProjectList
                      title={translations.companies_involved_projects_title}
                      projects={company.involvedProjects} />
                    : <></>
                }
                <ProjectList
                  title={hasInvolvedProjects ? translations.companies_projects_title : undefined}
                  projects={company.projects} />
              </div>
            </div>
        }
      </PageContainer>
    </>
  )
}

export default CompanyDetailPage