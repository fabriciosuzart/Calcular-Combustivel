import React from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

export default props => {
  return (
    <View style={estilos.bloco}>
      <Text>Digite o valor do etanol</Text>
      <TextInput
        style={estilos.txt}
        keyboardType="numeric"
        onChangeText={text => props.aoModificar(text)}
      />
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
  }
});