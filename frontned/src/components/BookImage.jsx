export function BookImage({ src }) {
    return (
        <>
            <style>
                {`
            .book-image{
                border-radius: 10px;
                width : 150px;
                height:200px;
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