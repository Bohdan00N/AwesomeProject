import { createStackNavigator } from "@react-navigation/stack";
import RegPostsScreen from '../NestedScreens/RegPostsScreen';
import CommentsScreen from '../NestedScreens/CommentsScreen';
import MapScreen from '../NestedScreens/MapScreen';


export default function PostsScreen() {
    const NestedStack = createStackNavigator();

    return (
        <NestedStack.Navigator initialRouteName="Posts">   
            <NestedStack.Screen name="Posts" component={RegPostsScreen} options={{headerShown: false, title: "Публикации"}}/>
            <NestedStack.Screen name="Map" component={MapScreen} options={{title: "Карта"}} />
            <NestedStack.Screen name="Comments" component={CommentsScreen} options={{title: "Комментарии"}} />
       </NestedStack.Navigator> 
    );
}
