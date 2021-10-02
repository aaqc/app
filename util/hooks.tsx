import { useEffect } from "react";
import { StyleSheet, useColorScheme } from "react-native";
import { useEffectOnce } from "react-use";
import { DarkColors, LightColors } from "./Colors";
import gatewayConnection from "./GatewayConnection";

export const useColors = () => {
    const isDarkMode = useColorScheme() === "dark";
    return isDarkMode ? DarkColors : LightColors;
};

export const useStyles = () => {
    const Colors = useColors();

    return StyleSheet.create({
        heading: {
            fontSize: 36,
            color: Colors.text,
            fontWeight: "bold",
        },
        icon: {
            fontSize: 24,
        },
        default: {
            color: Colors.text,
            backgroundColor: Colors.background,
        },
        grow: {
            flexGrow: 1,
        },
    });
};

export const useGateway = (listener: (type: string, data: object | undefined) => void) => {
    useEffect(() => {
        gatewayConnection.addListener(listener);

        return () => {
            gatewayConnection.removeListener(listener);
        };
    }, [listener]);

    return gatewayConnection;
};
