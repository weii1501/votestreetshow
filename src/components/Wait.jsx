import React from 'react'
import styled from 'styled-components'
import srcImg from "../img/logo_trangden.png"

export default function Wait() {
    return (
        <Container>
            <div>
                <img src={srcImg} alt="logo" />
                <h3>Winner is . . .</h3>
            </div>
        </Container>
    )
}

const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 650px;
    display: flex;
    justify-content: center;
    align-items: center;
    div{
        width: 90%;
        height: 90%;
        background-color: white;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 50px;
        
    img{
        width: 90%;
    }

    h3{
        font-size: 27px;
    }
    }
`