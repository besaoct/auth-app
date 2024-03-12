import React from 'react'
import Login from './loginComponent';
import LoggedIn from '@/app/(backend)/helpers/loggedIn';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login Page',
}


export  default async function page() {
  await LoggedIn()
  return (
   <>
   <Login/>
   </>
  )
}
