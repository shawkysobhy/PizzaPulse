import CreateUser from '../features/user/CreateUser';
function Home() {
  return (
    <div className="mt-8 text-center">
      <h1 className="mb-8 p-4  text-xl font-semibold md:text-4xl">
        <span>The best pizza</span>
        <br />
        <span className="text-yellow-400">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
