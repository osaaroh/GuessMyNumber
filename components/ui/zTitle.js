import { Text, StyleSheet, Platform} from "react-native"
import Colors from "../../constants/colors";

function Title({children}) {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

export default Title;

const styles = StyleSheet.create({
    title: {
      fontFamily: 'open-sans-bold',
        marginTop: 24,
        fontSize: 24,
        // fontWeight: 'bold',
        color: Colors.accent500,
        textAlign: 'center',
        //borderWidth: Platform.OS === 'android' ? 2 : 0,
        borderWidth: Platform.select({ios: 2, android: 0}),
        borderColor: Colors.accent500,
        padding: 12,

    }
})