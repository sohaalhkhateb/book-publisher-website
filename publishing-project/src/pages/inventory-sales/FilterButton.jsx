import './FilterButton.css'

export function FilterButton({period}) {
    return (
        <button className="filter-btn">
            {period}
        </button>
    )
}