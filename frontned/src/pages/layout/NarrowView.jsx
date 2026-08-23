import { Footer } from "./Footer";

export function NarrowView({ children, layoutContext }) {
    return (
        <div>
            <div style={{
                width: layoutContext.narrowView ? '80vw' : '100%',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '10px',
                position: 'relative',
                paddingBottom:'40px'
            }}>
                {children}
            </div>
            <Footer layoutContext={layoutContext} />
        </div>
    )
}


