import { StackNavigator } from 'react-navigation';

import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';
import { capitalizeFirstLetter } from './src/util'
export default StackNavigator({
    'Main': {
        screen: PeoplePage
    },
    'PeopleDetail': {
        screen: PeopleDetailPage,
        navigationOptions:({ navigation }) => {
            const peopleName = capitalizeFirstLetter(navigation.state.params.people.name.first);
        
            return({
                title: peopleName,
                headerTitleStyle: {
                    color: 'white',
                    fontSize: 25
                }
           }); 
        }
    }
}, {
   navigationOptions: {
       title: "Pessoas",
       headerTintColor: 'white',
       headerStyle: {
            backgroundColor: '#e24d4d',
       },
       headerTitleStyle: {
           color: 'white',
           fontSize: 25,
           alignSelf: 'center',
       }
   } 
});
