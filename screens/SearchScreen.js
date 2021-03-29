import React from 'react';
import { Text, View, FlatList } from 'react-native';

import db from '../config';

export default class Searchscreen extends React.Component {
  constructor(props){
    super(props)
    this.state={
      allTransactions:[],
      lastVisibleTransaction:null
        }

  }
  componenetDidMount=async()=>{
    const query=await db.collection("transactions").get()
    query.docs.map((doc)=>{
      this.setState({
        allTransactions:[...this.state.allTransactions,doc.data()]
      })
    })
  }
   fetchMoreTransactions=async()=>{
     const query = await db.collection("transactions").startAfter(this.state.lastVisibleTranscation).limit(10).get()
     query.docs.map((doc)=>{
      this.setState({
        allTransactions:[...this.state.allTransactions,doc.data()]
      })
    })
   }
    render() {
      
      return (
        <FlatList 
        data={this.state.allTransactions}
        renderItem={({item})=>(
          <View>
            <Text>{"book Id"}+item.bookId</Text>
            <Text>{"student Id"}+item.studentId</Text>
            <Text>{"transaction type"}+item.transactionType</Text>
            <Text>{"date"}+item.date.toDate()</Text>

          </View>
        )}
        keyExtractor={(item,index)=>index.toString()}
        onEndReached={this.fetchMoreTransactions}
        onEndReachedThreshold={0.7}    
        />
    
      );
    }
  }