import {StyleSheet} from "react-native";
import {resizeMode} from "react-native/Libraries/DeprecatedPropTypes/DeprecatedImagePropType";

const styles = StyleSheet.create({

    container:{
        position:'absolute',
        top:50,
        zIndex:100,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        width:'100%',
    },
    logo:{
        width:100,
        height:25,
        resizeMode:'contain',

    },
    menu:{
        width:25,
        height:25,
        resizeMode:'contain'
    }
})


export default styles;
