import Meta from '@/components/general/Meta'
import appConfig from '@/config/appConfig'
import style from '@/styles/pages/404.module.scss'
import { translations } from '@/util/locale/localization'

const NotFoundPage = () => (
  <>
    <Meta title={`${appConfig.website.name} - 404`} />
    <div className={style.container}>
      <h1>404</h1>
      <p>{translations.error_404}</p>
    </div>
  </>
)

export default NotFoundPage