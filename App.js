import React from 'react'

import {
    View,
} from 'react-native'

import CircularProgress from "./customComponents/CircularProgress";

export default class App extends React.Component {
    render() {
        return (
            <View
                style = {{
                    alignItems: "center",
                    flex: 1,
                    justifyContent: "center",
                }}
            >
                <CircularProgress
                    backgroundColor = "darkseagreen"
                    firstColor = "green"
                    firstNumber = {80}
                    max = {100}
                    secondColor = "firebrick"
                    secondNumber = {90}
                    circularSize = {100}
                    circularWidth = {15}
                />

                <View
                    style = {{
                        marginVertical: 20,
                    }}
                >
                    <CircularProgress
                        backgroundColor = "darkseagreen"
                        firstColor = "green"
                        firstNumber = {20}
                        max = {100}
                        secondColor = "firebrick"
                        secondNumber = {70}
                        circularSize = {150}
                        circularWidth = {25}
                    />
                </View>

                <CircularProgress
                    backgroundColor = "darkseagreen"
                    firstColor = "green"
                    firstNumber = {5}
                    max = {100}
                    secondColor = "firebrick"
                    secondNumber = {20}
                    circularSize = {200}
                    circularWidth = {25}
                />
            </View>
        )
    }
}