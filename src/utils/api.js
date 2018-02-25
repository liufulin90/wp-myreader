import { wxRequest } from '../utils/wxRequest.js';
// 获取书源
export function getSource(params) {
  return wxRequest(params, `/api/toc?view=summary&book=${params.query.id}`);
}

// 获取章节列表
export function getChapterList(params) {
  return wxRequest(params, `/api/toc/${params.query.id}?view=chapters`);
}

// 获取章节内容
export function getChapter(params) {
  return wxRequest(params, `/chapter/${params.query.link}?k=2124b73d7e2e1945&t=1468223717`);
}

// 搜索书籍
export function searchBook(params) {
  return wxRequest(params, `/api/book/fuzzy-search?query=${params.query.keyword}&start=0&limit=10`);
}

// 获取书籍详细信息
export function getDetail(params) {
  //https://wpreader.linxins.com/api/book/50865988d7a545903b000009
  return wxRequest(params, `/api/book/${params.query.id}`);
}
