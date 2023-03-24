import dayjs from 'dayjs'
/**
 * 获取传入日期的月份的最后一天的日期
 * @param date  日期
 * @param formatValue 格式化 例如: YYYY-MM-DD
 * @returns  格式化后的日期字符串
 */
export function lastDayOfMonth(date: Date, formatValue: string = "YYYY-MM-DD"): string {
    const nDate = new Date(date.getFullYear(), date.getMonth() + 1, 0)
    return dayjs(nDate).format(formatValue)
}
/**
 * 获取传入日期的月份的第一天的日期
 * @param date  日期
 * @param formatValue 格式化 例如: YYYY-MM-DD 
 * @returns  格式化后的日期字符串
 */
export function firstDayOfMonth(date: Date, formatValue: string = "YYYY-MM-DD"): string {
    const nDate = new Date(date.getFullYear(), date.getMonth(), 1)
    return dayjs(nDate).format(formatValue)
}