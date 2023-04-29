import style from '@/components/project/list/ProjectList.module.scss'
import ProjectListItem from './item/ProjectListItem'

interface ProjectListProps {
    projects: Array<MinimizedProject>,
}

const ProjectList = (props: ProjectListProps) => {
    return (
        <div className={style.container}>
            {
                props.projects.map((project, index) => (
                    <ProjectListItem
                        key={index}
                        project={project} />
                ))
            }
        </div>
    )
}


export default ProjectList