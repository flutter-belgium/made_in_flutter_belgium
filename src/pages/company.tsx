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

const CompanyDetailPage = () => {
  const router = useRouter()

  const viewModel = CompanyDetailViewModel()

  useEffect(() => {
    viewModel.init(router.query.name as string)
  }, [viewModel, router.query.name])

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
                    height={48}
                    width={48}
                    alt={company.name}
                    src={company.images.logoUrl} />
                  <h1>{company.name}</h1>
                </div>
                <p className={style.description}>{company.description}</p>
                <Button
                  title={"Visit website"}
                  linkTo={company.links.website} 
                  target="_blank"/>
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

export default CompanyDetailPage