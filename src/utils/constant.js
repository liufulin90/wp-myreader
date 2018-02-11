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