import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native';

function Suggestion(props) {
  return (
    <View style={styles.container}>
          <View style={styles.left}>
              <Image
                style={styles.cover}
                source={require('../../../assets/logo.png')}
              />
              <View style={styles.genre}>
                  <Text styles={styles.genreText}>Acción</Text>
              </View>

          </View>
          <View style={styles.right}>
              <Text style={styles.title}>Avengers</Text>
              <Text style={styles.year}>2007</Text>
              <Text style={styles.rating}>5 estrellas</Text>
          </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  genreText: {
    color: 'white',
    fontSize: 30,
  },
  genre: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: '#4F09BB',
    paddingVertical: 5,
    paddingHorizontal: 7
  },

  left: {},
  right: {
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  cover: {
    height: 150,
    width: 100,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 18,
    color:'#2900AA'
  },
  year: {
    backgroundColor: '#4F09BB',
    paddingVertical: 4,
    paddingHorizontal: 6,

    color: 'white',
    fontSize: 11,
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: 'flex-start'
  },
  rating: {
    color: '#7E7F80',
    fontSize: 14,
    fontWeight: 'bold',
  }

})


export default Suggestion;
