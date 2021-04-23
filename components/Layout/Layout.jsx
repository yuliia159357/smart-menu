import React from 'react'
import styles from './Layout.module.sass'
import PropTypes from 'prop-types'
import Head from 'next/head'

const Layout = ({children}) => {

    // const person = {
    //     name: 'Vasia',
    //     age: '56'
    // }

    // const test = ({name}) => {
    //     console.log(name)
    //     console.log(person.age)
    // }

    // test(person)

    return (

        <>
            <Head>
                <link rel="preload"
                    as="style"
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" />

            </Head>

            <div className={styles.container}>
                {children}
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.element.isRequired
}

export default Layout

