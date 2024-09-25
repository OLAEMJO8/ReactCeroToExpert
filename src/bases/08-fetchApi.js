const apiKey = "paPxvdG7jNFp3b8NwW5c4WykJPXdoBkQ";

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`);

peticion
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  })
  .catch(console.warn);
