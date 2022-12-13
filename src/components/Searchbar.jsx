import SearchIcon from "../assets/search-icon.svg";

export default function Searchbar() {
  return (
    <div className="search-bar">
      <img src={SearchIcon} alt="Search icon" />
      <input type="search" id="search" placeholder="Search AI writing tools" />
    </div>
  );
}
