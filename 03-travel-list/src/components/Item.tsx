import { bookingListType } from "../types/PackagingList";

export default function Item({
  item,
  onDeleteItem,
  onToggleItem,
}: bookingListType) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed ? 1 : 0}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
