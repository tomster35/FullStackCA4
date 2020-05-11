
import * as React from 'react';

import { StyleSheet, Text, View,ScrollView,TouchableOpacity, AsyncStorage, RefreshControlComponent} from 'react-native';
import Config from '../components/Config';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RefreshControl from '../components/RefreshControl';

export default class LinksScreen extends React.Component {
  
    /**
     * constructor
     *
     * @array   notes   all added notes.
     * @string  note    the current note value.
     */
   

    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            note: ''
        }
      
    }

    /**
     * componentDidMount
     *
     * Load notes from asyncstorage if exists
     */
    async componentDidMount() {

        const notes = await AsyncStorage.getItem('notes');
        if (notes && notes.length > 0) {
            this.setState({
                notes: JSON.parse(notes)
            })
        }

    }

    /**
     * updateAsyncStorage
     *
     * @array   notes   notes array to save in asyncstorage
     *
     * @return  promise
     */
    updateAsyncStorage(notes) {

        return new Promise( async(resolve, reject) => {

            try {

                await AsyncStorage.removeItem('notes');
                await AsyncStorage.setItem('notes', JSON.stringify(notes));
                return resolve(true);

            } catch(e) {
                return reject(e);
            }

        });

    }

    /**
     * cloneNotes
     *
     * Creates a shallow copy of the state notes array
     *
     * @return   @array  cloned notes array
     */
    cloneNotes() {
        return [...this.state.notes];
    }

    /**
     * addNote
     *
     * Adds new note.
     *
     * @return  undefined
     */
    async addNote() {

        if (this.state.note.length <= 0)
            return;

        try {

            const notes = this.cloneNotes();
            notes.push(this.state.note);

            await this.updateAsyncStorage(notes);

            this.setState({
                notes: notes,
                note: ''
            });

        }

        catch(e) {

            // notes could not be updated
            alert(e);

        }

    }

    /**
     * removeNote
     *
     * Removes note based on array index.
     *
     * @return  undefined
     */
    async removeNote(i) {

        try {

            const notes = this.cloneNotes();
            notes.splice(i, 1);

            await this.updateAsyncStorage(notes);
            this.setState({ notes: notes });

        }

        catch(e) {

            // Note could not be deleted
            alert(e);

        }

    }

    /**
     * renderNotes
     *
     * Renders all notes in note array in a map.
     *
     * @return  Mapped notes array
     */
    renderNotes() {

        return this.state.notes.map((note, i) => {
            return (
                <TouchableOpacity 
                    key={i} style={styles.note} 
                    onPress={ () => this.removeNote(i) }
                >
                    <Text style={styles.noteText}>{note}</Text>
                </TouchableOpacity>
            );
        });

    }

    render() {

        return (

            
            <View style={styles.container}>
           
                <Header title={Config.title} />

                <ScrollView style={styles.scrollView}>
                <RefreshControl style={styles.container}/>
             
                {this.renderNotes()}
                 </ScrollView>  
               
                <Footer
                    onChangeText={ (note) => this.setState({note})  }
                    inputValue={this.state.note}
                    onNoteAdd={ () => this.addNote() }
                />
         
               

            </View>
        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    scrollView: {
        maxHeight: '82%',
        marginBottom: 100,
        backgroundColor: 'orange'
    },
    note: {
        margin: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        backgroundColor: 'grey',
        borderColor: 'black',
        borderRadius: 70,
    },
    noteText: {
        fontSize: 14,
        padding: 20,
    }
});