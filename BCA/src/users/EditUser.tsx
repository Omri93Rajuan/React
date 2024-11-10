import React, { useState, useEffect } from "react";

interface User {
  id?: string;
  username: string;
  email: string;
  age: number;
  img: string;
}

interface Props {
  user: User;
  editUser: (user: User) => void;
}

const EditUserForm: React.FC<Props> = ({ user, editUser }) => {
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [age, setAge] = useState(user.age);

  useEffect(() => {
    setUsername(user.username);
    setEmail(user.email);
    setAge(user.age);
  }, [user]);

  const handleSubmit = () => {
    // יצירת אובייקט חדש עם הנתונים המעודכנים
    const updatedUser = {
      ...user,
      username,
      email,
      age,
    };
    editUser(updatedUser); // שולחים את המשתמש המעודכן לפונקציה editUser
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(parseInt(e.target.value))}
      />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

export default EditUserForm;
