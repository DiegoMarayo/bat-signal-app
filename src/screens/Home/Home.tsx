import React, { useState } from 'react'
import { View } from 'react-native'
import { styles } from './HomeStyles'
import { Logo } from '../../components/Logo/Logo'
import { Button } from '../../components/Button/Button'
import { Formulario } from './Formulario/Formulario'

export function Home() {
  // Estado que controla a tela
const [mostrarFormulario, setMostrarFormulario] = useState(false)

  // Função chamada quando clicar no botão
function ativarFormulario() {
    setMostrarFormulario(true)
}
  // Função tela inicial
function voltar() {
  setMostrarFormulario(false)
}

return (
    <View style={styles.container}>

    {/* Renderização condicional  */}
    {mostrarFormulario ? (
        <Formulario onVoltar={voltar} />
    ) : (
        <>
        <Logo/>
        <Button onPress={ativarFormulario} />
        </>
    )}

    </View>
)
}
