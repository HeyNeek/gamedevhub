import { useUserStore } from "../../stores/userStore";

function Profile() {
  const { user } = useUserStore();

  return (
    <>
      <h1>Profile Page</h1>
      <p>{user?.name}</p>
      <p>{user?.bio}</p>
      <p>{user?.picture}</p>
    </>
  );
}

export default Profile;
