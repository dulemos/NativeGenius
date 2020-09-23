import React from 'react';
import Styled from 'styled-components/native';

export const Container = Styled.SafeAreaView`
    flex:1;
    background-color: #dbdad7;
`;

export const Header = Styled.View`
    width:100%;
    background-color: #dbdad7;
    height: 128px;
    padding: 16px;
`;
export const Title = Styled.Text`
    color: black;
    font-size: 32px;
    text-align: center;
    margin-top: 32px;
`;

export const Subtitle = Styled.Text`
    color: black;
    font-size: 16px;
    text-align: center;
    margin-top: 24px;
`;
export const Content = Styled.View`
    background-color: #dbdad7;
    margin-top: 40px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:center;
    padding: 16px;
`;

export const Tab = Styled.TouchableOpacity`
        display: flex;
        width: 40%;
        height: 20%;
        margin: 16px;
        justify-content: center;
        flex-direction: column;
        background-color: ${(props) => props.color || 'white'};
        border: 2px solid ${(props) => props.color || 'white'};
        ${(props) => props.position || border-top-left-radius}: 500px;
    `
;

