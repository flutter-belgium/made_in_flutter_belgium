import style from '@/components/project/list/item/ProjectListItem.module.scss'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectListItemProps {
    project: MinimizedProject,
}

const ProjectListItem = (props: ProjectListItemProps) => {
    return (
        <div className={style.container}>
            <Link href={`/project?projectName=${props.project.name}`} passHref>
                <Image
                    width={250}
                    height={250}
                    alt={props.project.name}
                    src={props.project.appIconUrl} />
            </Link>
        </div>
    )
}


export default ProjectListItem