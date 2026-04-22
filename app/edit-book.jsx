import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { useApp } from './_layout';

export default function EditBook() {
  const { books, setBooks } = useApp();
  // Get the book data passed through the URL params
  const params = useLocalSearchParams();

  // Initialize form with existing book data
  const [form, setForm] = useState({
    title: params.title || '',
    bookName: params.bookName || '',
    author: params.author || ''
  });

  const handleUpdate = () => {
    // Update the book in the global array
    const updatedBooks = books.map((b) => 
      b.id === params.id ? { ...b, ...form } : b
    );
    
    setBooks(updatedBooks);
    router.back(); // Return to the library list
  };

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder="Book Title" 
        style={styles.input} 
        value={form.title}
        onChangeText={(t) => setForm({...form, title: t})} 
      />
      <TextInput 
        placeholder="Book Name" 
        style={styles.input} 
        value={form.bookName}
        onChangeText={(t) => setForm({...form, bookName: t})} 
      />
      <TextInput 
        placeholder="Author" 
        style={styles.input} 
        value={form.author}
        onChangeText={(t) => setForm({...form, author: t})} 
      />
      <Button title="Update Book" color="#6200ee" onPress={handleUpdate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderBottomWidth: 1, marginBottom: 15, padding: 10, fontSize: 16 }
});
