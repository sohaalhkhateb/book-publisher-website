export function Button({ text, onClickBtn, image = null }) {
    return (
        <>
            <style>
                {`
                    .button {
                        display : flex;
                        flex-direction : row;
                        align-items:center;
                        background-color: var(--primary);
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
                    }
                    .button-image{
                        width : 100%;
                    }                       
                    .image-wrapper{
                        height :1.5lh;
                        width : 1.5lh;
                        padding-left : 1lh;
                        
                    }    
                `}
            </style>
            <button
                className="button"
                onClick={onClickBtn}
            >
                <p className="txt-button">
                    {text}
                </p>
                {image && (
                    <div className="image-wrapper">
                        <img className="button-image"
                            src={image}
                        />
                    </div>
                )}
            </button>
        </>
    )
}