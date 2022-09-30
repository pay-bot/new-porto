import React from "react";
import TypeIt from "typeit-react";

export default function CustomTypeIt({ children }) {
  return (
    <TypeIt
      options={{
        cursor: false,
        speed: 35,
        // lifeLike: true,
        // loop: true,
        loopDelay: 5000,
        // startDelete: true,
        startDelay: 1000,
        // deleteSpeed: 35,
        // waitUntilVisible: true,
      }}
    >
      {children}
    </TypeIt>
  );
}
