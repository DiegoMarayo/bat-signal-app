import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/colors';

export const styles = StyleSheet.create({
button: {
backgroundColor: COLORS.primary,
paddingVertical: 12,
paddingHorizontal: 20,
borderRadius: 8,
marginTop: 10,
},

buttonText: {
color: '#000',
fontWeight: 'bold',
textAlign: 'center',
}
});