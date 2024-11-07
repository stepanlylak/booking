import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App/App.js';

const queryClient = new QueryClient();

export default function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}
