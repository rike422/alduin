export function addFeed(title, url, type, articles) {
  return {
    type: 'ADD_FEED',
    payload: { title, url, type, articles }
  }
}
export function editFeed(feedId, newTitle) {
  return {
    type: 'EDIT_FEED',
    payload: { feedId, newTitle }
  }
}
export function updateArticles(title, articles) {
  return {
    type: 'UPDATE_ARTICLES',
    payload: { title, articles }
  }
}
export function selectFeed(title) {
  return {
    type: 'SELECT_FEED',
    payload: title
  }
}
export function selectArticle(article) {
  return {
    type: 'SELECT_ARTICLE',
    payload: article
  }
}
export function markArticleAsRead(feedId, articleId) {
  return {
    type: 'READ_ARTICLE',
    payload: { feedId, articleId }
  }
}
export function markArticlesAsRead(feedId) {
  return {
    type: 'READ_ARTICLES',
    payload: { feedId }
  }
}
export function deleteFeed(id) {
  return {
    type: 'DELETE_FEED',
    payload: id
  }
}