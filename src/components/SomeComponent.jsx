import React from "react";
import { useCollection } from "../hooks/useCollection";

const SomeComponent = () => {
  const { data } = useCollection("collectionName", [
    "fieldName",
    "==",
    "value",
  ]);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <p>{item.field}</p>
        </div>
      ))}
    </div>
  );
};

export default SomeComponent;
