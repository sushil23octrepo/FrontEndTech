import React, { useState } from "react";
import logo from "./logo.svg";
import { PackagingList } from "./components/PackagingList";
import { itemType } from "./types/PackagingList";
import Form from "./components/Form";
import Logo from "./components/Logo";
import Stats from "./components/Stats";

let initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

export default function App() {
  const [items, setItems] = useState<itemType[]>([]);

  const handleItems = (item: itemType) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItem = (id: number) => {
    setItems(items.filter((q) => q.id != id));
  };

  const handleToggleItem = (id: number) => {
    setItems((items) =>
      items.map((item) =>
        item.id == id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  };

  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleItems} />
      <PackagingList
        onToggleItem={handleToggleItem}
        onDeleteItem={handleToggleItem}
        onClearList={handleClearList}
        items={items}
      />
      <Stats />
    </div>
  );
}
