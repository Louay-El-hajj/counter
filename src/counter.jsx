import React, { useState } from "react";


const Counter = ({ node }) => {
  const [childCount, setChildCount] = useState(1);
  const [isVisible, setIsVisible] = useState(true);
  const [childNodes, setChildNodes] = useState([]);

  const handleIncrement = () => {
    const newCount = childCount + 1;
    setChildCount(newCount);
    setChildNodes(prevChildNodes => [
      ...prevChildNodes,
      <Counter key={newCount} node={{ count: newCount }} />
    ]);
  };

  const handleDecrement = () => {
    if (childCount > 1) {
      setChildCount(childCount - 1);
      setChildNodes(prevChildNodes =>
        prevChildNodes.slice(0, -1) // Remove the last child node
      );
    }
  };

  return isVisible ? (
    <div>
      <span>-</span>
      {node.count}
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button> {/* Decrement button */}
      <br />
      {childNodes}
    </div>
  ) : (
    <></>
  );
};

export default Counter;
