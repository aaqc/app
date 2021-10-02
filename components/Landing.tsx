import { useNavigation, useNavigationState } from "@react-navigation/core";
import * as React from "react";
import { SafeAreaView, ScrollView, StatusBar, Text, View, Button } from "react-native";
import { Icon } from "react-native-elements";
import { useInterval } from "react-use";
import { useColors, useGateway, useStyles } from "../util/hooks";
import BadgedText from "./BadgedText";

interface LandingProps {}

const Landing: React.FunctionComponent<LandingProps> = (props) => {
    
    const styles = useStyles();
    const Colors = useColors();
    const [delay, setDelay] = React.useState(0);

    const ref = React.useRef(Date.now());
    const gateway = useGateway((t, data) => {
        setDelay(Date.now() - ref.current);
    });

    const navigator = useNavigation<["Settings"]>();

    useInterval(() => {
        ref.current = Date.now();
        gateway.send("ping");
    }, 500);

    return (
        <View style={styles.default}>
            <Icon
                onPress={() => {
                    navigator.navigate("Settings");
                }}
                color={Colors.text}
                style={{ alignSelf: "flex-end", margin: 24 }}
                size={36}
                name="settings"
                type="material"
            />
            <SafeAreaView style={[styles.default, styles.grow]}>
                <View style={[{ flexDirection: "row", justifyContent: "space-between", marginLeft: 4, marginRight: 4, marginBottom: 4 }, styles.default]}>
                    <Text style={styles.heading}>Drones</Text>
                    <BadgedText badgeColor={Colors.success}>{`Connected (${delay} ms)`}</BadgedText>
                </View>
                <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.default}>
                    <View style={styles.default}></View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

export default Landing;
