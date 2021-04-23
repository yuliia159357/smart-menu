import React from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.sass'

const Input = ({type, label, placeholder, customClass='label', name, changeHandler}) => {

    return(
        (

            <label htmlFor="" className={styles[customClass]}>
                <span>{label}</span>
                <input
                    type={type || 'text'}
                    placeholder={placeholder}
                    name={name}
                    onChange={(e) => changeHandler(e)}
                    autoComplete = 'off'
                />
            </label>
        )
    )
}

Input.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    customClass: PropTypes.string,
    name: PropTypes.string,
    changeHandler: PropTypes.func 
}

export default Input
