import React from 'react';
import {HeroBtnWrapper, HeroContainer, HeroH1, HeroP} from "./HeroElements";
//import './HeroSection.css'
import {Button} from "../Button/ButtonElements";
const HeroSection = () => {
    return (
        <>
            <HeroContainer>
                <HeroH1>Travel More</HeroH1>
                <HeroP>Plan your next trip today</HeroP>
                <HeroBtnWrapper>
                    <Button fontBig big primary >Get Started</Button>
                </HeroBtnWrapper>

            </HeroContainer>

            {/*<div className="hero-container">
                <h1>Travel More</h1>
                <p>Plan your next trip today</p>
                <div className="hero-btns">
                    <Button fontBig big primary>Get Started</Button>
                </div>
            </div>*/}
        </>
    )
}

export default HeroSection;
