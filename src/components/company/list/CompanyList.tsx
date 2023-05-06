import style from '@/components/company/list/CompanyList.module.scss'
import CompanyListItem from './item/CompanyListItem'
import Link from 'next/link'
import { translations } from '@/util/locale/localization'

interface CompanyListProps {
    companies: Array<MinimizedCompany>,
}

const CompanyList = (props: CompanyListProps) => {
    return (
        <div className={style.container}>
            {
                props.companies.map((company, index) => (
                    <CompanyListItem
                        key={index}
                        company={company} />
                ))
            }
            <Link
                className={style.addCompanyContainer}
                href='https://github.com/flutter-belgium/made_in_flutter_belgium_data/tree/main/examples/companies'
                target='_blank'
                aria-label={translations.companies_add_company_btn}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                    <rect width="256" height="256" fill="none" />
                    <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                    <line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                </svg>
            </Link>
        </div>
    )
}


export default CompanyList