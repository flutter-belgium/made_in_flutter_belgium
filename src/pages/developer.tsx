import Meta from "@/components/general/Meta"
import { useEffect } from "react"
import PageContainer from "@/components/general/PageContainer"
import { useRouter } from "next/router"
import Image from "next/image"
import style from "@/styles/pages/Developer.module.scss"
import ProjectList from "@/components/project/list/ProjectList"
import DeveloperDetailViewModel from "@/viewmodel/developer/detail/developer_detail_viewmodel"
import Button from "@/components/general/Button"
import { translations } from "@/util/locale/localization"

const CompanyDetailPage = () => {
  const router = useRouter()

  const viewModel = DeveloperDetailViewModel()

  useEffect(() => {
    viewModel.init(router.query.githubUserName as string)
  }, [router.query.githubUserName])

  const developer = viewModel.developer
  const name = developer?.name ?? developer?.githubUserName
  return (
    <>
      <Meta title={`Developer: ${name}`} />
      <PageContainer>
        {
          developer == null ?
            null :
            <div className={style.container}>
              <div className={style.infoContainer}>
                <div className={style.titleContainer}>
                  <Image
                    className={style.profilePictureImage}
                    height={64}
                    width={64}
                    alt={developer.name ?? developer.githubUserName}
                    src={developer.images.profilePictureUrl} />
                  <h1>{name}</h1>
                </div>
                <p className={style.description}>{developer.description}</p>
                <div className={style.websiteContainer}>
                  {
                    developer.links?.personalWebsite == null ? <></> :
                      <Button
                        title={translations.developer_detail_personal_website_btn}
                        linkTo={developer.links.personalWebsite}
                        target="_blank" />
                  }
                  {
                    developer.links?.freelanceWebsite == null ? <></> :
                      <Button
                        title={translations.developer_detail_freelance_website_btn}
                        linkTo={developer.links.freelanceWebsite}
                        target="_blank" />
                  }
                </div>
                <div className={style.phoneProjectListContainer}>
                  <ProjectList
                    projects={developer.projects} />
                </div>
              </div>
              <div className={style.projectListContainer}>
                <ProjectList
                  projects={developer.projects} />
              </div>
            </div>
        }
      </PageContainer>
    </>
  )
}

export default CompanyDetailPage