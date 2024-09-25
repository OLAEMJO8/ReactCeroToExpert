const getImagen = async () => {
  try {
    const apiKey = "paPxvdG7jNFp3b8NwW5c4WykJPXdoBkQ";

    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`
    );

    const { data } = await resp.json();
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.log("error");
  }
};

getImagen();
