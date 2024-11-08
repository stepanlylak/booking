import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App/App.js';
import CurrentUserProvider from './CurrentUserProvider/CurrentUserProvider.js';

export const queryClient = new QueryClient();

export default function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <CurrentUserProvider>
        <App />
      </CurrentUserProvider>
    </QueryClientProvider>
  );
}
