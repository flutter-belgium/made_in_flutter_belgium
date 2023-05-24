import style from '@/components/general/link/LinkSectionItem.module.scss'
import Image from 'next/image'
import Link from 'next/link'

interface LinkSectionItemProps {
    link: LinkItem,
    iconType: IconType,
}

const LinkSectionItem = (props: LinkSectionItemProps) => {
    const isLarge = props.iconType == IconType.large || props.iconType == IconType.largeCircle;
    return (
        <div className={style.container}>
            <div className={
                props.iconType == IconType.large ? style.largeContainer :
                    props.iconType == IconType.smallCircle ? style.smallCircleContainer :
                        style.largeCircleContainer
            }>
                <Link href={props.link.website}>
                    <Image
                        height={isLarge ? 64 : 48}
                        width={isLarge ? 64 : 48}
                        src={props.link.imageUrl}
                        alt={props.link.title}
                        priority={false} />
                </Link>
            </div>
        </div>
    )
}

export enum IconType {
    smallCircle,
    largeCircle,
    large,
}

export default LinkSectionItem