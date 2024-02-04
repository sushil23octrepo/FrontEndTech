import React, { useState } from "react";
import Button from "./components/Button";

export default function FormAddFriend({ onAddFriend }: any) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);
  }
  return (
    <div className="form-add-friend">
      <label>👫 Friend name</label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <label>🌄 Image Url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button onButtonClick={(e: any) => handleSubmit(e)}>Add</Button>
    </div>
  );
}
