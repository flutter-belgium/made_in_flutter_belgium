import ProjectList from "@/components/project/list/ProjectList"
import Meta from "@/components/general/Meta"
import ProjectListViewModel from "@/viewmodel/project/list/project_list_viewmodel"
import styles from "@/styles/pages/Index.module.scss"
import { useEffect } from "react"
import PageContainer from "@/components/general/PageContainer"
import { translations } from "@/util/locale/localization"

const HomePage = () => {
  const viewModel = ProjectListViewModel()

  useEffect(() => {
    viewModel.init()
  }, [])

  return (
    <>
      <Meta title={translations.projects_meta_title} />
      <PageContainer>
        <div className={styles.titleContainer}>
          <h1>{translations.projects_title}</h1>
          <p>{translations.projects_subtitle}</p>
        </div>
        <ProjectList
          projects={viewModel.projects} />
      </PageContainer>
    </>
  )
}

export default HomePage