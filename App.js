/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  Text,
} from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import API from './utils/api';

type Props = {};
export default class App extends Component<Props> {
  async componentDidMount(){
    const movies = await API.getSuggestion(10);
    console.log(movies);

  }
  render() {
    return (
        <Home>
        <Header/>
        <Text>header</Text>
        <Text>buscador</Text>
        <Text>categorias</Text>
        <SuggestionList/>
        </Home>
      );
  }
}
