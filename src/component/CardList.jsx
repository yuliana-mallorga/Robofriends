import PropTypes from 'prop-types';
import Card from './Card';

const CardList = ({ robots })=>{
    const cardArray = robots.map((user, i)=>{
        return (            
            <Card 
                key= {i}
                id= {robots[i].id} 
                name= {robots[i].name} 
                email= {robots[i].email} 
            />
    );
    })

    return (
        <div>
            { cardArray }
        </div>
    )
}

CardList.propTypes = {
    robots: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
    // An array of a certain type

export default CardList;