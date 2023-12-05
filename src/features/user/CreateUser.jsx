import { useState } from 'react';
import { CustomButton } from '../../ui/CustomButton';
import { updateName } from './userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createUserHandler = (e) => {
    e.preventDefault();
    dispatch(updateName(username));
    setUsername('');
    navigate('/menu');
  };

  return (
    <form>
      <p className="mb-4">👋 Welcome! Please start by telling us your name:</p>
      <input
        type="text"
        placeholder="Your full name"
        value={username}
        className="input mb-8 w-72 "
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== '' && (
        <div>
          <CustomButton onClick={(e) => createUserHandler(e)}>
            Start ordering
          </CustomButton>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
