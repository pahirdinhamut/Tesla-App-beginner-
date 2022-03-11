import React from "react";
import styles from "./style"
import Buttom from "../Buttom";

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
            <Buttom
                type="primary"
                content={"Costum Order"}
                onPress={()=>{console.warn("button press")}}
            />
            <Buttom
                type="secondary"
                content={"Existing Invertery"}
                onPress={()=>{console.warn("button press 2")}}
            />
        </View>
    )
}

export default CarItem;