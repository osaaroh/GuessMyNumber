import { Text, StyleSheet} from "react-native"
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
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: 12,

    }
})