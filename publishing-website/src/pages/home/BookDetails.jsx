import './BookDetails.css'
import closeIcon from '../../assets/images/icons/close.png'
export function BookDetails ({showDetails ,setShowDetails, title, image, number, writer}) {

    const closeShowDetails = () => {
        setShowDetails(!showDetails);
        console.log('yes')
    }
    return(
        <div className="book-details-container">
            <img 
                src={closeIcon}
                className='close-icon' 
                alt="" 
                onClick={closeShowDetails}
            />
            <img 
                src={image} 
                className='book-details-image'
                alt=""
            />
            <p className='book-details-info'>
                Book Title: {title}
            </p>
            <p className='book-details-info'>
                Number of copies: {number}
            </p>
            <p className='book-details-info'>
                Writer's Name: {writer}
            </p>
            <p className='book-details-info'>
                edition : first
            </p>
            <p className='book-details-info'>
                publishing date : 12/3/2013
            </p>
            <p className='book-details-info'>
                number of pages : 800
            </p>
        </div>
    )
}