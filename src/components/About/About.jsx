import React, { useEffect, useState } from 'react'
import './About.scss'
import Animation from '../Animation/Animation'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const array = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='about container'>
                <div className='left'>
                    <span className='tag'>&lt;h1&gt;</span>
                    <h1>
                        <Animation
                            letterClass={letterClass}
                            strArray={array}
                            index={8}
                        />
                    </h1>
                    <span className='tag'>&lt;/h1&gt;</span>
                    <br />
                    <span className='tag'>&lt;p&gt;</span>
                    <p></p>
                    <span className='tag'>&lt;/p&gt;</span>
                </div>
            </div>
            <Loader type='square-spin' />
        </>
    )
}

export default About