import React from 'react';
import {  StyleSheet, Text,   View,  TextInput,KeyboardAvoidingView,TouchableOpacity} from 'react-native';
   
export default class Footer extends React.Component {

    render() {

        return (
            <KeyboardAvoidingView 
                style={styles.footer}
                behavior="position" 
                enabled={true}
            >

                <View style={styles.footerInner}>

                    <TouchableOpacity 
                        style={styles.btn}
                        onPress={ () => this.props.onNoteAdd() }
                    >
                        <Text style={styles.btnText}>+</Text>
                    </TouchableOpacity>

                    <TextInput 
                        style={styles.textInput}
                        placeholder={'What did you learn today?'}
                        placeholderTextColor={'rgba(255, 255, 255, .7)'}
                        onChangeText={ (val) => this.props.onChangeText(val) }
                        value={this.props.inputValue}
                    />

                </View>

            </KeyboardAvoidingView>
        );

    }

}

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        width: '100%',
        height: 155,
        bottom: -30,
    },
    footerInner: {
        position: 'relative',
        width: '100%',
        height: '90%',
    },
    btn: {
        zIndex: 1,
        position: 'absolute',
        right: 0,
        top: -60,
        width: 100,
        height: 100,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 6,
        borderColor: 'grey',
        backgroundColor: 'black'
    },
    btnText: {
        color: '#f2f0f5',
        fontSize: 40,
    },
    textInput: {
        zIndex: 0,
        flex: 1,
        padding: 20,
        fontSize: 16,
        color: '#fff',
        backgroundColor: '#262526'
    }
});