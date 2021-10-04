import * as React from "react";
import { Text, View } from "react-native";
import { Switch } from "react-native";
import gatewayConnection from "../util/GatewayConnection";

interface SettingsProps {}

const Settings: React.FunctionComponent<SettingsProps> = (props) => {
    const [usingLocalhost, setUsingLocalhost] = React.useState(false);
    return (
        <View>
            <Text>Settings sak</Text>
            <Switch
                value={usingLocalhost}
                onValueChange={(e) => {
                    gatewayConnection.connectTo("ws://localhost:8000");
                    setUsingLocalhost(e);
                    
                }}
            />
        </View>
    );
};

export default Settings;
