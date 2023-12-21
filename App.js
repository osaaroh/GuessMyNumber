import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import Colors from './constants/colors';

import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
  }

  function gameOverHandler() {
    setGameIsOver(true)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

  if (userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
    console.log(userNumber)
  }
  if (gameIsOver && userNumber){
    screen = <GameOverScreen />
    console.log(userNumber)
  }

  
  return (
    <LinearGradient colors={[Colors.primary700,Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/images/background.jpg')} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
        
      </ImageBackground>
      
    </LinearGradient>
    
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // backgroundColor: '#ddb52f',
  },
  backgroundImage: {
    opacity: 0.25,
  }
});
