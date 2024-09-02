import React, { useEffect, useState } from 'react'
import './Skills.scss'
import Animation from '../Animation/Animation'
import Loader from 'react-loaders'

const Skills = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    const array = ['S', 'k', 'i', 'l', 'l', 's']

    const skills = [
        { href: 'Git', title: 'Git' },
        { href: 'JSON', title: 'JSON' },
        { href: 'HTML', title: 'HTML' },
        { href: 'CSS', title: 'CSS' },
        { href: 'React_(software)', title: 'React.js' },
        { href: 'Python_(programming_language)', title: 'Python' },
        { href: 'JavaScript', title: 'JavaScript' },
        { href: 'Angular_(web_framework)', title: 'Angular' },
        { href: 'REST', title: 'RestAPI' },
        { href: 'Oracle_SQL_Developer', title: 'OracleSQL' },
        { href: 'Postman_(software)', title: 'Postman' },
        { href: 'Amazon_Web_Services', title: 'AWS' },
        { href: 'Agile_software_development', title: 'Agile' },
        { href: 'Java_(programming_language)', title: 'Java' },
        { href: 'TypeScript', title: 'TypeScript' },
        { href: 'JQuery', title: 'JQuery' },
    ];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    useEffect(() => {
        const TagCanvas = window.TagCanvas;
        TagCanvas.Start('myCanvas', 'taglist');
    }, [])

    return (
        <>
            <div className='skills container'>
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
                    <p className='skills-p'>
                        Expert in front-end development including technologies like <span>HTML5, CSS3, JavaScript, TypeScript, Angular, React, JQuery</span> etc.
                    </p>
                    <p className='skills-p'>
                        I'm not a designer but I have a good sense of aesthetics, and experience in responsive, mobile-first web design. I put special effort into optimizing my code and providing the best user experience. I would love to give you any kind of support also after the project's completion. I guarantee a commitment during work on your project.
                    </p>
                    <p className='skills-p'>
                        Visit my <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/r-sachdeva3105/'>linkedin profile</a> for more details. You can also checkout my resume here, and feel free to contact me at <a rel='noreferrer' href='mailto:r.sachdeva3105@gmail.com'>r.sachdeva3105@gmail.com</a>.
                    </p>
                    <span className='tag'>&lt;/p&gt;</span>
                </div>
                <div className='right'>
                    <div className='canvasContainer'>
                        <canvas id='myCanvas' width='750' height='500'>
                            <div id='taglist'>
                                <ul>
                                    {skills.map((skill) => (
                                        <li key={skill.title}>
                                            <a
                                                href={`https://en.m.wikipedia.org/wiki/${skill.href}`}
                                                target='_blank'
                                                rel='noreferrer'
                                            >{skill.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </canvas>
                    </div>
                </div>
            </div>
            <Loader type='square-spin' />
        </>
    )
}

export default Skills