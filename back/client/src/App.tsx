import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from './components/layout/Layout';
import Admin from './pages/Admin';
import Main from './pages/Main';
import Login from "./pages/Login";
import Register from "./pages/Register";
import { checkActualUser } from './store/user';
import { connect, ConnectedProps} from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppDispatch } from './store/store';

import { QueryClient, QueryClientProvider, useQuery } from 'react-query'


import './App.css';

const queryClient = new QueryClient()


const App: React.FC<HeaderProps> = ({checkActualUser}) => {

  useEffect(() => {
    checkActualUser("/api/user/check")
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="admin/*" element={<Admin/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
        </Route>
      </Routes>
    </QueryClientProvider>

  );
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  checkActualUser: bindActionCreators(checkActualUser, dispatch)
})

const connector = connect(null, mapDispatchToProps);

type HeaderProps = ConnectedProps<typeof connector>

export default connector(App);
