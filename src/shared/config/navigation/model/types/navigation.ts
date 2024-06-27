export enum AppNavigation {
	WELCOME = 'Welcome',
	WELCOME_INFO = 'WelcomeInfo'
}

interface NavigationSplashType {
	show: boolean
}

export type NavigationStackLists<F = any> = {
	[AppNavigation.WELCOME]: undefined
	[AppNavigation.WELCOME_INFO]: undefined
}

export type RootStackParamList = NavigationStackLists
