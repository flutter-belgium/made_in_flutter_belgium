import Meta from '@/components/general/Meta'
import PageContainer from '@/components/general/PageContainer'
import appConfig from '@/config/appConfig'
import style from '@/styles/pages/404.module.scss'
import { translations } from '@/util/locale/localization'

const NotFoundPage = () => (
  <>
    <Meta title={`${appConfig.website.name} - ${translations.cookie_policy_title}`} />
    <PageContainer>
      <div className={style.container}>
        <h1>{translations.cookie_policy_title}</h1>
        <p>{translations.cookie_policy_text}</p>
      </div>
    </PageContainer>
  </>
)

export default NotFoundPage