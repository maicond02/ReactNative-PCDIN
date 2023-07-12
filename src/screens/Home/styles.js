import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:30
  },
  textColor: {
    color: 'black',
    marginBottom: 10,
    fontSize:25,
    color:'#878787'
  },
  textHeader:{
    color: '#878787',
    marginBottom: 10,
    fontSize:25
  },
  textInput:{
    backgroundColor:'white',
    borderRadius: 10,
    borderWidth: 2,
    borderColor:'white',
    width:200,
    height:50,
  },
  containerLogin: {
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    width:'90%',
    height:'90%',
    borderRadius:50,
  },
  loginContent: {
    flex:1,
    alignItems: 'center',

  },
  moreConnections:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle:{
    width: 200,
    height: 50,
    borderRadius: 10,
    backgroundColor:'#0097FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20
  },
  buttonMoreConnections:{
    width: 200,
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor:'#0097FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  requiredLoginText:{
    marginTop:10,
    marginBottom:10
  }
});