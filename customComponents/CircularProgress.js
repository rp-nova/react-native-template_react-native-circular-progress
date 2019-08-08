import React from 'react'

import {
    View,
} from 'react-native'

import {
    AnimatedCircularProgress,
} from 'react-native-circular-progress'

export default class CircularProgress extends React.Component {
    render() {
        return (
            <View
                style = {{
                    transform: [
                        {
                            scaleX: -1
                        }
                    ]
                }}
            >
                <View
                    style = {{
                        alignItems: "center",
                        bottom: 0,
                        justifyContent: "center",
                        left: 0,
                        position: "absolute",
                        right: 0,
                        top: 0,
                    }}
                >
                    <AnimatedCircularProgress
                        backgroundColor = {this.props.backgroundColor}
                        fill = {this.ToPercentNumber(this.props.secondNumber)}
                        onAnimationComplete = {() => console.log('onAnimationComplete')}
                        size = {this.props.circularSize}
                        rotation = {0}
                        tintColor = {this.props.secondColor}
                        width = {this.props.circularWidth}
                    />
                </View>

                <AnimatedCircularProgress
                    backgroundColor = "transparent"
                    fill = {this.ToPercentNumber(this.props.firstNumber)}
                    onAnimationComplete = {() => console.log('onAnimationComplete')}
                    size = {this.props.circularSize}
                    rotation = {0}
                    tintColor = {this.props.firstColor}
                    width = {this.props.circularWidth}
                />
                    
                {
                    this.ToPercentNumber(this.props.firstNumber) >= 5 ?
                        <View
                            style = {{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                justifyContent: "center",
                                alignItems: "center",
                                transform: [
                                    {
                                        rotateZ: "8deg",
                                    }
                                ]
                            }}
                        >
                            <View
                                style = {{
                                    backgroundColor: "white",
                                    borderWidth: 1,
                                    borderColor: "dimgray",
                                    borderRadius: this.props.circularWidth / 4,
                                    height: this.props.circularWidth / 2,
                                    width: this.props.circularWidth / 2,
                                    bottom: (this.props.circularSize / 2) - (this.props.circularWidth / 2),
                                }}
                            />
                        </View>
                        :
                        null
                }
            </View>
        )
    }

    ToPercentNumber(number) {
        return Math.round(number / this.props.max * 100)
    }
}