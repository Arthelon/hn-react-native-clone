import React, {Component} from 'react'
import { View } from 'react-native';

class App extends Component {
    render () {
        return (
            <View>
               {this.props.children}
            </View>
        )
    }
}

export default App