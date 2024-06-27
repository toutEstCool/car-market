import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { memo } from 'react'
import RNBootSplash from 'react-native-bootsplash'

import { WelcomeScreen } from '@/screens'
import { NavigationStackLists } from '@/shared/config/navigation'
import { AppNavigation } from '@/shared/config/navigation/model/types/navigation'

export const Stack = createNativeStackNavigator<NavigationStackLists>()

const Navigation = () => {
	return (
		<NavigationContainer onReady={() => RNBootSplash.hide({ fade: true })}>
			<Stack.Navigator
				screenOptions={{
					headerTintColor: 'red',
					title: '',
					headerBackTitleVisible: false
				}}
			>
				<Stack.Screen
					name={AppNavigation.WELCOME}
					options={{
						headerTransparent: true
					}}
					component={WelcomeScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default memo(Navigation)
