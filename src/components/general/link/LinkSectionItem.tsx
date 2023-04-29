import style from '@/components/general/link/LinkSectionItem.module.scss'
import Image from 'next/image'

interface LinkSectionItemProps {
    link: LinkItem,
    largeIcons: boolean,
}

const LinkSectionItem = (props: LinkSectionItemProps) => {
    return (
        <div className={style.container}>
            <div className={props.largeIcons ? style.largeContainer : style.smallContainer}>
                <Image
                    height={props.largeIcons ? 96 : 48}
                    width={props.largeIcons ? 96 : 48}
                    src={props.link.imageUrl}
                    alt={props.link.title} />
            </div>
        </div>
    )
}


export default LinkSectionItem