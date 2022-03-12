import React from "react";
import styles from "./style"
import Buttom from "../Buttom";

import {StyleSheet, View, Text, ImageBackground} from "react-native";
import {touchProps} from "react-native-web/dist/modules/forwardedProps";
const CarItem = (props)=>{
    const {name,tagline,image,taglineCTA} = props.cars;

    return(
        <View style={styles.carContainer}>
            <ImageBackground
                source={image}
                style={styles.Image}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {tagline} {" "}
                    <Text style={styles.textCTA}>{taglineCTA}</Text>
                </Text>
            </View>
            <View style={styles.buttomContainer}>
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
        </View>
    )
}

export default CarItem;