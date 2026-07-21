import { SummaryCards } from '../../components/SummaryCards'
import PageLayout from '../PageLayout'
import './ResourcesPage.css'
import {cards} from '../../backend-json/resourcesCards'
import {resources} from '../../backend-json/resources'
import { ResourcesCards } from './ResourcesCards'

export function ResourcesPage({ showOptionList, setShowOptionList, search, setSearch }) {
    return (
        <PageLayout
            showOptionList={showOptionList}
            setShowOptionList={setShowOptionList}
            search={search}
            setSearch={setSearch}
        >
            <div className='resources-container content-container'>
                <SummaryCards
                    cards={cards}
                />
                <ResourcesCards
                    resources={resources}
                />
            </div>
        </PageLayout>
    )
}