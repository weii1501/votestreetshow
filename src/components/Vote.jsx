import React from 'react'
import styled from 'styled-components'
import { BsCircleFill } from 'react-icons/bs';
import { IoTriangle } from 'react-icons/io5';

export default function Vote({ onVote }) {
    return (
        <Div>
            <button className='red' onClick={() => onVote('red')}>
                <IoTriangle />
            </button>
            <button className='blue' onClick={() => onVote('blue')}>
                <BsCircleFill />
            </button>
        </Div>
    )
}

const Div = styled.div`
    width: 100%;
    height: 90%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    gap: 10px;
    button {
        background-color: white;
        width: 50%;
        outline: none;
        border: none;
        height: 600px;
        border-radius: 4px;
        transition: 1s ease;
        &:active {
            opacity: 0.8;
            transition: 1s ease;
            background-color: #b4b4b4;
        }
        svg{
            color: white;
            font-size: 80px;
        }
    }
    .blue{
        background-color: #6096FF;
    }
    .red{
        background-color: #F88C8C;
    }
`

