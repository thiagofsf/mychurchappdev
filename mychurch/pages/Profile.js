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
    Ionicons,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

state = { email: '', nome: '' };



export default class Profile extends React.Component{
    
    static navigationOptions = {
        header: null,
    };

    constructor(props){
        super(props);
        this.state = {
            Email: '',
            Nome: '',
        }
    }

    //recupera dados do async
    async componentWillMount() {
        const emailGet = await AsyncStorage.getItem('user');
        const nomeGet = await AsyncStorage.getItem('nome');
        if (emailGet) {
          this.setState({ Email: emailGet });
        } else {
          this.setState({ Email: 'sem email' });
        }
        if (nomeGet) {
            this.setState({ Nome: nomeGet });
          } else {
            this.setState({ Nome: 'sem nome' });
          }
    }

    async removeItemValue(key) {
        try {
          await AsyncStorage.removeItem(key);
          return true;
        }
        catch(exception) {
          return false;
        }
    }

    logout = () => {
        AsyncStorage.removeItem('user');
        AsyncStorage.removeItem('nome');
        this.props.navigation.navigate('Home');
    }
    
    render(){
        return(
            
            <View style={{width:'100%', height:'100%',backgroundColor: '#ededed', alignItems:"center"}}>
                    <ImageBackground source={require('../assets/img-layout/painel-bg.jpg')} style={{width: '100%', height: 300, justifyContent:"center",}}>
                        <View style={{marginLeft:10}}>
                            <Text style={{fontSize:50, color:'#ffffff', }}>Bem Vindo</Text>
                            <Text style={{fontSize:20, color:'#ffffff', }}>A sua Church!</Text>
                        </View>
                    </ImageBackground>
                    <View style={{width:'80%', height:100, backgroundColor:'#93278F', borderRadius: 5, marginTop:-50, alignItems: "center"}}>
                        <Text style={{marginTop:20, color: '#ffffff', fontFamily: 'Roboto', fontSize:20}}>{this.state.Nome}</Text>
                        <Text style={{color: '#ffffff', fontFamily: 'Roboto', fontSize:16}}>{this.state.Email}</Text>
                    </View>
                    <View style = {styles.wrapper}>
                        <TouchableOpacity style={styles.btncadastro}
                            onPress = {this.logout}>
                                <Image
                                    style={{width:50, height:50}}
                                    source={require('../assets/icons/logout.png')}
                                />
                                <Text>Sair</Text>
                        </TouchableOpacity>
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