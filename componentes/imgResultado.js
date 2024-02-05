import React from "react";
import { StyleSheet, View, Image } from "react-native";

export default props => {
  return (
    <View style={estilos.bloco}>
      {
        props.comb == '' ?
          <Image
            source={require('../assets/images/bomba.png')}
            style={estilos.bomba}
          />
        :
          props.comb == 'G' ?
            <Image
              source={require('../assets/images/bombaG.png')}
              style={estilos.bomba}
            />
          :
            <Image
              source={require('../assets/images/bombaE.png')}
              style={estilos.bomba}
            />
      }

    </View>
  )
}

const estilos = StyleSheet.create({
  bloco: {
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bomba: {
    resizeMode: 'stretch',
    width: 218,
    height: 200
  }
});