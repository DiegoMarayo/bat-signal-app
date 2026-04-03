import React from 'react';
import { Image } from 'react-native';
import { styles } from './LogoStyles'


export function Logo() {
return (
    <>
        <Image source={require('../../../assets/BatLogo.png')} style={styles.logo}/>
    </>
);
};    