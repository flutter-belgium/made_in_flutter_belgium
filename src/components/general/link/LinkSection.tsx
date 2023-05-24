import style from '@/components/general/link/LinkSection.module.scss'
import LinkSectionItem, { IconType } from '@/components/general/link/LinkSectionItem'

interface LinkSectionProps {
    title: string,
    iconType: IconType,
    links: Array<LinkItem>,
}

const LinkSection = (props: LinkSectionProps) => {
    if (props.links.length == 0) return (<></>)
    return (
        <div className={style.container}>
            <h2>{props.title}</h2>
            <div className={style.linkItemsContainer}>
                {
                    props.links.map((link, index) => (
                        <LinkSectionItem
                            key={index}
                            iconType={props.iconType}
                            link={link} />
                    ))
                }
            </div>
        </div>
    )
}

export default LinkSection