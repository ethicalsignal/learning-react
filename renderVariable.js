import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

const myList = (
  <ul>
    <li>First Element</li>
    <li>Second Element</li>
    <li>Third Element</li>
  </ul>
);

root.render(myList);
