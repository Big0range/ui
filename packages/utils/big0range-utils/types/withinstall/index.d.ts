import type { Plugin } from "vue";
export type SFCWithInstall<T> = T & Plugin;
declare const _default: <T>(comp: T) => SFCWithInstall<T>;
export default _default;
