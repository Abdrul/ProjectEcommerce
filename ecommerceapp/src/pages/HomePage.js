import React from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components";

const Main = styled.main`
    height: 100vh;
    background: rgba(35, 170, 73, 0.11);
    position: relative;

    &:after {
        content: url("/images/feuillehd.png");
        position: absolute;
        top: 30px;
        right: 25px;
    }

    &::before {
        content: url("/images/feuillebg.png");
        position: absolute;
        bottom: 30%;
        left: 25px;
    }
`

const WrapperDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 65px 25px 0;

        &:after {
            content: url("/images/feuilleblur.png");
            position: absolute;
            top: 50%;
            right: 0;
        }

        h1, p {
            text-align: center;
        }

        img {
            padding-bottom: 32px;
        }

        h1 {
            font-weight: 700;
            font-size: 28px;
            color: #06161C;
            line-height: 36px;
            -webkit-text-stroke: 2px black;
            padding-bottom: 24px;
        }

        p {
            color: var(--description);
            font-weight: 500;
            padding-bottom: 30px;
        }

        button {
            border-radius: 50px;
            padding: 15px 50px;
            background: var(--background);
            color: #fff;
            border: none;
            font-size: 16px;
        }
`
const WrapperImgDescription = styled.div`
    position: fixed;
    bottom: 0;

        img {
            width: 100%;
            object-fit: cover;
        }
`


function HomePage() {

    return (
        <Main>
            <WrapperDescriptionContainer>
                <img src={"/images/logo.png"} alt="" />
                <h1>Get your groceries delivered to your home</h1>
                <p>The best delivery app in town for delivering your daily fresh groceries</p>
                <Link to="/login">
                    <button>Shop now</button>
                </Link>
            </WrapperDescriptionContainer>
            <WrapperImgDescription>
                <img src={"/images/bg-first-page.png"} alt="" />
            </WrapperImgDescription>
        </Main>
    )
}

export default HomePage