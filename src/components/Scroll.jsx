import PropTypes from 'prop-types';

const Scroll = ({ children }) => {
    return (
        <div style={{ overflowY: 'scroll', border: '2px solid black', maxHeight: '950px'}}>
            { children }
        </div>
    )
}

Scroll.propTypes = {
    children: PropTypes.object
  };
export default Scroll