/**
 * 小程序请求接口的域名
 * @type {string}
 */
export const API_HOST = 'https://wpreader.linxins.com';
/**
 * 用户code 换取 session_key
 * @type {String}
 */
export const USER_SPECICAL_INFO = "userSpecialInfo";

/**
 * 用户信息
 * @type {String}
 */
export const USER_INFO = "userInfo";

/**
 * 系统信息
 * @type {String}
 */
export const SYSTEM_INFO = "systemInfo";


export const ADDRESS_ID = "addressId";

export const SEL_CLASS_CODE = "selClassCode";
/**
 * 阅读器
 * @type {string}
 */
export const STORAGE_READER = 'storage:reader';
/**
 * 设置
 * @type {string}
 */
export const STORAGE_SETTING = 'storage:setting';
/**
 * 书架
 * @type {string}
 */
export const STORAGE_STORE = 'storage:store';

/**
 * 主题颜色
 * @type {*[]}
 */
export const COLORS = [
  {
    background: '#b6b6b6'
  }, {
    background: '#999484'
  }, {
    background: '#a0b89c'
  }, {
    background: '#cec0a4'
  }, {
    background: '#d5b2be'
  }, {
    color: 'rgba(255,255,255,0.8)',
    background: '#011721'
  }, {
    color: 'rgba(255,255,255,0.7)',
    background: '#2c2926'
  }, {
    background: '#c4ada4'
  }
];
/**
 * 白天还是黑夜
 * @type {{day: {background: string}, night: {color: string, background: string}}}
 */
export const MODE_COLOR = {
  day: {
    background: '#FAF9DE'
  },
  night: {
    color: 'rgba(255,255,255,0.5)',
    background: '#000'
  }
};

export const DEFAULT_SETTING = {
  mode: 'day',
  color: {
    background: '#FAF9DE'
  },
  fontSize: 20
}

export const INIT_READER_STATE = {
  id: null,           // 当前书籍id，默认没有书籍
  downloadStatus: false,  // 当前书籍是否被下载 true：已下载 false：未下载
  downloadPercent: 0, // 下载进度
  currentSource: 1,   // 当前源下标：默认为1，跳过优质书源
  currentChapter: 0,  // 当前章节下标
  source: [],         // 源列表
  chapters: [],       // 章节列表
  chaptersContent: [], // 章节列表并包含其内容
  chapter: {},        // 当前章节
  detail: {},         // 书籍详情
  menuState: false   // 底部菜单是否展开 true：展开 false：收起
};