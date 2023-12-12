import PropTypes from "prop-types";
import "./styles.css"

const Card = ({title, value}) => {
    return (
        <div className="card">
            <h3>{title} </h3>
            <p className="number">{value}</p>
        </div>
    )
}

Card.propTypes ={
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

export default Card;