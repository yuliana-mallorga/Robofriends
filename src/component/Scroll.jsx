
const Scroll = ({ children }) => {
    return (
        <div style={{ overflowY: 'scroll', border: '2px solid black', maxHeight: '950px'}}>
            { children }
        </div>
    )
}

export default Scroll