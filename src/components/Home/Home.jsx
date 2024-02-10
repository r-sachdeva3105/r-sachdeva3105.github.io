import React, { useEffect, useState } from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'
import Animation from '../Animation/Animation'
import Resume from '../../assets/RajatSachdevaResume.pdf'
import Profile from '../../assets/images/profile.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import { faGithub, faHackerrank, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const array1 = ['H', 'i', ',']
    const array2 = ['I', '\'', 'm', ' ', 'R', 'a', 'j', 'a', 't', ',']
    const array3 = ['f', 'r', 'o', 'n', 't', 'e', 'n', 'd', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 5000)
    }, [])

    return (
        <>
            <div className='home container'>
                <div className='left'>
                    <span className='tag'>&lt;h1&gt;</span>
                    <h1>
                        <Animation
                            letterClass={letterClass}
                            strArray={array1}
                            index={12}
                        /><br />
                        <Animation
                            letterClass={letterClass}
                            strArray={array2}
                            index={15}
                        /><br />
                        <Animation
                            letterClass={letterClass}
                            strArray={array3}
                            index={25}
                        /><br />
                    </h1>
                    <span className='tag'>&lt;/h1&gt;</span>
                    <h4>Web Developer / Full Stack Developer / Freelancer</h4>
                    <div className='buttons'>
                        <Link className='btn' exact='true' to={Resume} target='_blank' rel='noopener noreferrer'>RESUME</Link>
                        <Link className='btn' exact='true' to='/contact'>CONTACT ME</Link>
                    </div>
                    <div className='links'>
                        <a href='https://www.linkedin.com/in/r-sachdeva3105/' target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                        </a>
                        <a href='https://github.com/r-sachdeva3105' target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                        </a>
                        <a href='https://twitter.com/r_sachdeva3105' target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                        </a>
                        <a href='https://www.hackerrank.com/profile/r_sachdeva3105' target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon icon={faHackerrank}></FontAwesomeIcon>
                        </a>
                    </div>
                </div>
                <div className='right'>
                    <img className='profileImage' src={Profile} alt='Display Profile' />
                </div>
            </div>
            <Loader type='square-spin' />
        </>
    )
}

export default Home