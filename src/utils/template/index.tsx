import React from 'react';
import classnames from 'classnames/bind';
import styles from './index.module.scss';
const cx = classnames.bind(styles);

interface UtilTemplateProps {
  func: (...args: any[]) => any;
  description?: string;
  [key: string]: any;
}

const UtilTemplate = ({ func, description, ...rest }: UtilTemplateProps) => {
  const argsArray = Object.values(rest);
  const funcResult = func(...argsArray);
  const functionString = func.toString();

  const getType = (value: any) => {
    const isArray = Array.isArray(value);
    const isDate = value instanceof Date;
    if (isArray) return 'Array';
    else if (isDate) return 'Date';
    else return typeof value;
  };

  const argsString = Object.entries(rest)
    .map(([key, value]) => `${key} : ${getType(value)}`)
    .join(', ');

  const inputString = Object.entries(rest)
    .map(([key, value]) => `${key} : ${JSON.stringify(value)}`)
    .join(' , ');

  const functionNameMatch = functionString.match(/function\s+\w+/);
  const functionName = functionNameMatch ? functionNameMatch[0] : '';
  const functionInterface = `${functionName} ( ${argsString} ) return ${getType(funcResult)};`;

  return (
    <div>
      <div className={cx('label')}>Function Interface:</div>
      <pre className={cx('codeArea')}>{functionInterface}</pre>
      <div className={cx('label')}>Description</div>
      <div className={cx('value')}>{description}</div>
      <div className={cx('label')}>Input</div>
      <div className={cx('value')}>{inputString}</div>
      <div className={cx('label')}>Result</div>
      <div className={cx('value')}>{JSON.stringify(funcResult)}</div>
    </div>
  );
};

export default UtilTemplate;
