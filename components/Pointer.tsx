import { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated, Easing } from "react-native";

const Pointer = () => {

    const pointerImage = '../assets/images/pointer.png'

    const [degrees, setDegrees] = useState(10)
    const [direction, setDirection] = useState('10deg')

    let rotateValueHolder = new Animated.Value(0)

    const [rotateData, setRotationData] = useState(rotateValueHolder.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', direction]
    }))

    const startRotation = () => {
        //rotateValueHolder.setValue(0)
        rotateValueHolder.setValue(1)

        setDegrees(degrees + 10)
        setDirection(degrees + 'deg')

        setRotationData(rotateValueHolder.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', direction]
        }))

        
        Animated.timing(rotateValueHolder, {
            toValue: 1,
            duration: 3000,
            easing: Easing.linear,
            useNativeDriver: false
        }).start()

    }

    return (
        <View style={styles.container} >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                <Text style={styles.title}>Not here</Text>
                <Text style={styles.title}>Far away</Text>
                <Text style={styles.title}>Close</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', margin:8 }}>
                    <Text style={styles.title}>A</Text>
                    <Text style={styles.title}>B</Text>
                    <Text style={styles.title}>C</Text>
                </View>
                <Animated.Image source={require(pointerImage)}
                    resizeMode="stretch"
                    style={[styles.image, { transform: [{ rotate: rotateData }] }]}
                />
                <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', margin:8 }}>
                    <Text style={styles.title}>A</Text>
                    <Text style={styles.title}>B</Text>
                    <Text style={styles.title}>C</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                <Text style={styles.title}>Not here</Text>
                <Text style={styles.title}>Far away</Text>
                <Text style={styles.title}>Close</Text>
            </View>

            <TouchableOpacity style={{ height: 100, width: '100%' }} onPress={startRotation}>
                <Text style={styles.title}>Test Rotation</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Pointer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 8
    },
    image: {
        width: 250,
        height: 250,
        padding: 50
    },
    title: {
        color: '#f1f1f1',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})