import Button from '@/components/Button';
import getCurrentUser from './(backend)/helpers/getCurrentUser';
import LogoutButton from '@/components/logoutButton';
import ClientOnly from '@/components/ClientOnly';
import getAdmin from './(backend)/helpers/getAdmin';

const Home = async () => {
    const currentUser = await getCurrentUser();
     const theAdmin = await getAdmin()
  return (
    <ClientOnly>
          <div className="min-h-screen gap-4 flex flex-col justify-center items-center p-4">
  
        <p className="font-extrabold text-xl">Authentication</p>
  
      <div className="flex flex-col gap-2 mt-2 bg-gray-100 p-4 rounded border border-gray-200 w-full max-w-[20rem]">
      
        {currentUser ? (
          <>
           {
             (theAdmin?.email===currentUser.email) && 
            <>
             <Button link='/admin' text={'Admin Page'}/>

            </>

           }
            <Button link="/profile" text="Protected Profile" />
            <LogoutButton />
          </>
        ) : (
          <>
      
            <Button link="/auth/login" text="Login" />
            <Button link="/auth/signup" text="SignUp" />
          </>
        )}
        </div>
      <footer className='p-2 text-center text-neutral-300  '> {``}</footer>
      </div>

</ClientOnly>
  );
};


export default Home;