import { router } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { useApp } from './_layout';

export default function AddBook() {
  const [form, setForm] = useState({ title: '', bookName: '', author: '' });
  const { books, setBooks } = useApp();

  const handleAdd = () => {
    const newBook = { ...form, id: Date.now().toString() };
    setBooks([...books, newBook]);
    router.back();
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Book Title" style={styles.input} onChangeText={(t) => setForm({...form, title: t})} />
      <TextInput placeholder="Book Name" style={styles.input} onChangeText={(t) => setForm({...form, bookName: t})} />
      <TextInput placeholder="Author" style={styles.input} onChangeText={(t) => setForm({...form, author: t})} />
      <Button title="Save Book" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderBottomWidth: 1, marginBottom: 15, padding: 10 }
});
