import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  loginSetup:{
    flex: 1,
    alignItems: 'center',
    marginTop:20
  },
  textColor: {
    color: 'black',
    fontSize:25,
    color:'#878787'
  },
  textHeader:{
    color: '#878787',
    marginBottom: 10,
    fontSize:20
  },
  textInput:{
    backgroundColor:'#CCD1D1',
    borderRadius: 10,
    borderWidth: 2,
    borderColor:'white',
    width:250,
    height:50,
    padding:10
  },
  moreConnections:{
    alignItems: 'center',
    justifyContent:'center'
  },
  buttonStyle:{
    width: 250,
    height: 50,
    borderRadius: 20,
    backgroundColor:'#0097FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:15,
    marginBottom:15
  },
  buttonRegister:{
    width: 250,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor:'#CCD1D1',
    marginTop:15,
  }
});