import styled from "styled-components/native";
import React, { FunctionComponent } from 'react';
import { StatusBar } from 'expo-status-bar';
import { colors } from "../components/colors";
import { Container } from "../components/shared";

const WelcomeContainer = styled(Container)`
background-color: ${colors.secondary};
justify-content: space-between;
width: 100%;
height: 100%å
`

const TopSection = styled.View`
width: 100%;
flex: 1;
min-height: 35%
`

const TopImage = styled.Image`
width: 100%;
height: 100%;
// resize-mode: stretch;
`

const BottomSection = styled.View`
width: 100%;
padding: 25px;
flex: 1;
justify-content: flex-end;
`

// Image
import background from './../assets/background-img.jpg';
import BigText from "../components/Text/BigText";
import SmallText from "../components/Text/SmallText";
import RegularButton from "../components/Buttons/RegularButton";



const Welcome: FunctionComponent = () => {
    return (
        <>
            <StatusBar style='light' />
            <WelcomeContainer>
                <TopSection>
                    <TopImage source={background} />
                </TopSection>
                <BottomSection>
                    <BigText textStyles={{ width: '70%', marginBottom: 25 }}>
                        Best way to track your money
                    </BigText>
                    <SmallText textStyles={{ width: '70%', marginBottom: 25 }}>
                        Best payment method, connects your money to your friends
                    </SmallText>
                    <RegularButton onPress={() => { }}>
                        Get Started
                    </RegularButton>
                </BottomSection>
            </WelcomeContainer>
        </>
    )
}

export default Welcome
