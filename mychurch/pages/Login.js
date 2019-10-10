import React from 'react';
import{
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

export default class Login extends React.Component{
    static navigationOptions = {
        header: null,
    };

    constructor(props){
        super(props);
        this.state = {
            LoginEmail: '',
            LoginSenha: '',
        }
    }

    componentDidMount(){
        this._loadInitialState().done();
    }

    _loadInitialState = async () => {

        var value = await AsyncStorage.getItem('user');
        if(value !== null){
            this.props.navigation.navigate('Profile');
        }
    }

    render(){
        return(
            
            <KeyboardAvoidingView style={styles.container}>
                <ImageBackground source={require('../assets/img-layout/login-bg.jpg')} style={styles.login_bg}>
                    <Image
                        style={{width:150, height:150}}
                        source={require('../assets/img-layout/mychurchlogo.png')}
                    />
                    <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
                        <Text style={styles.header}>Login</Text>
                        <TextInput
                            style={styles.textinput} placeholder='Seu E-mail'
                            onChangeText = {(LoginEmail) => this.setState({LoginEmail})}
                            underlineColorAndroid = 'transparent'
                        />
                        <TextInput
                            secureTextEntry={true}
                            style={styles.textinput} placeholder='senha'
                            onChangeText = {(LoginSenha) => this.setState({LoginSenha})}
                            underlineColorAndroid = 'transparent'
                        />
                        <TouchableOpacity style={styles.btn}
                        onPress = {this.login}>
                            <Text>Entrar</Text>
                        </TouchableOpacity>

                    </KeyboardAvoidingView>
                    <View style = {styles.wrapper}>
                        <TouchableOpacity style={styles.btncadastro}
                            onPress = {() => this.props.navigation.navigate('Cadastrar')}>
                            <Text style={{color: '#000'}}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                        
                        
                </ImageBackground>     
            </KeyboardAvoidingView>
            
        );
    }

    login = () => {
        
        //Iniciar um fetch passando o email e senha para o backend
        
        fetch('https://tfreitasdesign.com/mychurchbackend/app-login.php', {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                useremail: this.state.LoginEmail,
                usersenha: this.state.LoginSenha,
            })
        })
        
        .then((response) => response.json())
        .then((responseJson) => {
            // If server response message same as Data Matched
            if(responseJson.res == 'sucesso'){
 
                //Then open Profile activity and send user email to profile activity.
                AsyncStorage.setItem('user', responseJson.email);
                AsyncStorage.setItem('nome', responseJson.nome);
                this.props.navigation.navigate('Profile');
 
            }
            else{
 
                Alert.alert(responseJson);

            }
 
        }).catch((error) => {
            console.error(error);
        });
        
    }
}

const styles = StyleSheet.create({
    header:{
        fontSize: 24,
        marginTop: 30,
        marginBottom: 30,
        fontWeight: 'bold',
        color:'#ffffff',
    },
    wrapper:{
        width:'100%',
        paddingRight:40,
        paddingLeft:40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textinput:{
        height:50,
        alignSelf: 'stretch',
        padding: 16,
        marginBottom: 20,
        backgroundColor: '#fff',
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
    login_bg: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
  });