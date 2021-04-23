import React from 'react'
import PropTypes from 'prop-types'
import styles from './TurnBack.module.sass'
import Link from 'next/link'

const TurnBack = ({ link }) => {
    return (
        <Link href={ link }>

            <a className={styles.container}>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.75 6.25L5 15L13.75 23.75" stroke="#FDC029" strokeWidth="3.83333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 15H25" stroke="#FDC029" strokeWidth="3.83333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </a>

        </Link>
    )
}

TurnBack.propTypes = {
    link: PropTypes.string
}

export default TurnBack
