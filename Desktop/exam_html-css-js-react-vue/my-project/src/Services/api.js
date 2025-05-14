export const fetchImages = async () => {
  try {
    const res = await fetch(
      "https://picsum.photos/v2/list?page=" +
        Math.floor(Math.random() * 100) +
        "&limit=4"
    );
    const data = await res.json();

    return data.map((img) => ({
      src: `https://picsum.photos/id/${img.id}/200/300?random=${Math.random()}`,
      link: img.url,
      author: img.author,
    }));
  } catch (err) {
    console.error("Failed to fetch images:", err);
    return [];
  }
};
