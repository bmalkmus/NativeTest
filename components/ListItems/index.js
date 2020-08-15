/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
} from 'native-base';

import {StyleSheet} from 'react-native';

function ListAvatar ({employees}) {


    return (
        <Container style={styles.container}>
            <Header>
                <Left>
                    <Button transparent>
                    <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                    <Title>Header</Title>
                </Body>
                <Right>
                    <Button transparent>
                    <Text>Cancel</Text>
                    </Button>
                </Right>
            </Header>
                <Content>
                    <List>
                        <ListItem>
                            <Text style={styles.text}>This is a test</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text}>This is a test</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text}>This is a test</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize:20,
        color: 'blue',
    },
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff', height:800 },
  });

export default ListAvatar;
