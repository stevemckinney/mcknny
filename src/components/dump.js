import React from "react";

const Dump = props => (
  <div
    style={{
      fontSize: 16,
      border: "1px solid #efefef",
      padding: "15vw",
      background: "var(--color-spruce)",
    }}>
    {Object.entries(props).map(([key, val]) => (
      <pre key={key}>
        <strong style={{ color: "var(--color-madison)", background: "var(--color-amaranth)", padding: "1px 3px" }}>
          {key} 💩
        </strong>
        {JSON.stringify(val, '', ' ')}
      </pre>
    ))}
  </div>
);

export default Dump;
