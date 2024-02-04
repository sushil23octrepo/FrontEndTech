import Friend from "./Friend";

export default function FriendList({ friends, onSelection }: any) {
  return (
    <ul>
      {friends.map((frnd: any) => (
        <Friend onSelection={onSelection} friend={frnd} />
      ))}
    </ul>
  );
}
