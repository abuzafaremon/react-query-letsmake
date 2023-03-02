import { Link } from 'react-router-dom';
import { useUsers } from '../../hooks/useUsers';
import './User.css'

const Users = () => {
  const { data, isLoading, error, isError } = useUsers();

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <>
      <h2>All user loaded here from jsonplaceholder</h2>
      <br />
      <div className="users">
        {
          data?.data?.map(({ id, username }) => <div key={id} className="user">
            <Link to={`/users/${id}`}>UserName: <span>{username}</span></Link>
          </div>)
        }
      </div>
    </>
  );
};

export default Users;