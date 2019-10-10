import React from 'react';
import{
    AppRegistry,
    StyleSheet,
    ImageBackground,
    Image,
    Text,
    Button,
    View,
    Alert,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class Cadastrar extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            TextInputNome: '',
            TextInputEmail: '',
            TextInputSenha: '', 
        }
    }

    InsertDataToServer = () =>{
 
 
        const { TextInputNome }  = this.state ;
        const { TextInputEmail }  = this.state ;
        const { TextInputSenha }  = this.state ;
        
       fetch('http://tfreitasdesign.com/mychurchbackend/cadastrar-usuario.php', {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
        
           nome: TextInputNome,
        
           email: TextInputEmail,
        
           senha: TextInputSenha
        
         })
        
       }).then((response) => response.json())
             .then((responseJson) => {
        
       // Showing response message coming from server after inserting records.
               Alert.alert(responseJson);
        
             }).catch((error) => {
               console.error(error);
        });
        
        
    }

    render(){
        return(
        
            <View style={styles.container}>
                   <ImageBackground source={require('../assets/img-layout/cadastrar-bg.jpg')} style={styles.bg_cadastrar}>
                       <Text style={styles.header}>
                           Cadastrar no App
                       </Text>
                       <Text style={styles.detalhes}>
                           Ao cadastrar, algumas funções do aplicativo só estarão disponíveis caso confirme seu cadastro como membro.
                       </Text>
                   </ImageBackground>
                   <View style={styles.wrapper}>
                        {/*Dados de Cadastro*/}
                        <Text style={styles.subtitles}>Preencha o formulário Abaixo</Text>
                        <TextInput
                            style={styles.textinput} placeholder='Seu Nome'
                            onChangeText = {(TextInputNome) => this.setState({TextInputNome})}
                            underlineColorAndroid = 'transparent'
                        />
                        <TextInput
                            style={styles.textinput} placeholder='Seu E-mail'
                            onChangeText = {(TextInputEmail) => this.setState({TextInputEmail})}
                            underlineColorAndroid = 'transparent'
                        />
                        <TextInput
                            secureTextEntry={true}
                            style={styles.textinput} placeholder='senha'
                            onChangeText = {(TextInputSenha) => this.setState({TextInputSenha})}
                            underlineColorAndroid = 'transparent'
                        />

                        <Button title="Fazer Cadastro" onPress={this.InsertDataToServer} color="#2196F3" />
                   </View>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    header:{
        fontSize: 24,
        marginTop: 30,
        marginBottom: 30,
        fontWeight: 'bold',
        color:'#ffffff',
        textAlign:'center',
    },
    subtitles:{
        fontSize: 20,
        marginTop: 5,
        marginBottom: 5,
        fontWeight: 'bold',
        color:'#000',
        textAlign:'center',
    },
    detalhes:{
        color:'#fff',
        paddingLeft:20,
        paddingRight:20,
    },
    wrapper:{
        width:'100%',
        paddingRight:40,
        paddingLeft:40,
        marginTop:20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textinput:{
        height:50,
        alignSelf: 'stretch',
        padding: 16,
        marginBottom: 20,
        backgroundColor: '#fff',
        borderColor:'#ccc',
        borderWidth:1,
    },
    btn:{
        alignSelf: 'stretch',
        backgroundColor: '#01c853',
        padding: 20,
        alignItems: 'center',
    },
    btncadastro:{
        marginTop:40,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        padding: 20,
        alignItems: 'center',
    },
    bg_cadastrar: {
        width: '100%',
        paddingTop:30,
        paddingBottom: 30,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      
    },
  });

 