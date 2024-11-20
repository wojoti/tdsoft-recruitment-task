import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MainStack} from './src/stacks/Main';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from './src/api/queryClient';
import {Provider} from 'jotai';
import {myStore} from './src/store/store';
import SafeAreaComponent from './src/components/SafeAreaComponent/SafeAreaComponent';

function App(): React.JSX.Element {
  return (
    <Provider store={myStore}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <SafeAreaComponent>
            <NavigationContainer>
              <MainStack />
            </NavigationContainer>
          </SafeAreaComponent>
        </SafeAreaProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
