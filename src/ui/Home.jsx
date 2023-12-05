import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import { CustomButton } from './CustomButton';
function Home() {
  const userName = useSelector((state) => state.user.userName);
  console.log(userName, 'userName');
    return (
      <div className="mt-8 text-center">
        <h1 className="mb-8 p-4  text-xl font-semibold md:text-4xl">
          <span>The best pizza</span>
          <br />
          <span className="text-yellow-400">
            Straight out of the oven, straight to you.
          </span>
        </h1>
        {userName ? (
          <div>
            <CustomButton to="/menu">Continue Ordering {userName}</CustomButton>
          </div>
        ) : (
          <CreateUser />
        )}
      </div>
    );
}

export default Home;
