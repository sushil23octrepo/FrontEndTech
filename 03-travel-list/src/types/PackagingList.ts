export type itemType = {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
};

export type bookingListType = {
  item: itemType;
  onToggleItem: (id: number) => void;
  onDeleteItem: (id: number) => void;
};

export type bookingListsType = {
  items: itemType[];
  onToggleItem: (id: number) => void;
  onDeleteItem: (id: number) => void;
  onClearList: () => void;
};
