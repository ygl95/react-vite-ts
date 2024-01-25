import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook
  // arr[0] - variable(selectedIndex)
  // arr[1] - updater function
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    // empty bracket means react will by default use Fragment to wrap all this child items.
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? (
        <p>No items found.</p>
      ) : (
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              key={item}
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ListGroup;
