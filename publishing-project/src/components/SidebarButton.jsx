import { NavLink } from 'react-router'

export function SidebarButton({ to, src, text }) {
    return (
        <>
            <style>
                {`
                .sidebar-btn-container{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-decoration: none;
                    color: var(--text-muted);
                    padding: 10px;
                    width: 100%;
                }
                .sidebar-btn-icon{
                    height: 30px;
                }
                .sidebar-btn-text{
                    margin: 0px;
                    align-self: center;
                }
                .sidebar-btn-container.active{
                    text-decoration: underline;
                    color: var(--accent); 
                }
                `}
            </style>
            <NavLink
                to={to}
                className='sidebar-btn-container'
            >
                <img
                    src={src}
                    className='sidebar-btn-icon'
                    alt=""
                />
                <p className='sidebar-btn-text'>
                    {text}
                </p>
            </NavLink>
        </>
    )
}