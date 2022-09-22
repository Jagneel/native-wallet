import styled from "styled-components/native";
import { StatusBar } from 'expo-status-bar';
import React, { FunctionComponent } from 'react'
import { colors } from '../components/colors'
import { Container } from '../components/shared'

// card logos

import logo1 from './../assets/card-png/amex.png'
import logo2 from './../assets/card-png/mastercard.png'
import logo3 from './../assets/card-png/visa.png'
import CardSection from "../components/Cards/CardSection";


const HomeContainer = styled(Container)`
    background-color: ${colors.graylight};
    width: 100%;
    flex: 1;
`;

const Home: FunctionComponent = () => {
    const cardsData = [
        {
            id: 1,
            accountNo: '34567889098',
            balance: 13000.54,
            alias: 'Work Debit',
            logo: logo1
        },
        {
            id: 2,
            accountNo: '123443567564',
            balance: 18500.13,
            alias: 'Personal Prepaid',
            logo: logo2
        },
        {
            id: 3,
            accountNo: '99866555565',
            balance: 3244.60,
            alias: 'School Prepaid',
            logo: logo3
        },
    ]


    return (
        <HomeContainer>
            <StatusBar style="dark" />
            <CardSection data={cardsData} />
        </HomeContainer>
    )
}

export default Home
