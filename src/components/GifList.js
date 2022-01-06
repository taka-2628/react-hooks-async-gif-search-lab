function GifList( {gifs} ){
  console.log(gifs)
  return <ul>
    {gifs.map(gif => {
      return <li key={gif.id}>
        <img src={gif.images.original.url} alt=""></img>
      </li>
    })}
  </ul>
}

export default GifList;