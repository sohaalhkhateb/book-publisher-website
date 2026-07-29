export function Button({ text , onClickBtn}) {
    return (
        <>
            <style>
                {`
                    .button {
                        background-color: var(--primary);
                        color: var(--text-muted);
                        border: 1px solid var(--text-muted);
                        box-shadow: 5px 5px 5px var(--shadow);
                        border-radius: 10px;
                        width: 200px;
                        padding: 5px;
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
                `}
            </style>
            <button
                className="button"
                onClick={onClickBtn}
            >
                <p className="txt-button">
                    {text}
                </p>
            </button>
        </>
    )
}