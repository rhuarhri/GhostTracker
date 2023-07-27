import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from "react-native";
import { Stack, useRouter } from 'expo-router';
import SimpleAnswer from "../components/SimpleAnswer";
import Pointer from "../components/Pointer"
import ViewModel from './indexViewModel'

const Home = () => {
    const router = useRouter();

    console.log("test")

    const handlePress = () => {
        var viewModel = new ViewModel()

        console.log("test view model " + viewModel.test)
        alert("test view model " + viewModel.test)
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <SimpleAnswer isYes={false} />

                <SimpleAnswer isYes={true} />
            </View>

            <Pointer />

            <Text style={styles.title}>I was killed</Text>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ height: 100, width: '50%' }}>
                    <Text style={styles.title}>Hello</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 100, width: '50%' }} onPress={handlePress}>
                    <Text style={styles.title}>Goodbye</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

export default Home;

const styles = StyleSheet.create({

    safeArea: {
        flex: 1,
        backgroundColor: '#242424',
    },
    image: {
        width: 40,
        height: 40,
        tintColor: '#f1f1f1',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#f1f1f1',
        fontSize: 20,
        fontFamily: 'UIFont',
        textAlign: 'center',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});