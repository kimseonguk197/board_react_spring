import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import AuthorService from '../services/AuthorService';

const AuthorDetail = () => {
const [author, setAuthor] = useState({});
const route = useRoute();
const { id } = route.params;

useEffect(() => {
const fetchAuthor = async () => {
try {
const response = await AuthorService.getAuthorById(id);
setAuthor(response.data);
} catch (error) {
console.error(error);
}
};
fetchAuthor();
}, [id]);

return (
<View style={styles.container}>
<View style={styles.pageHeader}>
<Text style={styles.headerText}>회원 상세 정보</Text>
</View>


<View style={styles.pullRight}>
<TouchableOpacity style={styles.btnContainer}>
  <Text style={styles.btnText}>목록</Text>
</TouchableOpacity>
</View>
<View style={styles.divider} />

<View style={styles.mainHide}>
<View style={styles.table}>
  <View style={styles.row}>
    <Text style={styles.col}>id</Text>
    <Text style={styles.col}>{author.id}</Text>
  </View>
  <View style={styles.row}>
    <Text style={styles.col}>이름</Text>
    <Text style={styles.col}>{author.name}</Text>
  </View>
  <View style={styles.row}>
    <Text style={styles.col}>email</Text>
    <Text style={styles.col}>{author.email}</Text>
  </View>
  <View style={styles.row}>
    <Text style={styles.col}>사용자</Text>
    <Text style={styles.col}>{author.role}</Text>
  </View>
  <View style={styles.row}>
    <Text style={styles.col}>가입일</Text>
    <Text style={styles.col}>{author.createDate}</Text>
  </View>
</View>
</View>
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
pullRight: {
width: '100px',
position: 'absolute',
top: 20,
right: 20,
},
btnContainer: {
backgroundColor: '#007AFF',
paddingHorizontal: 10,
paddingVertical: 5,
borderRadius: 5,
},
btnText: {
fontSize: 16,
color: '#fff',
},
divider: {
height: 1,
backgroundColor: '#ddd',
},
mainHide: {
marginTop: 30,
marginHorizontal: 20,
},
table: {
flexDirection: 'column',
marginTop: 10,
},
row: {
flexDirection: 'row',
borderBottomWidth: 1,
borderBottomColor: '#ddd',
paddingVertical: 10,
},
col: {
flex: 1,
fontWeight: 'bold',
marginVertical: 5,
marginHorizontal: 10,
},
});

export default AuthorDetail;