import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import AuthorList from './components/AuthorList';
import AuthorDetail from './components/AuthorDetail';
import AuthorRegister from './components/AuthorRegister';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authorList" element={<AuthorList />} />
        <Route path="/authorRegister" element={<AuthorRegister />} />
        <Route path="/authorDetail/:id" element={<AuthorDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;