
  /**
   * 浏览器临时缓存
   * @function set 设置临时缓存
   * @function get 获取临时缓存
   * @function remove 移除临时缓存
   * @function clear 移除全部临时缓存
   */
  export default  {
    // 设置临时缓存
    set(key: string, val: any) {
      window.sessionStorage.setItem(key, JSON.stringify(val));
    },
    // 获取临时缓存
    get(key: string) {
      const json: any = window.sessionStorage.getItem(key);
      return JSON.parse(json);
    },
    // 移除临时缓存
    remove(key: string) {
      window.sessionStorage.removeItem(key);
    },
    // 移除全部临时缓存
    clear() {
      window.sessionStorage.clear();
    }
  };