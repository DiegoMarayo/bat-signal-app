import { StyleSheet } from 'react-native'
import { COLORS } from '../../styles/colors'

export const styles = StyleSheet.create({
input: {
width: '100%',
height: 50,
borderWidth: 1,
borderColor: '#aaa',
borderRadius: 10,
paddingHorizontal: 12,
marginBottom: 15,
color: COLORS.text,
backgroundColor: COLORS.background
},

textArea: {
    height: 100,
    paddingTop: 10,
    textAlignVertical: 'top',
}
})