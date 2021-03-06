import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import SearchStack from './SearchStack'
import TopRestaurantsStack from './TopRestaurantsStack'
import RestaurantsStack from './RestaurantsStack'
import FavoritesStack from './FavoritesStack'
import AccountStack from './AccountStack'


const Tab = createBottomTabNavigator()


export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                    name="restaurants"
                    component={RestaurantsStack}
                    options={{ title: "Restaurants" }}
                />
                <Tab.Screen 
                    name="favorites"
                    component={FavoritesStack}
                    options={{ title: "Favorites" }}
                />
                <Tab.Screen 
                    name="top-restaurants"
                    component={TopRestaurantsStack}
                    options={{ title: "Top 5" }}
                />
                <Tab.Screen 
                    name="search"
                    component={SearchStack}
                    options={{ title: "Search" }}
                />
                <Tab.Screen 
                    name="account"
                    component={AccountStack}
                    options={{ title: "Account" }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
