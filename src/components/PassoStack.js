import React from "react"
import {Button, SafeAreaView, Text, View } from 'react-native'


export default props => (
    <View style={{flex: 1}}>
        <View>
            {props.avancar 
            ? <Button 
                title="Avançarr"
                onPress={() => {
                    props.navigation.navigate(props.avancar)
                }}
            /> 
            : false}

        </View>
        <View style={{flex: 1}}>
            {props.children}
        </View>
    </View>
)