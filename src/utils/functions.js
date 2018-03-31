import {getStorage, setStorage} from './storage'
import {STORAGE_STORE, STORAGE_READER, INIT_READER_STATE} from './constant'
/**
 * 交换书籍(当前书籍与书架中的书交换)
 */
const changeBook2Store = function (_id) {
  // 取到原来的‘当前书籍’
  const readerStore = getStorage(STORAGE_READER)
  // 把要看的书籍从书架中拿到，然后放到当前书籍中
  var bookStore = getStorage(STORAGE_STORE)
  setStorage(STORAGE_READER, INIT_READER_STATE, false)
  setStorage(STORAGE_READER, bookStore[_id])
  // 把上一个‘当前书籍’放回到书架中，并从书架中移除即将要阅读的书
  delete bookStore[_id]
  if (readerStore.id) {
    bookStore[readerStore.id] = readerStore
  }
  setStorage(STORAGE_STORE, bookStore, false)
}

export {
  changeBook2Store
}
