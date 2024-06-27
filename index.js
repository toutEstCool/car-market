import { AppRegistry, LogBox } from 'react-native'

import App from '@/app/index'

LogBox.ignoreAllLogs(true)
LogBox.ignoreLogs([
	'Non-serializable values were found in the navigation state',
	'Sending',
	'new NativeEventEmitter'
])

AppRegistry.registerComponent('carMarket', () => App)
