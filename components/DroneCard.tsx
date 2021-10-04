import * as React from "react";
import { View } from "react-native";
import MapView from "react-native-maps";

interface DroneCardProps {}

const DroneCard: React.FunctionComponent<DroneCardProps> = (props) => {
    return (
        <View>
            <MapView initialRegion={{latitude: 57.8456196, longitude: 12.2039958, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }} style={{height: 600}} /> 
        </View>
    );
};

export default DroneCard;
