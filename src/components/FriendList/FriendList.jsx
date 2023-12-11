const { FriendListItem } = require('./FriendListItem');

const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(item => (
        <FriendListItem
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      ))}
    </ul>
  );
};

export { FriendList };
