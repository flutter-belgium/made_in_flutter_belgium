import Meta from "@/components/general/Meta"
import appConfig from "@/config/appConfig"

const HomePage = () => {
  return (
    <>
      <Meta title={appConfig.website.name} />
    </>
  )
}

export default HomePage