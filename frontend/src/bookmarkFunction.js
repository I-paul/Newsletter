const toggleBookmark = (article) => {
  let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

  const exists = bookmarks.some(item => item.title === article.title);

  if (exists) {
    // remove if already bookmarked
    bookmarks = bookmarks.filter(item => item.title !== article.title);
  } else {
    // add full article
    bookmarks.push(article);
  }

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  return !exists; // return new bookmark state
};

export default toggleBookmark;
