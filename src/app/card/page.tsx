import React from "react";

interface Tprop {
  name: string;
  age: string;
  roll: number;
  class: string;
  center: string;
}

function CARD(prop: Tprop) {
  return (
    <div>
      <h1>
        {" "}
        <p className="text-sky-500 inline-flex">Name: </p>
        {prop.name}
      </h1>

      <h1>
        {" "}
        <p className="text-sky-500 inline-flex">Age: </p>
        {prop.age}
      </h1>

      <h1>
        {" "}
        <p className="text-sky-500 inline-flex">Roll: </p>
        {prop.roll}
      </h1>
      <h1>
        <p className="text-sky-500 inline-flex">Campus:</p> Main
      </h1>
      <h1>
        {" "}
        <p className="text-sky-500 inline-flex">Center: </p>
        {prop.center}
      </h1>
      <h1>
        {" "}
        <p className="text-sky-500 inline-flex">Day/Time: </p>
        {prop.class}
      </h1>
      <h1 className="text-sky-500 inline-flex">Batch 1</h1>
    </div>
  );
}

export default CARD;
