import Meta from '@/components/general/Meta'
import PageContainer from '@/components/general/PageContainer'
import appConfig from '@/config/appConfig'
import style from '@/styles/pages/404.module.scss'
import { translations } from '@/util/locale/localization'

const PrivacyPolicyPage = () => (
  <>
    <Meta title={`${appConfig.website.name} - ${translations.privacy_policy_title}`} />
    <PageContainer>
      <div className={style.container}>
        <h1>{translations.privacy_policy_title}</h1>
        <p>{translations.privacy_policy_text}</p>
      </div>
    </PageContainer>
  </>
)

export default PrivacyPolicyPage