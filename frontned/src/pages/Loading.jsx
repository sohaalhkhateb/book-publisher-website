import loadingGif from '../assets/images/icons/loading.gif'
export default function Loading() {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 'calc(100vh - 60px)',
            }}
        >
            <img src={loadingGif} alt="" width='120px' style={{transform:'translate(-50%,-50%)'}}/>
        </div>
    )
}