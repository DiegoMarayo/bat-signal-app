import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './FormularioStyles';
import { Logo } from '../../../components/Logo/Logo';
import { Input } from '../../../components/Input/Input'

type Props = {onVoltar: () => void}

export function Formulario({ onVoltar }: Props) {
const [nome, setNome] = useState('')
const [telefone, setTelefone] = useState('')
const [localizacao, setLocalizacao] = useState('')
const [observacao, setObservacao] = useState('')

function handleEnviar() {
    if (
    !nome.trim() ||
    !telefone.trim() ||
    !localizacao.trim() ||
    !observacao.trim()
    ) {
    Alert.alert('Erro', 'Preencha todos os campos!')
    return
    }

    Alert.alert('Sucesso', 'Dados enviados 🦇')

    // limpar campos
    setNome('')
    setTelefone('')
    setLocalizacao('')
    setObservacao('')
}

return (
    <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
            <View>
                <View style={styles.header}>
                <TouchableOpacity onPress={onVoltar}>
                <Text style={styles.voltar}>← Voltar</Text>
                </TouchableOpacity>
                </View>
                <Logo/>
            </View>
            <View style={styles.formContainer}>
            <Input
                value={nome}
                onChangeText={setNome}
                placeholder="Nome"
            />

            <Input
                value={telefone}
                onChangeText={setTelefone}
                placeholder="Telefone"
                keyboardType="phone-pad"
            />

            <Input
                value={localizacao}
                onChangeText={setLocalizacao}
                placeholder="Localização Atual"
            />

            <Input
                value={observacao}
                onChangeText={setObservacao}
                placeholder="Observações"
                multiline
            />    

            <TouchableOpacity style={styles.enviar} onPress={handleEnviar}>
            <Text style={styles.enviarText}>Enviar</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
    </SafeAreaView>
);
}