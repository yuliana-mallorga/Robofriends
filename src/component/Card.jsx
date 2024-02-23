import PropTypes from 'prop-types';


const Card = (props)=>{
    const { name, email, id } = props;
    return(
        <div className='tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt="robot" />
            <div>
            <h2> { name }</h2>
            <p>{ email }</p>
            </div>
        </div>
    )
}

  Card.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  };

export default Card;