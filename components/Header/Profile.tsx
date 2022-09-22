import React, { FunctionComponent } from 'react'
import { GestureResponderEvent, ImageSourcePropType, ImageStyle, StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native'

const StyledView = styled.TouchableOpacity`
    flex-direction: column;
    height: 55px;
    width: 55px;
    border-raidus: 15px
`;

const StyledImage = styled.Image`
    resize-mode: cover;
    border-radius: 15px;
`;

interface ProfileProps {
    img: ImageSourcePropType;
    imgStyle?: StyleProp<ImageStyle>;
    imgContainerStyle?: StyleProp<ViewStyle>;
    onPress?: ((event: GestureResponderEvent) => void | undefined)

}

const Profile: FunctionComponent<ProfileProps> = (props) => {
    return (
        <StyledView onPress={props.onPress} style={props.imgContainerStyle}>
            <StyledImage style={props.imgStyle} source={props.img} />
        </StyledView>
    )
}

export default Profile