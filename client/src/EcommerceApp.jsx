import React from 'react'
import {AppRouter} from './router/AppRouter';
import AuthProvider from './providers/AuthProvider';
import { RegisteredUser } from './productos/routes/RegisteredUser';

export const EcommerceApp = () => {
  return (
    <AuthProvider>
     {/*<AppRouter/>*/}
    <RegisteredUser/>
    </AuthProvider>
  )
}

