import { useContext } from 'react';
import UserContext from '../context/UserContext';

function ChangeUser() {
  const { userName, changeUserName } = useContext(UserContext);
  return (
    <button
      onClick={() => changeUserName(userName === 'DarLa' ? 'Alice' : 'DarLa')}
    >
      Click
    </button>
  );
}

export default ChangeUser;
