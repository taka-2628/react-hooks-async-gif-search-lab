import { useState, useEffect } from "react";
import GifSearch from "./GifSearch";
import GifList from "./GifList";

function GifListContainer(){
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=gif&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(res => res.json())
      .then(res => setGifs(res.data.slice(0, 3)))
  }, [])

  function handleSearch(search){
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(res => res.json())
      .then(res => setGifs(res.data.slice(0, 3)))
  }

  return <div>
    <GifSearch onSearchSubmit={handleSearch}/>
    <GifList gifs={gifs}/>
  </div>
}

export default GifListContainer;