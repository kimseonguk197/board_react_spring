import React from 'react';

const Home = () => {
  return (
    <div className="container">
      <div className="page-header">
        <h1>Board</h1>
      </div>
      <div className="pull-right" style={{ width: '100px', marginRight: '10px' }}>
        <a href="/posts" className="btn btn-primary btn-block">
          게시판
        </a>
      </div>
      <div className="pull-right" style={{ width: '100px' }}>
        <a href="/authorList" className="btn btn-primary btn-block">
          회원관리
        </a>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;