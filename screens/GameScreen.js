import { View, Text, StyleSheet } from "react-native"
import Title from "../components/Title";

function GameScreen() {
  return (
    <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        <View>
            <Text>Higher or Lower?</Text>
            <Text>+ -</Text>
        </View>
        <Text>LOG ROUNDS</Text>

    </View>
  )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },

})

