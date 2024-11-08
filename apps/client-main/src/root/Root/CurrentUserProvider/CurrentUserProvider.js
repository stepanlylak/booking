import { useQuery } from '@tanstack/react-query';
import { createContext, useContext, useState } from 'react';

import UsersApi from '../../../api/UsersApi.js';
import CurrentUserSelect from './CurrentUserSelect.js';
import CurrentUserSelectWrapper from './CurrentUserSelectWrapper.js';

export const CurrentUserContext = createContext(null);

export default function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const {
    isLoading,
    error,
    data: users
  } = useQuery({
    queryKey: ['UsersApi.getAll'],
    queryFn: UsersApi.getAll
  });

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <CurrentUserContext.Provider value={{ users, currentUser, setCurrentUser }}>
      {currentUser ? (
        children
      ) : (
        <CurrentUserSelectWrapper>
          <CurrentUserSelect />
        </CurrentUserSelectWrapper>
      )}
    </CurrentUserContext.Provider>
  );
}

export function useCurrentUser() {
  const context = useContext(CurrentUserContext);
  if (context === undefined) {
    throw new Error('useCurrentUser must be used within a CurrentUserContext.Provider');
  }
  return context;
}
