import React ,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import{Card,Header,Icon} from 'react-native-elements';
import firebase from 'firebase';
import { RFValue } from "react-native-responsive-fontsize";
import db from '../config.js';

export default class ReceiverDetailsScreen extends Component{
  constructor(props){
    super(props);
    this.state={
      userId          : firebase.auth().currentUser.email,
      userName          :'',
      receiverId      : this.props.navigation.getParam('details')["username"],
      exchangeId       : this.props.navigation.getParam('details')["exchangeId"],
      itemName        : this.props.navigation.getParam('details')["item_name"],
      description  : this.props.navigation.getParam('details')["description"],
      receiverName    : '',
      receiverContact : '',
      receiverAddress : '',
      receiverRequestDocId : ''
    }
  }

  getUserDetails=(userId)=>{
      db.collection("users").where('email_id','==', userId).get()
      .then((snapshot)=>{
        snapshot.forEach((doc) => {
          console.log(doc.data().first_name);
          this.setState({
            userName  :doc.data().first_name + " " + doc.data().last_name
          })
        })
      })
    }
}