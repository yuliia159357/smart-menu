import React, {useState} from 'react'
import styles from '../styles/SignIn.module.sass'
import Button from '../components/Button/Button'
import Input from '../components/Input/Input'
import TurnBack from '../components/TurnBack/TurnBack'
import Link from 'next/link'

const sign_in = () => {
    const turnLinkLeft = {
        justifyContent: 'flex-start', 
        width: '100%'
    }
    //variables

    const [UserLogin] = useState({})

    // const UserLogin = {}

    const inputs = [
        {
            type: 'email',
            name: 'userEmail',
            label: 'E-mail',
            placeholder: 'example@gmail.com'
        },
        {
            type: 'password',
            name: 'userPassword',
            label: 'Password',
            placeholder: 'qwerty123'
        }
    ]

    //Functions

    const getInputValues = e => {
        UserLogin[e.target.name] = e.target.value

        console.log(UserLogin)
    }


    //Return

    return (
        <div className={styles.authContainer}>

            <TurnBack
                link='/'
            />

            <div className={styles.logoContainer}>
                <svg width="305" height="287" viewBox="0 0 305 287" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.5214 97.9061V222.023H62.7655V129.461L205.815 205.194V228.334L157.431 253.578L109.046 228.334V190.468H88.0096V236.749L157.431 278.822L226.852 236.749V190.468L60.6618 97.9061H37.5214Z" fill="#FDC029"/>
                    <path d="M221.674 47.4118V72.9272L198.534 87.3817V57.9302L152.253 34.7898L105.972 60.0339V76.8633L198.534 127.352L244.815 100.004H267.955V224.121H244.815V131.559L198.534 156.803L80.7281 87.3817V47.4118L152.253 7.44199L221.674 47.4118Z" fill="#FDC029"/>
                </svg>
                <h1>smart menu</h1>
            </div>
            
            <form action="" className={styles.formContainer}>
                <h1>sign in</h1>
                {
                    inputs.map(({type, label, placeholder, name}, key) => (
                        <Input 
                            key={key}
                            type={type}
                            label={label}
                            placeholder={placeholder}
                            name={name}
                            changeHandler={(e) => getInputValues(e)}
                        />
                    ))
                }

                <div className={styles.formFooter}>
                    <div className={styles.forLinks} style={turnLinkLeft}>
                        <p>Don&apos;t have an account?</p>
                        <Link href="/sign_up">
                            <a>Sign Up</a>
                        </Link>
                    </div>

                    <div className={styles.buttonContainer}>
                        <Button
                            text={'sign in'} 
                            type={'submit'} 
                            handler={() => {}} 
                        />
                    </div>

                    <p>or</p>

                    <div className={styles.forLinks}>
                        <p>Sign In with</p>

                        <Link href="/">
                            <a>
                                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.0017 14.7879V17.8741H17.0811C16.8882 19.2243 15.538 21.7318 12.0017 21.7318C8.91556 21.7318 6.40803 19.16 6.40803 16.0738C6.40803 12.9876 8.91556 10.4158 12.0017 10.4158C13.7377 10.4158 14.895 11.1874 15.6023 11.8303L18.0455 9.45138C16.4381 7.97259 14.445 7.07245 12.0017 7.07245C7.05099 7.07245 3.00037 11.1231 3.00037 16.0738C3.00037 21.0246 7.05099 25.0752 12.0017 25.0752C17.2097 25.0752 20.6173 21.4104 20.6173 16.2667C20.6173 15.6881 20.5531 15.238 20.4888 14.7879H12.0017Z" fill="#56CCF2"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M30.8057 14.7879H28.2339V12.2161H25.662V14.7879H23.0902V17.3598H25.662V19.9316H28.2339V17.3598H30.8057V14.7879Z" fill="#56CCF2"/>
                                </svg>
                            </a>
                        </Link>
                    
                    </div>
                </div>

            </form>  

        </div>
    )

}

export default sign_in
