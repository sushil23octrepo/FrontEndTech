import { useState } from "react";
import {
  bookingListType,
  bookingListsType,
  itemType,
} from "../types/PackagingList";
import Item from "./Item";

export function PackagingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}: bookingListsType) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems: itemType[] = [];

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item: itemType) => (
          <Item
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
            item={item}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={() => onClearList()}>Clear list</button>
      </div>
    </div>
  );
}
