import React from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native";

export default props => {
  return (
    <View style={estilos.bloco}>
      <TouchableHighlight
        style={estilos.btn}
        onPress={props.aoPress}
      >
        <Text style={estilos.txtBtn}>Calcular</Text>
      </TouchableHighlight>
    </View>
  )
}

const estilos = StyleSheet.create({
  bloco: {
    marginBottom: 10
  },
  txt: {
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 7,
    padding: 10
  },
  btn:{
    backgroundColor:'#000',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:7,
    padding:15
  },
  txtBtn:{
    textTransform:'uppercase',
    color:'#fff',
    fontSize:15
  }
});