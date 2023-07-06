import React from "react";
import Entry from "./entry";
import emojipedia from "../emojipedia";

function createEmoji(emojipedia) {
  return (
    <Entry
      key={emojipedia.id}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      description={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEmoji)}</dl>
    </div>
  );
}

export default App;
