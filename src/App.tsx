import React from 'react';
import { RepoProvider } from './context/repos-context';
import { RepoList, RepoDetail, NotFound } from './components/'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <RepoProvider>
      <Routes>
        <Route path='/' element={<RepoList />}/>
        <Route path='repo/:id' element={<RepoDetail/>} />
        <Route path="*" element={<NotFound/>} />          
      </Routes>      
    </RepoProvider>
  );
}

export default App;
