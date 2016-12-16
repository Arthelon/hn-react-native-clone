import React, {Component} from 'react'
import Navbar from '../components/Navbar';
import { View } from 'react-native';
import { Container, Header, Title } from 'native-base';

class IndexContainer extends Component {
    render () {
        return (
            <View>
                <Navbar />
                
            </View>
        )
    }
}

export default IndexContainer