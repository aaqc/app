import * as React from "react";
import { Text, View } from "react-native";
import MapView from "react-native-maps";

interface DroneCardProps {}

const DroneCard: React.FunctionComponent<DroneCardProps> = (props) => {
    return (
        <View style={{ height: 200, margin: 16, borderRadius: 4, overflow: "hidden" }}>
            <MapView
                pitchEnabled={false}
                rotateEnabled={false}
                scrollEnabled={false}
                zoomEnabled={false}
                region={{ latitude: 57.8456196, longitude: 12.2039958, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
                style={{ flex: 1 }}
            />

            <View style={{ position: "absolute", padding: 4, justifyContent: "center", height: 40, bottom: 0, left: 0, right: 0, backgroundColor: "#fffc" }}>
                <Text style={{fontSize: 18}}>Drone 1</Text>
            </View>
        </View>
    );
};

export default DroneCard;
