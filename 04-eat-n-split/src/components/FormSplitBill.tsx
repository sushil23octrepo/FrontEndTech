import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ selectedFriend, onSplitBill }: any) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState<any>("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const paidByFriend = bill ? Number(bill) - Number(paidByUser) : "";

  function handleSubmit() {
    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <div className="form-split-bill">
      <h2>Split bill with {selectedFriend.name} </h2>
      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > Number(bill)
              ? Number(paidByUser)
              : Number(e.target.value)
          )
        }
      />
      <label>👫 {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />

      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button onButtonClick={() => onSplitBill()}>Split bill</Button>
    </div>
  );
}
