import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    card:{
        backgroundColor:'white',
        borderRadius: 10,
        //borderColor: '#B0E0E6',
        //borderWidth: 3,
        width:'95%',
        height:500,
        marginTop:10,
    },
    header:{
        flexDirection: 'row',
        height:100,
        //backgroundColor:'black'
    },
    content:{
        height:300,
        alignItems:'center', 
        justifyContent:'center'
        //backgroundColor:'green'
    },
    footer:{
        alignItems:'center', 
        justifyContent:'flex-end',
        height:100,
        //backgroundColor:'black'
    },
    title:{
        fontSize:16,
        marginTop:10
    },
    post:{
        margin:10
    }
})