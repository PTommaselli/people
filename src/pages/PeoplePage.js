import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

//import Header from '../components/Header';
import PeopleList from '../components/peopleList';




export default class PeoplePage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      peoples: [],
      loading: false,
      error: false
    };
  }

  componentDidMount(){
    this.setState({loading: true});
        axios
        .get('https://randomuser.me/api/?nat=br&results=25')
        .then(response => {
          const { results } = response.data;
          
          this.setState({
            peoples: results,
            loading: false
          });
      }).catch(error => {
        this.setState({ error: true, loading: false })
      }) 
  }

  renderLoading(){
    if( this.state.loading){
      return  <ActivityIndicator size="large" color="#e24d4d" />
    } if(this.state.error){
      return <Text style={ styles.erro }>Ops... Algo deu errado =(</Text>
    }
    return (
       <PeopleList 
        peoples={ this.state.peoples }
        onPressItem={(pageParams) => {
          this.props.navigation.navigate('PeopleDetail', pageParams);
      }} />
    )
  }

  renderList(){ 
    const textElements = this.state.peoples.map(people => {
      const { first } = people.name;
      return <Text key={ first }>{ first }</Text>;
    });

    return textElements;
  }
  
  render() {
      //this.props.navigation.navigate('PeopleDetail');
    return (
      
      <View style={ styles.container }>
        { this.renderLoading() }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center'
  },
  erro:{
  color: '#8e8e8e',
    alignSelf: 'center'
  }
})