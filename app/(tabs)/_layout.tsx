import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '../../components/navigation/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#7B2CBF',
          borderTopStartRadius: 16,
          borderTopEndRadius: 16,
          height: 80,
        },
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#0000003D',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'building' : 'building' } color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'calendar-alt' : 'calendar-alt'} color={color} />
          ),
        }}
      />
       <Tabs.Screen
        name="tablist"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'th-list' : 'th-list'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="comments"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'comments' : 'comments'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'user' : 'user'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}