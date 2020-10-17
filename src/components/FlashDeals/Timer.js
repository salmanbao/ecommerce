import React from "react";
import { View, Text, StyleSheet } from 'react-native'


export default function TimerComponent() {
    var [minutes, setMinutes] = React.useState(35)
    var [seconds, setSeconds] = React.useState(50)
    var hours = 34;

    React.useEffect(()=>{
        let secondsTimer = setTimeout(() => { setSeconds((seconds + 60 - 1) % 60) }, 1000)
        let minutesTimer = setTimeout(() => { setMinutes((minutes + 60 - 1) % 60) }, 60000)
        return ()=>{
            clearTimeout(secondsTimer);
            clearTimeout(minutesTimer)
        }
    })
    
    return (
        <View style={styles.timerRow}>
            <View style={styles.timerBox}>
                <Text style={styles.time}>
                    {hours}
                </Text>
            </View>
            <Text>:</Text>

            <View style={styles.timerBox}>
                <Text style={styles.time}>
                    {minutes}
                </Text>
            </View>

            <Text>:</Text>

            <View style={styles.timerBox}>
                <Text style={styles.time}>
                    {seconds}
                </Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    timerRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    timerBox: {
        borderRadius: 5,
        backgroundColor: 'black',
    },
    time: {
        color: 'white',
        fontSize: 10,
        padding: 3
    }
});