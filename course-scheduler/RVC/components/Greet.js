import React from 'react';
import {Text} from 'react-native';

const Greet = (props) => {
    return <Text>Assalamualaikum and Welcome, {props.username}</Text>;
}

export default Greet;