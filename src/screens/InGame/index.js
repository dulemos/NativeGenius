import React, { useEffect, useState } from "react";
import { Alert, Text } from "react-native";
import {
  Container,
  Header,
  Title,
  Subtitle,
  Content,
  Tab,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { render } from "react-dom";

export default () => {
  const colorNames = ['verde', 'vermelho', 'amarelo', 'azul'];
  const [colors, setColors] = useState([colorNames[Math.floor(Math.random() * (4 - 0)) + 0],]);
  const [playerTurn, setPlayerTurn] = useState(false);
  const [tab, setTab] = useState([]);
  const [renderColor, setRenderColor] = useState({index: 0});
  const navigation = useNavigation();

  useEffect(()=> {
    tabMount()  
  }, [renderColor])

  const handleTabPress = cor => {
    let aux = tab;
    aux.push(cor);
    setTab(aux)
    if(tab.length === colors.length){
      if(isSame()){
        setColors([...colors, colorNames[Math.floor(Math.random() * (4 - 0)) + 0]]);
        setTab([])
        setPlayerTurn(false);
      }else{
        endGame();
      }
    }
    
  }

  const endGame = () => {
    alert(`Fim de jogo! Você fez ${colors.length - 1} pontos`);
    navigation.goBack();
  }

  const isSame = () => {
    return tab.map((e, i) => e === colors[i]).every(e => e);
  }

  const tabMount = () => {  
    
    setTimeout(() => {
      if(renderColor.index == colors.length) {
        setPlayerTurn(true)
        setRenderColor({index: 0})
      }else{
        switch(colors[renderColor.index]){
          case 'verde':
            setRenderColor({
              index: renderColor.index + 1,
              color: <Tab color='#00a32c' position='border-top-left-radius' />
            })
            break;
          case 'vermelho':
            setRenderColor({
              index: renderColor.index + 1,
              color: <Tab color='#a30500' position='border-top-right-radius' />
            })
            break;
          case 'amarelo':
            setRenderColor({
              index: renderColor.index + 1,
              color: <Tab color='#eef522' position='border-bottom-left-radius' />
            })
            break;
          case 'azul':
            setRenderColor({
              index: renderColor.index + 1,
              color: <Tab color='#0917de' position='border-bottom-right-radius' />        
            })
        }
      }
    }, 3000)
    
  }

  return (
    <Container>
      <Header>
        <Title>Genius Native</Title>
        <Subtitle>Pontuação: {colors.length - 1}</Subtitle>
      </Header>
      {playerTurn ? (
        <Content>
          <Tab
            color="#00a32c"
            position="border-top-left-radius"
            onPress={() => handleTabPress('verde')}
          />
          <Tab
            color="#a30500"
            position="border-top-right-radius"
            onPress={() => handleTabPress('vermelho')}
          />
          <Tab
            color="#eef522"
            position="border-bottom-left-radius"
            onPress={() => handleTabPress('amarelo')}
          />
          <Tab
            color="#0917de"
            position="border-bottom-right-radius"
            onPress={() => handleTabPress('azul')}
          />
        </Content>
      ) : (
        <Content>
          {renderColor.color}
        <Title>{renderColor.index == 0 ? null : renderColor.index}</Title>
        </Content>
      )}
    </Container>
  );
};

// '#00a32c' green
// '#a30500' red
// '#eef522' yellow
// '#0917de' blue
