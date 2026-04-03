import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './ButtonStyles'

type Props = {onPress: () => void}

export function Button({ onPress }: Props) {
return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.buttonText}>Activate Bat Signal</Text>
    </TouchableOpacity>
)
}