import React from 'react'
import { TextInput } from 'react-native'
import { styles } from './InputStyles'
import { COLORS } from '../../styles/colors'


export function Input({
value,
onChangeText,
placeholder,
keyboardType = 'default',
multiline = false
}: Props) {

return (
    <TextInput
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder}
    keyboardType={keyboardType}
    multiline={multiline}
    placeholderTextColor={COLORS.placeholder}
    style={[
        styles.input,
        multiline && styles.textArea
        
    ]}
    />
)
}

type Props = {
value: string
onChangeText: (text: string) => void
placeholder: string
keyboardType?: 'default' | 'numeric' | 'phone-pad'
multiline?: boolean
}