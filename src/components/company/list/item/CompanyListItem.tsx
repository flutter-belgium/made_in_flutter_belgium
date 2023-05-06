import style from '@/components/company/list/item/CompanyListItem.module.scss'
import Image from 'next/image'
import Link from 'next/link'

interface CompanyListItemProps {
    company: MinimizedCompany,
}

const CompanyListItem = (props: CompanyListItemProps) => {
    return (
        <div className={style.container}>
            <Link href={`/company?name=${props.company.name}`} passHref>
                <Image
                    width={400}
                    height={250}
                    alt={props.company.name}
                    src={props.company.logoUrl} />
            </Link>
        </div>
    )
}


export default CompanyListItem