import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {MainStack} from './src/stacks/Main';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from './src/api/queryClient';
import {Provider} from 'jotai';
import {myStore} from './src/store/store';

function App(): React.JSX.Element {
  return (
    <Provider store={myStore}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
