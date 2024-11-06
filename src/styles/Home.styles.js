import styled from "styled-components";

export const Background = styled.section`
    background-color: #1F1F1F;
    width: 38.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1.2rem;

    display: flex;
    flex-direction: column;

    h1{
        color: #FFFFFF;
        margin-bottom: 1rem;
        margin-top: 2.4rem;

        font-size: 2.4rem;
        font-weight: 600;
    }
    h2{
        color: #C4F82A;
        margin-bottom: 2.4rem;

        font-size: 1.4rem;
        font-weight: 700;
    }
    p{
        color: #FFFFFF;
        margin-bottom: 2.4rem;

        font-size: 1.4rem;
        font-weight: 400;
    }

    @media( max-height: 640px) {

        display: none;

    }
    @media( max-width: 320px) {

        display: none;

    }
`

export const Foto = styled.div`
    background-image: url(/foto_felipe.jpg);
    background-size: contain;
    border-radius: 100%;

    width: 10rem;
    height: 10rem;

    margin-top: 4rem;
`
export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin-bottom: 4rem;

    a{
        background-color: #333333;
        color: #FFF;
        text-decoration: none;
        width: 30.4rem;
        height: 4.5rem;
        padding: 1.2rem;
        border-radius: 0.8rem;

        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
        font-weight: 700;
    }

    a:hover{
        background-color: #333719;
    }
`
export const Error = styled.section`
    color: #fff;
    display: none;
    justify-content: center;

    @media( max-height: 640px) {

        display: flex;
        
    }
    @media( max-width: 320px) {

        display: flex;

    }

`