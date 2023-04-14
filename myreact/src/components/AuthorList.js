import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthorService from '../services/AuthorService';
import AuthorRegister from './AuthorRegister';

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
    <div className="container">
      <div className="page-header">
        <h1>회원 목록</h1>
      </div>
      <div className="btn-group pull-right">
        <Link to="/login" className="btn btn-primary">
          로그인
        </Link>
        <button className="btn btn-primary" onClick={handleRegisterPopupOpen}>
          회원가입
        </button>
      </div>
      <br />
      <br />
      <br />

      <div id="mainHide">
        <table className="table table-hover">
          <thead>
            <tr>
              <th className="col-md-2">id</th>
              <th className="col-md-3">이름</th>
              <th className="col-md-4">email</th>
              <th className="col-md-4">상세보기</th>
            </tr>
          </thead>
          <tbody>
            {authorsData.map((author) => (
              <tr key={author.id}>
                <td>{author.id}</td>
                <td>{author.name}</td>
                <td>{author.email}</td>
                <td>
                  <a href={`/authorDetail/${author.id}`}>상세보기</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>  

      {isRegisterPopupOpen && (
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-content">
            <span className="close" onClick={handleRegisterPopupClose}>&times;</span>
            <AuthorRegister handleClose={handleRegisterPopupClose} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthorList;
