export function NarrowView({ children }) {
    return (
        <div style={{
            maxWidth: '80vw',
            marginLeft:'auto',
            marginRight:'auto',
            marginTop: '80px',

        }}>
            {children}
        </div>
    )
}


