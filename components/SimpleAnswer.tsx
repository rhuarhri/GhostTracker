/*
This will provide a simple answer such as yes or no from the ghost.
*/
import { StyleSheet, Text, View, Image } from "react-native";

const SimpleAnswer = ({ isYes }: { isYes: boolean }) => {

    /*
    React Native must know all your images sources before compiling your bundle.
    */

    const noIcon = '../assets/images/pentagram.png'
    const noAnswer = 'No'

    const yesIcon = '../assets/images/cross.png'
    const yesAnswer = 'Yes'

    const answer = isYes ? yesAnswer : noAnswer

    return (
        <View style={styles.container}>
            {isYes ? (
                <Image source={require(yesIcon)}
                    resizeMode="contain"
                    style={styles.image}
                />
            ) : (
                <Image source={require(noIcon)}
                    resizeMode="contain"
                    style={styles.image}
                />
            )}
            <Text style={styles.title}>{answer}</Text>
        </View>
    );
}

export default SimpleAnswer;

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 80,
        margin: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 50,
        height: 50,
        tintColor: '#f1f1f1',
    },
    title: {
        color: '#f1f1f1',
        fontSize: 20,
        fontWeight: 'bold',
    },
})