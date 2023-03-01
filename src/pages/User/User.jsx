import { useParams } from "react-router-dom"
import { useUser } from "../../hooks/useUser";

const User = () => {
  const { userId } = useParams();
  const { data, isLoading, isError, error, } = useUser(userId);
  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>{error.message}</h2>
  }
  const { username, name, email, website } = data?.data;
  return (
    <div className="user">
      <h3>{username} - {name}</h3>
      <h4>{email}</h4>
      <h4>{website}</h4>
    </div>
  )
}
export default User