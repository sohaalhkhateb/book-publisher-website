import { useId } from 'react'
import loadingGif from '../assets/images/icons/loading.gif'
export function Button({ text, onClick, image = null, position = 'right', isLoading = false ,color=null}) {
    const buttonId = useId();
    return (
        <>
            <style>
                {`     
                     #${buttonId} {
                        display : flex;
                        flex-direction : row;
                        align-items:center;
                        justify-content:center;
                        background-color: ${color??'var(--primary)'};
                        color: var(--text-muted);
                        border:none;
                        box-shadow: 0px 0px 7px 4px #9ea6b6;
                        border-radius: 10px;
                        min-width: 75px;
                        padding: 7px 10px;
                        cursor: pointer;
                    }
                     .txt-button{
                        font-size: 20px;
                        font-weight: 500;
                    }
                    .button:hover{
                        background-color: var(--text-muted);
                        color: var(--primary);
                        transform: scale(1.2);
                    }
                    .button-image{
                        width : 100%;
                    }                       
                    .image-wrapper{
                        height :1.5lh;
                        width : 1.5lh;
                        padding-left :  ${isLoading ? '0px' : '1lh'};
                        
                    }    
                    .image-wrapper-left{
                        height :1.5lh;
                        width : 1.5lh;
                        padding-right : ${isLoading ? '0px' : '1lh'};    
                    }    
                    
                `}
            </style>



            <button
                id={buttonId}
                className="button"
                onClick={isLoading ? () => { } : onClick}
            >
                {image && position == 'left' && (
                    <div className="image-wrapper-left">
                        <img className="button-image"
                            src={isLoading ? loadingGif : image}
                        />
                    </div>
                )}
                <p className="txt-button">
                    {isLoading ? null : text}
                </p>
                {image && position == 'right' && (
                    <div className="image-wrapper">
                        <img className="button-image"
                            src={isLoading ? loadingGif : image}
                        />
                    </div>
                )}
            </button>
        </>
    )
}