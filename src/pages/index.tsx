import ProjectList from "@/components/project/list/ProjectList"
import Meta from "@/components/general/Meta"
import appConfig from "@/config/appConfig"
import ProjectListViewModel from "@/viewmodel/project/list/project_list_viewmodel"
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
        <ProjectList
          projects={viewModel.projects} />
      </PageContainer>
    </>
  )
}

export default HomePage