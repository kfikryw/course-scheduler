import React from 'react';
import {Image} from 'react-native';

const ShowImage = (props) => {
    return (
        <Image
          source={props.theSource}
          style={{ width: 200, height: 200 }}
        />
    )
}

export default ShowImage;