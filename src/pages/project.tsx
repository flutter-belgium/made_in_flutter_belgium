import Meta from "@/components/general/Meta"
import appConfig from "@/config/appConfig"
import { useEffect } from "react"
import PageContainer from "@/components/general/PageContainer"
import { useRouter } from "next/router"
import Image from "next/image"
import LinkSection from "@/components/general/link/LinkSection"
import ProjectDetailViewModel from "@/viewmodel/project/detail/project_detail_viewmodel"
import style from "@/styles/pages/project/[id].module.scss"

const ProjectDetailPage = () => {
  const router = useRouter()

  const viewModel = ProjectDetailViewModel()

  useEffect(() => {
    viewModel.init(router.query.projectName as string)
  }, [viewModel, router.query.projectName])

  const project = viewModel.project
  return (
    <>
      <Meta title={appConfig.website.name} />
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
                      <a
                        href={project.links.appstore}
                        target="_blank">
                        <Image
                          width={200}
                          height={68}
                          src='images/appstore.svg'
                          alt={"AppStore"} />
                      </a>
                  )}
                  {(
                    project.links.playstore == null
                      ? null :
                      <a
                        href={project.links.playstore}
                        target="_blank">
                        <Image
                          width={220}
                          height={68}
                          src='images/playstore.svg'
                          alt={"Playstore"} />
                      </a>
                  )}
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
              <div className={style.screenshotContainer}>
              </div>
            </div>

        }
      </PageContainer>
    </>
  )
}

export default ProjectDetailPage