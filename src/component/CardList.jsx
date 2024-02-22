import PropTypes from 'prop-types';
import Card from './Card';
import 'tachyons'

const CardList = ({ robots })=>{
    const cardArray = robots.map((robot, i)=>{
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
    robots: PropTypes.array
  };

export default CardList;