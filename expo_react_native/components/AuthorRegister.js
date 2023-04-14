import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AuthorService from '../services/AuthorService';

function AuthorRegister({ handleClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const author = { name, email, password, role };
    AuthorService.createAuthor(author)
      .then((response) => {
        console.log(response.data);
        handleClose();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.popup}>
      <View style={styles.popupInner}>
        <View style={styles.container}>
          <View style={styles.pageHeader}>
            <Text style={styles.title}>회원 가입</Text>
          </View>

          <View onSubmit={handleSubmit}>
            <View style={styles.formGroup}>
              <Text style={styles.label}>이름</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={(text) => setName(text)}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>이메일</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>비밀번호</Text>
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>사용자</Text>
              <TouchableOpacity
                style={styles.select}
                onPress={() => {
                  // Do nothing for now
                }}
              >
                <Text style={styles.selectText}>{role || '== 선택 =='}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.formGroup}>
              <TouchableOpacity
                style={[styles.button, styles.submitButton]}
                onPress={handleSubmit}
              >
                <Text style={styles.buttonText}>등록</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.closeButton]}
                onPress={handleClose}
              >
                <Text style={styles.buttonText}>닫기</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    popup: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      zIndex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    popupInner: {
      position: "relative",
      backgroundColor: "white",
      width: "80%",
      padding: 20,
    },
    container: {
      maxWidth: 500,
      marginHorizontal: "auto",
    },
    pageHeader: {
      marginBottom: 20,
    },
    formGroup: {
      marginBottom: 20,
    },
    label: {
      fontSize: 16,
      marginBottom: 10,
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 3,
      padding: 10,
      fontSize: 16,
      width: "100%",
    },
    select: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 3,
      padding: 10,
      fontSize: 16,
      width: "100%",
    },
    btnGroup: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    btn: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: "#ccc",
      fontSize: 16,
      fontWeight: "bold",
    },
    btnPrimary: {
      backgroundColor: "#007bff",
      color: "white",
      marginLeft: 10,
    },
    btnDanger: {
      backgroundColor: "#dc3545",
      color: "white",
      marginRight: 10,
    },
  });

export default AuthorRegister;