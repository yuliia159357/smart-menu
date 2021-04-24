import React, {useState} from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.sass'

const Input = ({type, label, placeholder, customClass='label', name, changeHandler}) => {
    const [Focus, setFocus] = useState(false)
    return(
        <label htmlFor="" className={styles[customClass]}>
            <span style={{color: Focus === name ? '#FDC029' : '#BCB6AE'}}>{label}</span>
            <input
                type={type || 'text'}
                placeholder={placeholder}
                name={name}
                onChange={(e) => changeHandler(e)}
                onFocus={(e) => setFocus(e.currentTarget.name)}
                onBlur={() => setFocus(null)}
                autoComplete = 'off'
            />
        </label>
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
