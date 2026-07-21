import PageLayout from "../pages/PageLayout";

export function ReviewBooksPage({ children, showOptionList, setShowOptionList, search, setSearch }) {
    return (
        <>
            <style>
                {`
                    
                `}
            </style>
            <PageLayout
                showOptionList={showOptionList}
                setShowOptionList={setShowOptionList}
                search={search}
                setSearch={setSearch}
            >
                <div className='review-books-container content-container'>
                    {children}
                </div>
            </PageLayout>
        </>
    )
}