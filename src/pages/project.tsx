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

const ProjectDetailPage = () => {
  const router = useRouter()

  const viewModel = CompanyDetailViewModel()

  useEffect(() => {
    viewModel.init(router.query.name as string)
  }, [router.query.name])

  const project = viewModel.project
  return (
    <>
      <Meta title={project?.name ?? appConfig.website.name} />
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
                          alt={"AppStore"} />
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
                          alt={"Playstore"} />
                      </Link>
                  )}
                </div>
                <div className={style.phoneScreenshotContainer}>
                  <ProjectScreenshots
                    mockupPrimaryUrl={project.images.mockupPrimaryUrl}
                    mockupSecondaryUrl={project.images.mockupSecondaryUrl}
                    screenshotUrls={project.images.screenshotUrls} />
                </div>
                <LinkSection
                  title="Publisher"
                  largeImages={true}
                  links={viewModel.publisherLinks} />
                <LinkSection
                  title="Dev team"
                  largeImages={false}
                  links={viewModel.devTeamLinks} />
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