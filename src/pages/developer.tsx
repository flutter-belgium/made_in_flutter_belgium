import Meta from "@/components/general/Meta"
import { useEffect } from "react"
import PageContainer from "@/components/general/PageContainer"
import { useRouter } from "next/router"
import Image from "next/image"
import style from "@/styles/pages/Developer.module.scss"
import ProjectList from "@/components/project/list/ProjectList"
import DeveloperDetailViewModel from "@/viewmodel/developer/detail/developer_detail_viewmodel"

const CompanyDetailPage = () => {
  const router = useRouter()

  const viewModel = DeveloperDetailViewModel()

  useEffect(() => {
    viewModel.init(router.query.githubUserName as string)
  }, [router.query.githubUserName])

  const developer = viewModel.developer
  return (
    <>
      <Meta title={`Developer: ${developer?.name ?? developer?.githubUserName}`} />
      <PageContainer>
        {
          developer == null ?
            null :
            <div className={style.container}>
              <div className={style.infoContainer}>
                <div className={style.titleContainer}>
                  <Image
                    className={style.titleImage}
                    height={64}
                    width={64}
                    alt={developer.name ?? developer.githubUserName}
                    src={developer.images.profilePictureUrl} />
                  <h1>{developer.name}</h1>
                </div>
                <p className={style.description}>{developer.description}</p>
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