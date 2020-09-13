import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

function SuggestionListLayout(props) {
  return(
    <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        {props.childen}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    paddingVertical: 10,
    flex: 1,
  },
  title: {
    color: '#3800AA',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    marginLeft: 8,
  }
})


export default SuggestionListLayout ;
