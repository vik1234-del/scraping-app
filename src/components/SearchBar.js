import { useState } from "react";
import { Icon } from "./NavbarElements";
// import "./styles.css";

export default function App() {
  const [isSeen, setIsSeen] = useState(false);
  return (
    <div onClick={() => setIsSeen(true)}>
      {isSeen ? <SearchBar /> : <SearchIcon />}
    </div>
  );
}

const SearchIcon = () => {
  return <Icon />;
};

const SearchBar = () => {
  return (
    <div className="bar">
      <input type="text" />
      <h3 onClick={() => alert("submitted")}>🔍</h3>
    </div>
  );
};
