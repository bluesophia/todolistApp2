import { StackNavigator } from "react-navigation";
import Tabnavigation from "./TabNavigation";

const HomeRoute = StackNavigator(
    {
        Tabs: {
            screen: Tabnavigation,
            navigationOptions: {
                header: null
            }
        },
    }
)

export default HomeRoute;