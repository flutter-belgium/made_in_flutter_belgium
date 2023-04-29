import ProjectList from "@/components/project/list/ProjectList"
import Meta from "@/components/general/Meta"
import appConfig from "@/config/appConfig"
import ProjectListViewModel from "@/viewmodel/project/list/project_list_viewmodel"
import styles from "@/styles/pages/Index.module.scss"
import { useEffect } from "react"
import PageContainer from "@/components/general/PageContainer"

const HomePage = () => {
  const viewModel = ProjectListViewModel();

  useEffect(() => {
    viewModel.init()
  }, [viewModel])

  return (
    <>
      <Meta title={appConfig.website.name} />
      <PageContainer>
        <div className={styles.titleContainer}>
          <h1>made in (Flutter) Belgium</h1>
          <p>This collection of applications developed, published or contributed by Belgian developers or companies using the Flutter technology. This showcases the innovative and creative work of local developers and companies in the mobile/web app space.</p>
        </div>
        <ProjectList
          projects={viewModel.projects} />
      </PageContainer>
    </>
  )
}

export default HomePage