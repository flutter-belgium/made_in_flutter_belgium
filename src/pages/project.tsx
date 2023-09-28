import Meta from "@/components/general/Meta"
import appConfig from "@/config/appConfig"
import { useEffect } from "react"
import PageContainer from "@/components/general/PageContainer"
import { useRouter } from "next/router"
import Image from "next/image"
import LinkSection from "@/components/general/link/LinkSection"
import CompanyDetailViewModel from "@/viewmodel/project/detail/project_detail_viewmodel"
import style from "@/styles/pages/Project.module.scss"
import Link from "next/link"
import ProjectScreenshots from "@/components/project/detail/ProjectScreenshots"
import { translations } from "@/util/locale/localization"
import { IconType } from "@/components/general/link/LinkSectionItem"
import Button from "@/components/general/Button"

const ProjectDetailPage = () => {
  const router = useRouter()

  const viewModel = CompanyDetailViewModel()

  useEffect(() => {
    viewModel.init(router.query.name as string)
  }, [router.query.name])

  const project = viewModel.project
  return (
    <>
      <Meta title={`Project: ${project?.name ?? appConfig.website.name}`} />
      <PageContainer>
        {
          project == null ?
            null :
            <div className={style.container}>
              <div className={style.infoContainer}>
                <div className={style.titleContainer}>
                  <Image
                    height={48}
                    width={48}
                    alt={project.name}
                    src={project.images.appIconUrl} />
                  <h1>{project.name}</h1>
                </div>
                <p>{project.description}</p>
                <div className={style.storeContainer}>
                  {(
                    project.links.appstore == null
                      ? null :
                      <Link
                        href={project.links.appstore}
                        target="_blank">
                        <Image
                          className={style.appStore}
                          width={200}
                          height={68}
                          src='images/appstore.svg'
                          alt={translations.alt_appstore} />
                      </Link>
                  )}
                  {(
                    project.links.playstore == null
                      ? null :
                      <Link
                        href={project.links.playstore}
                        target="_blank">
                        <Image
                          className={style.playstoreImg}
                          width={220}
                          height={65}
                          src='images/playstore.svg'
                          alt={translations.alt_playstore} />
                      </Link>
                  )}
                  {(
                    project.links.webApp == null
                      ? null :
                      <Button
                        title={translations.project_btn_webapp}
                        linkTo={project.links.webApp}
                        target="_blank" />
                  )}
                </div>
                <div className={style.phoneScreenshotContainer}>
                  <ProjectScreenshots
                    mockupPrimaryUrl={project.images.mockupPrimaryUrl}
                    mockupSecondaryUrl={project.images.mockupSecondaryUrl}
                    screenshotUrls={project.images.screenshotUrls} />
                </div>
                <LinkSection
                  title={translations.project_detail_publisher_title}
                  iconType={IconType.large}
                  links={viewModel.publisherLinks} />
                <LinkSection
                  title={translations.project_detail_dev_team_title}
                  iconType={IconType.smallCircle}
                  links={viewModel.devTeamLinks} />
                <LinkSection
                  title={translations.project_detail_involved_companies_title}
                  iconType={IconType.largeCircle}
                  links={viewModel.involvedCompanies} />
                <h2>{translations.project_detail_links_title}</h2>
                <div className={style.storeContainer}>
                  {(
                    project.links.marketingWebsite == null
                      ? null :
                      <Button
                        title={translations.project_btn_marketing_website}
                        linkTo={project.links.marketingWebsite}
                        target="_blank" />
                  )}
                  {(
                    project.links.openSourceCode == null
                      ? null :
                      <Button
                        title={translations.project_btn_opensource_code}
                        linkTo={project.links.openSourceCode}
                        target="_blank" />
                  )}
                </div>
              </div>
              {
                project.images.screenshotUrls.length === 0 ?
                  (
                    <></>
                  ) :
                  (
                    <div className={style.screenshotContainer}>
                      <ProjectScreenshots
                        mockupPrimaryUrl={project.images.mockupPrimaryUrl}
                        mockupSecondaryUrl={project.images.mockupSecondaryUrl}
                        screenshotUrls={project.images.screenshotUrls} />
                    </div>
                  )
              }
            </div>

        }
      </PageContainer>
    </>
  )
}

export default ProjectDetailPage