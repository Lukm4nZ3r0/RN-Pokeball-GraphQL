import CheckData from './component/CheckData'
import PokemonDetail from './component/PokemonDetail'
import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppStack = createStackNavigator({ CheckData, PokemonDetail });

const AppContainer = createAppContainer(AppStack)

export default AppContainer