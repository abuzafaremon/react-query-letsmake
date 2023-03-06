import axios from "axios";
import { useEffect, useState } from "react";

const AxiosPractice = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('')
  const [postData, setPostData] = useState({});
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        signal: AbortSignal.timeout(5000)
      });
      setPosts(res?.data)
    } catch (error) {
      setError(error?.message)
    }
    setLoading(false);
  }
  useEffect(() => {
    setLoading(true);
    fetchData();
    setLoading(false);
  }, []);

  const writePost = (e) => {
    setLoading(true);
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      title,
      body,
    })
      .then(response => {
        setPostData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    setLoading(false)
  }

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <p>{error}</p>
  }
  return <div>
    <h2>Users : {posts.length}</h2>
    <form onSubmit={writePost}>
      <input type="text" name="title" id="title" placeholder="title" />
      <input type="text" name="body" id="body" placeholder="body" />
      <button type="submit">{loading ? "Loading..." : "Write Post"}</button>
    </form>
    {
      postData.title && <div style={{ border: "1px solid", padding: "5px", margin: '5px' }}>
        <h3>{postData.title}</h3>
        <h3>{postData.body}</h3>
      </div>
    }
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
      {
        posts.map(post => <div key={post.id} style={{ border: "1px solid", width: "fit-content", padding: "5px", margin: '5px' }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>)
      }
      <div>
        <h3>{postData.name}</h3>
        <h3>{postData.email}</h3>
      </div>
    </div>
  </div>
}
export default AxiosPractice;