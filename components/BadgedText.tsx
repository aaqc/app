import * as React from "react";
import { Text } from "react-native";
import styled from "styled-components";

interface BadgedTextProps {
    badgeColor: string;
    children: string;
}

const BadgedText: React.FunctionComponent<BadgedTextProps> = (props) => {
    return (
        <Text
            style={{
                backgroundColor: props.badgeColor,
                borderRadius: 99999,
                alignSelf: "flex-start",
                padding: 8,
                paddingLeft: 16,
                paddingRight: 16,
            }}
        >
            {props.children}
        </Text>
    );
};

export default BadgedText;
