import React from "react";

const Dump = props => (
  <div
    style={{
      fontSize: 16,
      padding: "64px",
      background: "var(--color-spruce)",
      gridColumn: "1 / -1",
      position: "relative",
      zIndex: "20",
      marginBottom: "32px",
      overflow: "auto",
      maxHeight: "480px"
    }}>
    {Object.entries(props).map(([key, val]) => (
      <pre key={key}>
        <strong style={{ color: "var(--color-amaranth)" }}>
          {key} 💩
        </strong>
        {JSON.stringify(val, '', ' ')}
      </pre>
    ))}
  </div>
);

export default Dump;
