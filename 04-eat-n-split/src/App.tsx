import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import FriendList from "./components/FriendsList";
import Button from "./components/Button";
import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState<any[]>(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState<any>(null);
  const [showAddFriend, setShowAddFriend] = useState<boolean>(false);

  function handleSelection(friend: any) {
    setSelectedFriend((cur: any) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend: any) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSplitBill(value: any) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id == selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <div className="App">
      <div className="sidebar">
        <FriendList onSelection={handleSelection} friends={friends} />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onButtonClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
        {selectedFriend && (
          <FormSplitBill
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
          />
        )}
      </div>
    </div>
  );
}

export default App;
