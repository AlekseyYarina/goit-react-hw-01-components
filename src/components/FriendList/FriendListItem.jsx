const FriendListItem = ({ avatar, name, isOnline = false }) => {
  return (
    <li className="item">
      {isOnline ? (
        <span className="status isOnline">on</span>
      ) : (
        <span className="status isOffline">off</span>
      )}
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export { FriendListItem };
