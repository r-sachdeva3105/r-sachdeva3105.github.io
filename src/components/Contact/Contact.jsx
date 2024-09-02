import React, { useEffect, useRef, useState } from 'react'
import './Contact.scss'
import Animation from '../Animation/Animation'
import Loader from 'react-loaders'
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    const array = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const form = useRef()

    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [emailError, setEmailError] = useState('')
    const [messageError, setMessageError] = useState('')

    const checkEmail = (e) => {
        let mail = e.target.value
        let re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
        setEmail(mail)
        re.test(mail) ? setEmailError('') : setEmailError('error')
    }

    const checkMessage = (e) => {
        let mess = e.target.value
        setMessage(mess)
        mess.length > 3 ? setMessageError('') : setMessageError('error')
    }

    const sendMessage = (e) => {
        e.preventDefault()
        if (emailError !== '' || email === '') {
            e.target[1].focus()
        }
        else if (messageError !== '' || message === '') {
            e.target[3].focus()
        }
        else {
            emailjs.sendForm('service_98xyw8s', 'template_kcngaov', form.current, 'Jlt9qiJOLMGoiJ5N9')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        }
    }

    const position = [43.7221074, -79.650769]

    return (
        <>
            <div className='contact container'>
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
                    <span className='tag'>&lt;form&gt;</span>
                    <form method='post' ref={form} onSubmit={sendMessage}>
                        <div>
                            <input type='text' name='name' id='name' placeholder='Name' />
                            <input type='email' name='email' id='email' placeholder='Email *' value={email} onChange={checkEmail} className={emailError} />
                        </div>
                        <div>
                            <input type='text' name='subject' id='subject' placeholder='Subject' />
                        </div>
                        <div>
                            <textarea name='message' id='message' rows='6' placeholder='Message *' value={message} onChange={checkMessage} className={messageError} />
                        </div>
                        <div>
                            <input type='submit' id='send' value='SEND' />
                        </div>
                    </form>
                    <span className='tag'>&lt;/form&gt;</span>
                </div>
                <div className='right'>
                    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={position}>
                            <Popup>
                                Rajat lives here,<br />come over for a cup of coffee :)
                            </Popup>
                        </Marker>
                    </MapContainer>
                    <div className='details'>
                        Mississauga, ON<br />
                        L4T 2E3<br /><br />
                        r.sachdeva3105@gmail.com<br />
                        (437) 660-7347
                    </div>
                </div>
            </div>
            <Loader type='square-spin' />
        </>
    )
}

export default Contact