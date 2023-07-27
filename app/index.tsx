import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image } from "react-native";
import { Stack, useRouter } from 'expo-router';

const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.safeArea}>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            <Text style={styles.title}>Tab One</Text>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <Image source={require('../assets/images/pentagram.png')}
                    resizeMode="cover"
                    style={styles.image}
                />
                <Image source={require('../assets/images/pentagram.png')}
                    resizeMode="cover"
                    style={styles.image}
                />
                <Image source={require('../assets/images/pentagram.png')}
                    resizeMode="cover"
                    style={styles.image}
                />
            </View>
        </SafeAreaView>
    );
}

export default Home;

const styles = StyleSheet.create({

    safeArea: {
        flex: 1,
        backgroundColor: '#242424',
        alignItems: 'center',
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
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});