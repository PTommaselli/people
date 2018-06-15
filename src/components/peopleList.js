import React from 'react';
import { FlatList , StyleSheet ,Text, View } from 'react-native';

import PeopleListItem from './PeopleListItem';

const PeopleList = props => { 
    const { peoples, onPressItem } = props;

    return(

        <FlatList 
            style={ styles.container }
            data={ peoples }
            renderItem={ ({ item })=> (
                    <PeopleListItem  
                        people={ item } 
                        navigateToDetail={ onPressItem }
                    />
                ) }
                keyExtractor={ item => item.name.first } 
                />

    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#f7f7f7'
    },
})

export default PeopleList;