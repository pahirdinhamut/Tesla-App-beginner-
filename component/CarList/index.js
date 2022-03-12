import React from "react";
import cars from "./cars";
import {View,Text,FlatList,Dimensions} from "react-native";

import styles from "../CarItem/style";
import CarItem from "../CarItem";

const CarList = (props) => {
    return (
        <FlatList
            data={cars}
            renderItem={
                ({item})=>
                    <CarItem
                      cars={item}
                    />

            }
            showsVerticalScrollIndicator={false}
            snapToAlignment={'start'}
            decelerationRate={'false'}
            snapToInterval={Dimensions.get('window').height}
        />
    )
}

export default CarList;