import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler'
import { Navigation } from './src/navigation/Navigation'
import { FadeScreen } from './src/screens/FadeScreen'
import { GradientProvider } from './src/context/GradientContext'


export const App = () => {
    return (
        <NavigationContainer>
            <AppState>
                <Navigation />
                {/* <FadeScreen/> */}
            </AppState>
        </NavigationContainer>
    )
}


const AppState = ({ children }) => {
    return (
        <GradientProvider>
            {children}
        </GradientProvider>
    )
}