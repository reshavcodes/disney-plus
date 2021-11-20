import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="images/cta-logo-one.svg" />
                <SIGNUP>Get AlL tHeRE</SIGNUP>
                <Description>
                    Get Premium Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription.
                    As of 01/26/2021, the price of Disney+ and the Disney Bundle will increase to $1$.
                </Description>
                <CTALogoTwo src="images/cta-logo-two.png" />
            </CTA>
        </Container>
    )
}

export default Login

const Container = styled.main`
position: relative;
height: calc(100vh - 70px);
display: flex;
align-items: top;
justify-content: center;


&:before {
    background-image : url("/images/login-background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    opacity: 0.8;
    right: 0;
    z-index: -1;
}
`

const CTA = styled.div`
max-width: 650px;
width 90%;
padding: 80px 40px;
display: flex;
flex-direction: column;
margin-top: 100px;


`

const CTALogoOne = styled.img`

`

const SIGNUP = styled.a`
border-radius: 4px;

background: #0063e5 ;
padding: 17px 0px;
text-align: center;
font-weight: bold;
font-size: 18px;
cursor: pointer;
color: #f9f9f9;
margin-top: 8px;
letter-spacing: 1.5px;
text-transform: uppercase;
transition: all 250ms;
margin-bottom: 12px;

&:hover{
    background: #0483ee;
}
`

const Description = styled.p`
font-size: 11px;
letter-spacing: 1.5px;
text-align: center;
line-height: 1.5;
`

const CTALogoTwo = styled(CTALogoOne)`
width: 90%;
`