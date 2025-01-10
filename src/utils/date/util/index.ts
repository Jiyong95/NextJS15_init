import { MILLISECONDS_PER_DAY, MILLISECONDS_PER_MINUTE } from '@constant/Time';

export default class DateUtil {
  //현재 날짜 반환
  static getNow() {
    return new Date(Date.now());
  }

  /*
  두 날짜를 비교
  a < b : -1
  a = b : 0
  a > b : 1
  */
  static compare(dateA: Date, dateB: Date): number {
    const a = dateA.valueOf();
    const b = dateB.valueOf();
    return Number(a > b) - Number(a < b);
  }

  /*
   date 가 compareDate 보다 전날이거나, 같은날이면 return true
   date 가 compareDate 보다 다음날이면 return false
   compareDate 가 없으면 현재 시간과 비교
  */
  static isPastDate(date: Date, compareDate = DateUtil.getNow()): boolean {
    return DateUtil.compare(compareDate, date) >= 0;
  }

  static addDays(date: Date, days: number) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  //현재 시간이 startDate ~ endDate 에 포함되어 있는지 여부
  static getWhetherIncludedInThePeriod(
    startDate: Date = new Date(),
    endDate: Date = new Date(),
    currentDate = new Date(),
  ) {
    return DateUtil.compare(startDate, currentDate) < 1 && DateUtil.compare(currentDate, endDate) < 1;
  }

  static getLeftDays(startDate: Date, endDate = DateUtil.getNow()): number {
    const offset = -1 * startDate.getTimezoneOffset() * MILLISECONDS_PER_MINUTE; // timezone offset으로 값 보정
    const clearedStartDate = Math.floor((startDate.valueOf() + offset) / MILLISECONDS_PER_DAY);
    const clearedEndDate = Math.floor((endDate.valueOf() + offset) / MILLISECONDS_PER_DAY);

    return clearedEndDate - clearedStartDate;
  }
}
