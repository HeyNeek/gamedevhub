import { useNavigate } from "react-router-dom";

interface ILoginProps {
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

function Login({ setUser }: ILoginProps) {
  const navigate = useNavigate();

  const userObj: User = {
    name: "NikoNikoNeek",
    bio: "Im a mexican programmer from Texas",
    picture: "nick.jpg",
  };

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setUser(userObj);

    navigate("/");
  }
  return (
    <div className="login-container">
      <form className="login-form">
        <input placeholder="Enter Username" />
        <input type="password" placeholder="Enter Password" />
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default Login;
