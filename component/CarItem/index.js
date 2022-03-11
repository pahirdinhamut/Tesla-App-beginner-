import React from "react";
import styles from "./style"

import {StyleSheet, View, Text, ImageBackground} from "react-native";

const CarItem = ()=>{
    return(
        <View style={styles.carContainer}>
            <ImageBackground
                source={require('../../assets/images/ModelS.jpeg')}
                style={styles.Image}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subtitle}>Strating at $69,420</Text>
            </View>
        </View>
    )
}

export default CarItem;