import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Message from './pages/Message'

const Routes = createAppContainer(
  createSwitchNavigator({
    Message
  })
)

export default Routes