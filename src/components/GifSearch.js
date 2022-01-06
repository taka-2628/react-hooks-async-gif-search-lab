import { useState } from "react";

function GifSearch( { onSearchSubmit } ){
  const [search, setSearch] = useState("");

  function handleSubmit(event){
    event.preventDefault();
    console.log(search)
    onSearchSubmit(search);
  }

  return <div>
    <form onSubmit={handleSubmit}>
      <label>Enter a Serch Term: </label>
      <input type="text" name="search" value={search} onChange={(event) => setSearch(event.target.value)}></input>
      <button type="submit">Find Gifs</button>
    </form>
  </div>
}

export default GifSearch;