import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Gasolina from './componentes/gasolina.js'
import Etanol from './componentes/etanol.js';
import BtnCalcular from './componentes/btnCalcular.js';
import Resultado from './componentes/resultado.js';
import ImgResultado from './componentes/imgResultado.js';

export default function App() {

  const [gasolina, setGasolina] = useState(0)
  const [etanol, setEtanol] = useState(0)
  const [resultado, setResultado] = useState('')

  const calcular = () => {
    if (!gasolina) {
      alert('Informe o valor da Gasolina')
      return
    }
    if (!etanol) {
      alert('Informe o valor da Etanol')
      return
    }
    let res
    let calc = ((etanol / gasolina) * 100).toFixed(1)

    if (calc > 70) {
      res = 'Gasolina'
    } else {
      res = 'Etanol'
    }
    alert('O Etanol está custando ' + calc + '% da gasolina. Portando é melhor abastecer com ' + res)
    setResultado(res)
  }

  const limpar = () => {
    setResultado('')
  }

  const setarGasolina = (v) => {
    limpar()
    setGasolina(v)
  }

  const setarEtanol = (v) => {
    limpar()
    setEtanol(v)
  }

  return (
    <SafeAreaView style={estilos.principal}>
      <Gasolina aoModificar={setarGasolina}/>
      <Etanol aoModificar={setarEtanol}/>
      <BtnCalcular aoPress={calcular}/>
      <Resultado resultado={resultado}/>
      <ImgResultado comb={resultado.charAt(0)}/>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  principal: {
    padding: 15,
    marginTop:15
  }
});
