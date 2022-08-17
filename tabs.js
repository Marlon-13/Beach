
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Mapscreen from './Screens/Home'
const Tab = createBottomTabNavigator
//not in use
const Tabs = ( ) => {
    return(
        <Tab.Navigator>
            <Tab.Screen name = "Home" component={Mapscreen} />
        </Tab.Navigator>
            
        
    );
}

export default Tabs