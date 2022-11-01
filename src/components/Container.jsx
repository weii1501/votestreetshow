import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Vote from './Vote'
import srcImg from "../img/logo_trangden.png"
import Wait from './Wait'
import { db } from "../config/firebase"
// import { v4 as uuidv4 } from 'uuid';
import { set, ref, onValue } from "firebase/database"

export default function Container() {
    const [IsVoting, setIsVoting] = useState(true)
    const [HavePhone, setHavePhone] = useState(false)
    const [Phone, setPhone] = useState()
    const [IsvalidPhone, setIsvalidPhone] = useState(true);
    const [IsStartVoting, setIsStartVoting] = useState(false);

    useEffect(() => {
        const phoneLocal = localStorage.getItem('phone');
        if (phoneLocal) {
            setPhone(phoneLocal);
            setHavePhone(true)

            onValue(ref(db, `/process/isStartVoting`), snap => {
                const data = snap.val();

                if (data) {
                    setIsStartVoting(true)
                    onValue(ref(db, `/vote/${phoneLocal}`), snap => {
                        const data = snap.val();
                        if (data != null) {
                            if (data.vote === "") {
                                console.log(data);
                                setIsVoting(true)
                            }
                            if (data.vote !== "") {
                                console.log("here");
                                setIsVoting(false)
                            }
                        }

                        if (data === null) {
                            setIsStartVoting(false)
                        }
                    })
                }

                if (!data) {
                    setIsStartVoting(false)
                }

            })
        }
    }, [])

    const onGoToVote = () => {
        localStorage.setItem('phone', Phone);
        setHavePhone(true)
        onValue(ref(db, `/process/isStartVoting`), snap => {
            const data = snap.val();
            if (data == true) {
                setIsStartVoting(true)
            }
            if (data == false) {
                setIsStartVoting(false)
            }
            if (IsStartVoting === true) {
                onValue(ref(db, `/vote/${Phone}`), snap => {
                    const data = snap.val();
                    if (data != null) {
                        if (data.vote === "") {
                            console.log(data);
                            setIsVoting(true)
                        }
                        if (data.vote !== "") {
                            console.log(data);
                            setIsVoting(false)
                        }
                    }

                    if (data === null) {
                        setIsStartVoting(false)
                    }
                })
            }
        })
    }

    const onVote = (team) => {
        setIsVoting(false)
        set(ref(db, `/vote/${Phone}`), {
            phone: Phone,
            vote: team
        })
    }

    return (

        <div>
            {HavePhone ? <div>
                <Div>
                    {IsStartVoting ?
                        <div>
                            {IsVoting ? <div>
                                <div className='logo'>
                                    <img src={srcImg} alt="logo" />
                                </div>
                                <Vote onVote={onVote} />
                            </div> : <Wait />}
                        </div>
                        : <h1>Wait your admin start</h1>
                    }
                </Div>
            </div> : <div>
                <Div2>
                    <input type="text" placeholder='Phone Number' onChange={(e) => setPhone(e.target.value)} />
                    <button onClick={() => onGoToVote()}>Next</button>
                </Div2>
            </div>}
        </div>

    )
}

const Div = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #D9D9D9;
    box-sizing: border-box;
    padding: 5% 5% 20% 5%;
    display: flex;
    flex-direction: column;
    gap: 15px;

    
    
    .logo{
        width: 100%;
        height: 50px;
        img {
            height: 100%;
        }
    }
`
const Div2 = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #D9D9D9;
    box-sizing: border-box;
    padding: 5% 5% 20% 5%;
    display: flex;
    flex-direction: column;
    gap: 25px;
    justify-content: center;
    input {
        height: 50px;
        font-size: 20px;
        padding: 0 10px;
        border-radius: 5px;
        
    }
    button{
        height: 50px;
        font-size: 20px;
        font-weight: 600;
        background-color: #6096FF;
        border: none;
        color: white;
        border-radius: 5px;
    }
`