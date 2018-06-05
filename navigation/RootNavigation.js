import { StackNavigator } from "react-navigation";
import TakePhotoScreen from "../screens/TakePhotoScreen";
import Tabnavigation from "./TabNavigation";


const RootNavigation = StackNavigator(
    {
        Tabs: {
            screen: Tabnavigation,
            navigationOptions: {
                header: null
            }
        },
        TakePhoto: {
            screen: Tabnavigation,
            navigationOptions: {
                header: null
            }
        }
    },
    {
        mode: "model"
    }
)

export default RootNavigation;