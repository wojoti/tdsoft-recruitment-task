import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {TabNavigationStack} from './src/stacks/TabNavigation';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from './src/api/queryClient';
import {Provider} from 'jotai';
import {myStore} from './src/store/store';

function App(): React.JSX.Element {
  return (
    <Provider store={myStore}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <TabNavigationStack />
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
