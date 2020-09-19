import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

const HIDDEN_SYMBOL = '❓'

//const Card = () => < div className = "card" / >
const Card = ({ card, tapas, feedback, onClick}) => ( 
    <div className = { `card ${feedback}` } onClick={() => onClick(card,tapas)}>
        <span className = "symbol" > 
            { feedback === 'hidden' ? HIDDEN_SYMBOL : card } 
        </span>  
    </div >
)

Card.propTypes = {
    card: PropTypes.string.isRequired,
    feedback: PropTypes.oneOf([
      'hidden',
      'justMatched',
      'justMismatched',
      'visible',
    ]).isRequired,
    onClick: PropTypes.func.isRequired,
  }
export default Card