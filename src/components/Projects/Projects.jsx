import React, { useEffect, useState } from 'react'
import './Projects.scss'
import Animation from '../Animation/Animation'
import Loader from 'react-loaders'

const Projects = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    const array = ['P', 'r', 'o', 'j', 'e', 'c', 't', 's']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='projects container'>
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

export default Projects