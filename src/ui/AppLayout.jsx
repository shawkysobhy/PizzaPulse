import Header from './Header';
import CartOverView from '../features/cart/CartOverview';
import { Outlet } from 'react-router-dom';
import { useNavigation } from 'react-router-dom';
import { Loader } from './Loader';
function AppLayout() {
  const navigation = useNavigation();
  const loadingState = navigation.state === 'loading';
  return (
    <>
      {loadingState && <Loader />}
      <div className="grid h-screen grid-rows-[auto_1fr_auto]">
        <Header />
        <div className="overflow-scroll">
          <main className="mx-auto max-w-3xl">
            <Outlet />
          </main>
        </div>
        <CartOverView />
      </div>
    </>
  );
}

export default AppLayout;
