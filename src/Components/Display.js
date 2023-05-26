function Display({ userData }) {
  return (
    <div>
      <h1>{userData.name}</h1>
      {userData.location && <h3>Location: {userData.location}</h3>}
      <img src={userData.avatar_url} alt="profile" />
      <a href={userData.html_url} target="_blank">
        <h3>Profile Page</h3>
      </a>
    </div>
  );
}

export default Display;
