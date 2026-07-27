import { NavLink } from 'react-router'

export function BottombarButton({ to, src, text }) {
    return (
        <>
            <style>
                {`
                    .bottmbar-btn-container{
                          display: flex;
                          flex-direction: column;
                          justify-content: center;
                          align-items: center;
                          width: 100%;
                          text-decoration: none;
                          color:  var(--text-muted);
                          padding-left: 3px;
                          padding-right: 3px;  
                    }
                    .bottmbar-btn-icon{
                        height: 30px;
                        align-self: center;
                    }
                    .bottmbar-btn-text{
                        margin: 0px;
                    }
                    .bottmbar-btn-container.active {
                         background-color:  var(--accent);
                         color:  var(--text-muted);
                         border-radius: 20px;
                    }
                `}
            </style>
            <NavLink
                to={to}
                className='bottmbar-btn-container'
            >
                <img
                    src={src}
                    className='bottmbar-btn-icon'
                    alt=""
                />
                <p className='bottmbar-btn-text'>
                    {text}
                </p>
            </NavLink>
        </>
    )
}