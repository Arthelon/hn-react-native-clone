import React, {Component} from 'react'
import { Container, Header, Title } from 'native-base';

class Navbar extends Component {
    render () {
        return (
            <Container>
                <Header>
                    <Title>HackerNews Clone</Title>
                </Header>
            </Container>
        )
    }
}

export default Navbar