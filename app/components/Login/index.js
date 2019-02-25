import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  AsyncStorage
} from 'react-native'

//import { goHome } from './navigation'
//import { USER_KEY } from './config'

class Login extends React.Component {
  
  state = {
    username: '', password: ''
  }

  static navigationOptions = {
    header: null
}

  onChangeText = (key, value) => {
    this.setState({ [key]: value })
  }
  //signIn = async () => {
    signIn = () => {
      console.log('user successfully signed in!')
      const { username, password } = this.state
      if(username=='admin'&&password=='admin'){
          
        this.props.navigation.navigate('dashboard')

      }
      else{
        Alert.alert('Error','Username/Password missmatch',[{text:'ok'}])
      }
 
       // login with provider
      // const user = await AsyncStorage.setItem(USER_KEY, username)
      // console.log('user successfully signed in!', user)

    
      
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          autoCapitalize="none"
          secureTextEntry={true}
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
        />
        <Button
          title='Sign In'
          onPress={this.signIn}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    fontSize: 18,
    fontWeight: '500',
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    color: 'white',
    padding: 8,
    borderRadius: 14
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Login