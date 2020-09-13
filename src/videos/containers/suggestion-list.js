import React, { Component } from 'react';
import {
  FlatList,
  Text,
  StyleSheet,
  View
} from 'react-native';

import Diseno from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../components/separator-vertical';
import Suggestion from '../components/suggestion';

class SuggestionList extends Component {
  renderEmpty = () => <Empty text="No hay sugerencias"/>
  itemSeparator = () => <Separator  />
  renderItem = ({item}) => {
    return(
      <Suggestion {...item}/>
    )
  }
  render() {
    const list = [
      {
        title: 'Avengers',
        key: '1'
      },
      {
        title: 'Matrix',
        key: '2'
      }
    ]
    return(
      <View><Text>Recomendado para ti</Text>
        <FlatList
            data={list}

            ListEmptyComponent={this.renderEmpty}
            ItemSeparatorComponent={this.itemSeparator}
            renderItem={this.renderItem}
        />
        </View>





    )
  }
}




export default SuggestionList;
