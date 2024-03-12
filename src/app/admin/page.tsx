import React from 'react'
import getAdmin from '../(backend)/helpers/getAdmin'
import { redirect } from 'next/navigation'
import { getAllUsers } from '../(backend)/helpers/getUserNameByCreatedById'
import Button from '@/components/Button'
import getCurrentUser from '../(backend)/helpers/getCurrentUser'

const AdminPage = async() => {
const cu = await getCurrentUser()
const theAdmin = await getAdmin()
const allUsers = await getAllUsers()

  if(!theAdmin || !cu){
    redirect('/')
  }

  if (theAdmin.email!==cu.email) {
    redirect('/')
  }

  return (
  
      
      <>
    <div className='mt-8 m-auto flex flex-col justify-center  items-center w-full gap-2'>
      {
   allUsers?.map((user) =>(
<div key={user.email} className='p-2 flex gap-2 justify-center w-full items-start border-green-200 font-bold'>
   <div className='flex '>
   Name: {user.name}
   </div>
   <div>
   with Email: {user.email}
   </div>

</div>


   )
   
   )
      }
    <Button link="/"
            text="Back to home" />
    </div>
           

    
    </>
  )
}

export default AdminPage