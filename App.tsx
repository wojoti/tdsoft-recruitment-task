import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {TabNavigationStack} from './src/stacks/TabNavigation';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from './src/api/queryClient';

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <TabNavigationStack />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
