import React, {useEffect} from 'react'
import { Container, Title } from './styles'
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'



export default () => {
    const navigation = useNavigation();

    return(
        <Container>
            <Title>Native Genius!!</Title>
            <Button onPress={() => navigation.navigate('InGame')} title="Iniciar" />
        </Container>
    )
}

