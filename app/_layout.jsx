import { Stack, router } from 'expo-router';
import { createContext, useContext, useEffect, useState } from 'react';
import { Button, Platform } from 'react-native'; // Import Button

const AppContext = createContext();

export default function Layout() {
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [books, setBooks] = useState([
    { id: '1', title: 'The Hobbit', bookName: 'Hobbit vol 1', author: 'J.R.R. Tolkien' }
  ]);

  // Logout Function
  const logout = () => {
    setUser(null); // This triggers the useEffect below to redirect to login
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 10);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isReady && !user) {
      router.replace('/login');
    }
  }, [isReady, user]);

  return (
    <AppContext.Provider value={{ user, setUser, books, setBooks, logout }}>
      <Stack screenOptions={{ 
        headerStyle: { backgroundColor: '#6200ee' }, 
        headerTintColor: '#fff' 
      }}>
        <Stack.Screen 
          name="index" 
          options={{ 
            title: 'My Library',
            // Add the Logout button to the top right of the header
            headerRight: () => (
              <Button 
                onPress={logout} 
                title="Logout" 
                color={Platform.OS === 'ios' ? '#fff' : '#f44336'} 
              />
            )
          }} 
        />
        <Stack.Screen name="login" options={{ title: 'Login', headerShown: false }} />
        <Stack.Screen name="add-book" options={{ title: 'Add New Book' }} />
        <Stack.Screen name="edit-book" options={{ title: 'Edit Book' }} />
      </Stack>
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);


