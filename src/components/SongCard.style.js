import { StyleSheet } from "react-native";

export default StyleSheet.create({
    main_container:{
        padding:10,
        flexDirection:'row',
       
    },
    image:{
        width:100,
        height:100,
        borderRadius:50
    },
    container:{
        padding:10,
        flex:1,
        justifyContent:'center'
    },
    title:{
        fontWeight:'bold',
        fontSize:27
    },
    inner_container:{
        flexDirection:'row',
        flex:1,
        alignItems:'center',
    },
    artist:{},
    year:{
        marginLeft:20,
        color:'gray',
        fontWeight:'bold',
        fontSize:12
    },
    soldout_container:{
        borderWidth:1,
        borderColor:'red',
        padding:5,
        borderRadius:5
    },
    soldout_title:{
        color:'red',
        fontSize:15
    },
    content_container:{
        flexDirection:'row',
        
    }
});