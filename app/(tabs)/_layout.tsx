import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#7B2CBF',
          borderTopStartRadius: 24,
          borderTopEndRadius: 24,
          height: 80,
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'building' : 'building' } color={'white'} />
          ),
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'calendar-alt' : 'calendar-alt'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
