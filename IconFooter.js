import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Footer,
  FooterTab,
    Icon,
    Item,
    Input,
    Image,
    Body,
    Left,
    List,
  ListItem,
    Right,
    ScrollableTab,
    StyleProvider,
    Tab,
    Tabs,
    Thumbnail
  } from "native-base";
  const pict = require("./assets/euro.png");
  const datas = [
    {
      img: pict,
      text: "Deliveroo",
      note: "Online",
      value: "€ 25.30"
    },
    {
      img: pict,
      text: "McDonalds",
      note: "On site",
      value: "€ 12.20"
    },
    {
      img: pict,
      text: "Tonya Massage",
      note: "Online",
      value: "€ 130.00"
    },
    {
      img: pict,
      text: "World Cinema",
      note: "On site",
      value: "€ 35.50"
    },
    {
      img: pict,
      text: "Rapadura Doce",
      note: "On site",
      value: "€ 8.35"
    },
    {
      img: pict,
      text: "Edu Consulting",
      note: "Online",
      value: "€ 200.10"
    }
  ];

class IconFooter extends Component {
  
  render() {
    return (
      <Container>
        <Content style={styles.ctner}>
            

            <Content style={styles.container} padder>
                <View style={{ flex:1, flexDirection: 'row', justifyContent: "space-between"}}>
                    
                    <Icon
                    name="person"
                    style={{ width: 45, height: 45, flexDirection: 'row', justifyContent: "space-between" }}
                    />
                    <View style={{ flex:1, flexDirection: 'row', justifyContent: "flex-end"}}>
                    <Icon
                    name="star"
                    style={{ width: 45, height: 45}}
                    />
                    <Icon
                    name="bookmarks"
                    style={{ width: 45, height: 45}}
                    />
                    <Icon
                    name="grid"
                    style={{ width: 45, height: 45}}
                    />
                    </View>
                </View>
            </Content>
        <Tabs renderTabBar={() => <ScrollableTab />}>
            <Tab heading="Incomes">
            </Tab>
            <Tab heading="Expenses">    
            </Tab>
        </Tabs>
       </Content>



       <View>

<Text style={styles.balance}>Current balance</Text>

<Text style={styles.currentBalance}>€13,450</Text> 
</View>


       <Content>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={data.img} />
                </Left>
                <Body>
                  <Text>
                    {data.text}
                  </Text>
                  <Text numberOfLines={1} note>
                    {data.note}
                  </Text>
                </Body>
                <Right>
                  <Button transparent>
                    <Text>{data.value}</Text>
                  </Button>
                </Right>
              </ListItem>}
          />
        </Content>

        <Content>
            
        </Content>

        

            <Item style={styles.search}>
                <Icon active name="search" />
                <Input placeholder="Search for incomes" />
                <Icon active name="cash" />
            </Item>




       






        <Footer>
          <FooterTab>
            <Button >
              <Icon name="apps" />
            </Button>
            <Button >
              <Icon name="camera" />
            </Button>
            <Button >
              <Icon name="compass" />
            </Button>
            <Button >
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

//StyleSheet - to create style objects with an ID to reuse it
const styles = StyleSheet.create({
      currentBalance: {
        textAlign: "center",
        marginVertical: 0,
        fontWeight: "bold",
        fontSize: 33,

      },
      balance: {
        textAlign: "center",
      },
      ctner:{
        height: 100,
      },
      search:{
        
    
    
        
      }
  });

export default IconFooter;