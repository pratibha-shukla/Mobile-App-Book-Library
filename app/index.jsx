import { router } from 'expo-router';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { useApp } from './_layout';

export default function Library() {
  // Access global state from the layout provider
  // const { books, setBooks } = useApp() || { books: [] };
   const { books, setBooks, logout } =
    useApp() || { books: [], setBooks: () => {}, logout: () => {} };

  const deleteBook = (id) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.bookItem}>
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>
                {item.title} {item.bookName ? `(${item.bookName})` : ''}
              </Text>
              <Text style={styles.author}>Author: {item.author}</Text>
            </View>

            <View style={styles.actions}>
              {/* Navigate to Edit Screen and pass the book data as params */}
              <Button
                title="Edit"
                onPress={() =>
                  router.push({
                    pathname: '/edit-book',
                    params: { 
                      id: item.id, 
                      title: item.title, 
                      bookName: item.bookName, 
                      author: item.author 
                    },
                  })
                }
              />
              <Button
                title="Del"
                color="red"
                onPress={() => deleteBook(item.id)}
              />
            </View>
          </View>
        )}
      />

      <View style={styles.footer}>
        <Button
          title="Add New Book"
          color="#6200ee"
          onPress={() => router.push('/add-book')}
        />

          {/* 2. Added Logout Button here */}
        <View style={{ marginTop: 10 }}>
          <Button title="Logout" color="#757575" onPress={logout} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  bookItem: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  author: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
  },
  footer: {
    marginTop: 20,
    paddingBottom: 20,
  },
});
