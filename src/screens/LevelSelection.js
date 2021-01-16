import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Modal
} from 'react-native'

const ItemModal =(props)=>{
    return(
        <TouchableOpacity
            style={props.optionStyles}
            onPress={props.onPress}
        >
            <Text style={props.buttonLabel}>{props.label}</Text>
        </TouchableOpacity>
    )
}

export default props => {
    return (
        <Modal onRequestClose={props.onCancel}
            visible={props.isVisible} animationType='slide'
            transparent={true}>
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}>Selecione o Nível</Text>
                    <ItemModal 
                        optionStyles={[styles.button, styles.bgEasy]}
                        onPress={() => props.onLevelSelected(0.1)}
                        buttonLabel={styles.buttonLabel}
                        label="Fácil"
                    />
                    <ItemModal 
                        optionStyles={[styles.button, styles.bgNormal]}
                        onPress={() => props.onLevelSelected(0.2)}
                        buttonLabel={styles.buttonLabel}
                        label="Intermediário"
                    />
                    <ItemModal 
                        optionStyles={[styles.button, styles.bgHard]}
                        onPress={() => props.onLevelSelected(0.3)}
                        buttonLabel={styles.buttonLabel}
                        label="Difícil"
                    />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    container: {
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 10,
        padding: 5,
    },
    buttonLabel: {
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold',
    },
    bgEasy: {
        backgroundColor: '#49b65d'
    },
    bgNormal: {
        backgroundColor: '#2765F7'
    },
    bgHard: {
        backgroundColor: '#F26337'
    }
})