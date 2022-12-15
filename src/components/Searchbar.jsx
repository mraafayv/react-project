import { useState } from "react";
import SearchIcon from "../assets/search-icon.svg";

export default function Searchbar({ tools }) {
  const [searchQuery, setSearchQuery] = useState("");


  const handleChange = (e) => {
    e.preventDefault();

    let q = searchQuery.toLowerCase()

   const matchedTools = tools.filter(tool => {

      // if(tool.name.toLowerCase().includes(q) || tool.subtitle.toLowerCase().includes(q)){
        // }
        
        // return -1
        return tool.name.toLowerCase().includes(q) || tool.subtitle.toLowerCase().includes(q)
    })

    console.log(matchedTools)

  }

  return (
    <div className="search-bar">
      <img src={SearchIcon} alt="Search icon" />
      <form onSubmit={handleChange}>
        <input
          type="search"
          id="search"
          placeholder="Search AI writing tools"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
      </form>
    </div>
  );
}
