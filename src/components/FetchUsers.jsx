import { useEffect, useState } from "react";

function FetchUsers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  return (
    <div>
      <h2>User List</h2>

      {data.map((item) => (
        <div key={item.id}>
          <p>Username: {item.username}</p>
          <p>Email: {item.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}


export default FetchUsers;