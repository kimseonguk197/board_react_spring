import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AuthorService from '../services/AuthorService';

const AuthorDetail = () => {
  const { id } = useParams();
  const [author, setAuthor] = useState({});

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
    <div className="container">
      <div className="page-header">
        <h1>회원 상세 정보</h1>
      </div>

      <div className="pull-right" style={{ width: '100px' }}>
        <a href="/authorList" className="btn btn-primary btn-block">
          목록
        </a>
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
              <th className="col-md-4">사용자</th>
              <th className="col-md-4">가입일</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{author.id}</td>
              <td>{author.name}</td>
              <td>{author.email}</td>
              <td>{author.role}</td>
              <td>{author.createDate}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AuthorDetail;