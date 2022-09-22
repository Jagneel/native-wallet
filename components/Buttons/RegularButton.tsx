import React, { FunctionComponent } from 'react'

import { colors } from '../colors';


const ButtonView = styled.TouchableOpacity`
    align-items: center;
    background-color: ${colors.primary};
    width: 100%;
    padding: 20px;
    border-radius: 20px;
`

const RegularButton: FunctionComponent = () => {
    return (
        <div>

        </div>
    )
}

export default RegularButton