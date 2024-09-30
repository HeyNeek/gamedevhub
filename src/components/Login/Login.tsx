import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../stores/userStore";

function Login() {
  const navigate = useNavigate();
  const { setUser } = useUserStore();

  const userObj: User = {
    name: "NikoNikoNeek",
    bio: "Im a mexican programmer from Texas",
    picture: "nick.jpg",
  };
  //eventually this will fetch the user info via the inputted info
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
