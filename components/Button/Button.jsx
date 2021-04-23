import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.sass'

const Button = ({type, text, handler, customClass='button'}) => (
    <button 
        className={styles[customClass]} 
        type={type || 'button'} 
        onClick = {() => handler()}
    >
        {text}
    </button>
)

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    handler: PropTypes.func,
    customClass: PropTypes.string
}

export default Button
