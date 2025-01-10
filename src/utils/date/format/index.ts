import NumberFormat from '@utils/number/format';

export default class DateFormat {
  // ex) 2020년 08.20 21:07 => format(date, 'yyyy년 MM.dd HH:mm');
  static format(date: Date, format: string): string {
    const week = ['일', '월', '화', '수', '목', '금', '토'];

    return format.replace(/yyyy|yy|mm|m|dd|AP|HH|H|MM|SS|week/g, (format: string): string => {
      switch (format) {
        case 'yyyy': //year
          return date.getFullYear().toString();
        case 'yy': //year two digits (ex 2012 => 12)
          return date.getFullYear().toString().slice(2);
        case 'mm': //month
          return NumberFormat.formatPad(date.getMonth() + 1);
        case 'm': //month
          return (date.getMonth() + 1).toString();
        case 'dd': //date
          return NumberFormat.formatPad(date.getDate());
        case 'HH': //hours (0~24)
          return NumberFormat.formatPad(date.getHours());
        case 'H': //hours (0제외하고 1~12 표현)
          const hour = date.getHours();
          return (hour === 0 ? 12 : hour > 12 ? hour - 12 : hour).toString();
        case 'MM': //minutes
          return NumberFormat.formatPad(date.getMinutes());
        case 'SS': //seconds
          return NumberFormat.formatPad(date.getSeconds());
        case 'week':
          return week[date.getDay()];
        case 'AP':
          return date.getHours() >= 12 ? '오후' : '오전';
        default:
          return '';
      }
    });
  }
}
