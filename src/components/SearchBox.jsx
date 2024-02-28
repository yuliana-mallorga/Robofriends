import PropTypes from 'prop-types';

const SearchBox = ({searchChange})=>{
    
    
    
    return (
        <div className="pa2">
            <input 
                className="pa3 ba b--green bg-lightest-blue"
                type="search" 
                name="searchInput" 
                placeholder="Search your robot here" 
                onChange={searchChange}
            />
        </div>
    )
};

SearchBox.propTypes = {
    searchChange: PropTypes.func 
  };
  
export default SearchBox;