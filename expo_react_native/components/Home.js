import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
  
    const handleAuthorList = () => {
      navigation.navigate('AuthorList');
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.pageHeader}>
          <Text style={styles.headerText}>Board</Text>
        </View>
        <View style={styles.btnWrapper}>
          <View style={[styles.btnContainer, { marginRight: 10 }]}>
            <Text style={styles.btnText}>게시판</Text>
          </View>
          <TouchableOpacity style={styles.btnContainer} onPress={handleAuthorList}>
            <Text style={styles.btnText}>회원관리</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    paddingTop: 0,
  },
  pageHeader: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  btnContainer: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    padding: 10,
    width: '48%',
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;