import React, { FunctionComponent } from 'react'
import { CardProps } from 'reactstrap'
import styled from 'styled-components/native'
import { colors } from '../colors'
import { ScreenWidth } from '../shared'

// images
import card_bg from '../../assets/card-background.png';
import RegularText from '../Text/RegularText'
import { View } from 'react-native'
import SmallText from '../Text/SmallText'

const CardBackground = styled.ImageBackground`
height: 60%;
width: ${ScreenWidth * 0.67}px;
resize-model: cover;
background-color: ${colors.accent};
border-radius: 25px;
margin-right: 25px;
overflow: hidden;
`;

const CardTouchable = styled.TouchableHighlight`
height: 100%;
border-radius: 25px;
`;

const TouchableView = styled.View`
justify-content: space-between;
align-items: center;
padding: 30px;
flex: 1;
`;

const CardRow = styled.View`
flex-direction: row;
justify-content: space-betweem;
align-items: center;
width: 100%
`;

const Logo = styled.View`
resize-mode: contain;
width: 100%;
height: 80%;
flex: 1;
`


const CardItem: FunctionComponent<CardProps> = (props) => {
    const handlePress = () => { };
    return (
        <CardBackground source={card_bg}>
            <CardTouchable underlayColor={colors.secondary} onPress={handlePress}>
                <TouchableView>
                    <CardRow>
                        <RegularText textStyles={{ color: colors.white }}>
                            ******{props.accountNo.slice(6, 10)}
                        </RegularText>
                    </CardRow>
                    <CardRow>
                        <View style={{ flex: 3 }}>
                            <SmallText textStyles={{ marginBottom: 5, color: colors.graylight }}>
                                Total balance
                            </SmallText>
                            <RegularText textStyles={{ fontSize: 19 }}>
                                £{props.balance}
                            </RegularText>
                        </View>
                        <Logo source={props.logo} />
                    </CardRow>
                </TouchableView>
            </CardTouchable>
        </CardBackground>
    )
}

export default CardItem;
