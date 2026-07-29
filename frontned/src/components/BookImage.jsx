export function BookImage({ src, onClickHandler = () => { } }) {
    return (
        <>
            <style>
            {`
            .book-image{
                border-radius: 10px;
                }
            `}
            </style>
            <img
                src={src}
                className='book-image'
                alt=""
            />
        </>
    )
}