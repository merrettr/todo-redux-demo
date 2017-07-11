import React from 'react';
import { Glyphicon } from 'react-bootstrap';

export default ({ id, text, isComplete, onToggle, onDelete }) =>
  <div style={{ display: 'flex' }}>
    <span style={{ flex: 1, textDecoration: isComplete && 'line-through' }}>
      {text}
    </span>
    <Glyphicon
      onClick={() => onToggle(id)}
      glyph="ok"
      style={{
        color: isComplete && 'green',
        fontSize: '1.2em',
        cursor: 'pointer',
      }}
    />
    <Glyphicon
      onClick={() => onDelete(id)}
      glyph="remove"
      style={{
        color: 'red',
        fontSize: '1.2em',
        cursor: 'pointer',
        paddingLeft: '1em',
      }}
    />
  </div>;
