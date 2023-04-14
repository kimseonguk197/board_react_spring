import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import AuthorService from '../services/AuthorService';
import AuthorRegister from './AuthorRegister';
import AuthorDetail from './AuthorDetail';

const AuthorList = () => {
  const [authorsData, setAuthors] = useState([]);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await AuthorService.getAuthors();
        setAuthors(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAuthors();
  }, []);

  const handleRegisterPopupOpen = () => {
    setIsRegisterPopupOpen(true);
  };

  const handleRegisterPopupClose = () => {
    setIsRegisterPopupOpen(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.pageHeader}>
        <Text style={styles.headerText}>회원 목록</Text>
      </View>
      <View style={styles.btnWrapper}>
        <TouchableOpacity style={styles.btnContainer}>
          <Text style={styles.btnText}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnContainer} onPress={handleRegisterPopupOpen}>
          <Text style={styles.btnText}>회원가입</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.authorList}>
        {authorsData.map((author) => (
          <TouchableOpacity key={author.id} style={styles.authorItem}>
            <View style={styles.authorInfo}>
              <Text style={styles.authorName}>{author.name}</Text>
              <Text style={styles.authorEmail}>{author.email}</Text>
            </View>
            <View style={styles.authorDetail}>
              <Text style={styles.authorDetailText}>상세보기</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <Modal visible={isRegisterPopupOpen} animationType="slide">
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.modalCloseBtn} onPress={handleRegisterPopupClose}>
            <Text style={styles.modalCloseBtnText}>닫기</Text>
          </TouchableOpacity>
          <AuthorRegister handleClose={handleRegisterPopupClose} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    pageHeader: {
      height: 70,
      backgroundColor: '#f5f5f5',
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    btnWrapper: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginTop: 20,
      marginRight: 20,
    },
    btnContainer: {
      backgroundColor: '#007AFF',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 5,
      marginLeft: 10,
    },
    btnText: {
      fontSize: 16,
      color: '#fff',
    },
    authorList: {
      marginTop: 20,
      paddingHorizontal: 20,
    },
    authorItem: {
      flexDirection: 'row',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      alignItems: 'center',
    },
    authorInfo: {
      flex: 1,
    },
    authorName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    authorEmail: {
      fontSize: 16,
      color: '#888',
    },
    authorDetail: {
      paddingVertical: 5,
      paddingHorizontal: 10,
      backgroundColor: '#007AFF',
      borderRadius: 5,
    },
    authorDetailText: {
      color: '#fff',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    modalCloseBtn: {
      alignSelf: 'flex-end',
      marginRight: 20,
      marginTop: 20,
      padding: 10,
    },
    modalCloseBtnText: {
      fontSize: 18,
      color: '#007AFF',
    },
  });
  
export default AuthorList;