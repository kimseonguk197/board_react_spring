import React, { useState } from "react";
import AuthorService from '../services/AuthorService';

function AuthorRegister({ handleClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

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
    <div className="popup">
      <div className="popup-inner">
        <div className="container">
          <div className="page-header">
            <h1>회원 가입</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">이름</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">이메일</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">비밀번호</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="role">사용자</label>
              <select
                className="form-control"
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">== 선택 ==</option>
                <option value="admin">admin</option>
                <option value="user">user</option>
              </select>
            </div>

            <div className="form-group d-flex justify-content-between">
              <button type="submit" className="btn btn-primary">
                등록
              </button>
              <button className="btn btn-danger" onClick={handleClose}>
                닫기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AuthorRegister;
