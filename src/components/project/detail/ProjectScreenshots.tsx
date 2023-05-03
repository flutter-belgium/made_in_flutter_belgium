import style from '@/components/project/detail/ProjectScreenshots.module.scss'
import { translations } from '@/util/locale/localization'
import Image from 'next/image'

interface ProjectScreenshotsProps {
    mockupPrimaryUrl?: string,
    mockupSecondaryUrl?: string,
    screenshotUrls: Array<string>,
}

const ProjectScreenshots = (props: ProjectScreenshotsProps) => {
    if (props.screenshotUrls.length == 0) return (<></>)
    return (
        <div className={style.container}>
            {
                props.screenshotUrls.map((url, index) => (
                    <Image
                        key={index}
                        width={180}
                        height={320}
                        alt={`${translations.alt_screenshot} ${index + 1}`}
                        src={url} />
                ))
            }
        </div>
    )
}


export default ProjectScreenshots