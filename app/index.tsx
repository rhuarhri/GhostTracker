import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, Animated, Easing } from "react-native";
import { Stack, useRouter } from 'expo-router';
import SimpleAnswer from "../components/SimpleAnswer";
import Pointer from "../components/Pointer"
import ViewModel from './IndexViewModel'

const Home = () => {
    const router = useRouter();

    var viewModel = new ViewModel.IndexViewModel()

    const [simpleAnswer, setSimpleAnswer] = useState(ViewModel.SimpleAnswer.EMPTY_ANSWER)

    const [pointerRotation, setRotation] = useState(0)

    let rotateValueHolder = new Animated.Value(0)

    const [rotateData, setRotationData] = useState(rotateValueHolder.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '0deg']
    }))

    useEffect(() => {

        rotateValueHolder.setValue(0)

        let degrees : string = pointerRotation + 'deg'

        setRotationData(rotateValueHolder.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', degrees]
        }))

        Animated.timing(rotateValueHolder, {
            toValue: 1,
            duration: 3000,
            easing: Easing.linear,
            useNativeDriver: false
        }).start()
    }, [pointerRotation])

    const handleHelloPress = () => {
        setRotation(180)
    }

    const handleGoodByePress = () => {

    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>

                <View style={styles.simpleAnswerContainer}>
                    <Image source={require('../assets/images/pentagram.png')}
                        resizeMode="contain"
                        style={styles.simpleAnswerImage}
                    />

                    {simpleAnswer == ViewModel.SimpleAnswer.NO_ANSWER ? (
                        <Text style={styles.ghostText}>NO</Text>
                    ) : (
                        <View style={{ height : 30 }}></View>
                    )}
                </View>

                <View style={styles.simpleAnswerContainer}>
                    <Image source={require('../assets/images/cross.png')}
                        resizeMode="contain"
                        style={styles.simpleAnswerImage}
                    />

                    {simpleAnswer == ViewModel.SimpleAnswer.YES_ANSWER ? (
                        <Text style={styles.ghostText}>YES</Text>
                    ) : (
                        <View style={{ height: 30 }}></View>
                    )}
                </View>
            </View>

            <View style={styles.ghostMessageContainer} >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                    <Text style={styles.ghostText}></Text>
                    <Text style={styles.ghostText}>Far away</Text>
                    <Text style={styles.ghostText}></Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', margin: 8 }}>
                        <Text style={styles.ghostText}></Text>
                        <Text style={styles.ghostText}></Text>
                        <Text style={styles.ghostText}></Text>
                    </View>

                    <Animated.Image source={require('../assets/images/pointer.png')}
                        resizeMode="stretch"
                        style={[styles.pointer, { transform: [{ rotate: rotateData }] }]}
                    />

                    <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', margin: 8 }}>
                        <Text style={styles.ghostText}></Text>
                        <Text style={styles.ghostText}></Text>
                        <Text style={styles.ghostText}></Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                    <Text style={styles.ghostText}>Not here</Text>
                    <Text style={styles.ghostText}></Text>
                    <Text style={styles.ghostText}>Close</Text>
                </View>

            </View>

            <Text style={styles.uiText}>I was killed</Text>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ height: 100, width: '50%' }} onPress={handleHelloPress}>
                    <Text style={styles.uiText}>Hello</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 100, width: '50%' }} onPress={handleGoodByePress}>
                    <Text style={styles.uiText}>Goodbye</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

export default Home;

const styles = StyleSheet.create({

    safeArea: {
        flex: 1,
        backgroundColor: '#242424'
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
    ghostText: {
        color: '#990000',
        fontSize: 20,
        fontFamily: 'GhostFont',
        textAlign: 'center',
    },
    uiText: {
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

    simpleAnswerContainer: {
        width: 50,
        height: 80,
        margin: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },

    simpleAnswerImage: {
        width: 50,
        height: 50,
        tintColor: '#f1f1f1',
    },

    ghostMessageContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 8
    },

    pointer: {
        width: 250,
        height: 250,
        padding: 50,
    }
});