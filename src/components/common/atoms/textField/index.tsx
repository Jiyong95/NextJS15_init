import classnames from 'classnames/bind';
import React, { useRef, useState } from 'react';

import { BorderColor } from '@constant/styles/color/BorderColorType';

import Icon, { IconOption } from '@atoms/icon';
import Text, { TextOption } from '@atoms/text';

import { TextFieldSizeType } from './TextFieldType';

import styles from './index.module.scss';
const cx = classnames.bind(styles);

export const TextFieldOption = {
  size: TextFieldSizeType,
};

interface Props {
  className?: string;
  size?: TextFieldSizeType;
  searchIcon?: boolean;
  helperText?: React.ReactNode;
  isError?: boolean;
  isSuccess?: boolean;
  inputOptions?: React.InputHTMLAttributes<HTMLInputElement>;
}

const TextField = ({
  className,
  size = TextFieldSizeType.L,
  searchIcon,
  helperText,
  isError,
  isSuccess,
  inputOptions,
}: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  // 값 변화시 재렌더링을 위한 state
  const [_, setRerender] = useState(inputOptions?.defaultValue ?? inputOptions?.value ?? '');
  const [isFocused, setIsFocused] = useState(false);
  const isVisibleRemoveBtn = isFocused && !inputOptions?.disabled && !!inputRef.current?.value;

  const getHelperTextColor = () => {
    if (isError) {
      return TextOption.color.DANGER;
    }
    if (isSuccess) {
      return TextOption.color.SUCCESS;
    }
    return TextOption.color.SUBTLEST;
  };

  const getBorderColor = () => {
    if (inputOptions?.disabled) {
      return BorderColor.DISABLED;
    }
    if (isError) {
      return BorderColor.DANGER;
    }
    if (isSuccess) {
      return BorderColor.SUCCESS;
    }
    return BorderColor.DEFAULT;
  };

  const handleRemoveBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!inputRef.current) return;
    e.preventDefault(); //이벤트가 전파되어 onBlur가 실행되는 것을 방지
    inputRef.current.value = '';
    inputOptions?.onChange?.({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
    setRerender('');
  };

  const customInputOptions = {
    type: 'text',
    placeholder: '입력하세요',
    ...inputOptions,
    ref: (e: HTMLInputElement | null) => {
      (inputOptions as any)?.ref?.(e); //hook-form register 인자로 들어올 경우 처리
      inputRef.current = e;
    },
    onFocus: (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      inputOptions?.onFocus?.(e);
    },
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      inputOptions?.onBlur?.(e);
    },
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      // 길이 제한 생기면 추가
      // if (inputOptions?.maxLength && e.target.value.length > inputOptions.maxLength) return;
      setRerender(e.target.value);
      inputOptions?.onChange?.(e);
    },
  };

  return (
    <div className={cx(className)}>
      <div className={cx('inputArea')}>
        {searchIcon && (
          <div className={cx('icon')}>
            <Icon name={IconOption.name.SEARCH} size={IconOption.size.S} disabled={inputOptions?.disabled} />
          </div>
        )}
        <input
          className={cx('input', [size], { hasIcon: searchIcon })}
          {...customInputOptions}
          style={{
            borderColor: getBorderColor(),
          }}
        />
        {isVisibleRemoveBtn && (
          // onClick사용시 input의 onBlur가 먼저 발생하여 onMouseDown으로 변경
          <button className={cx('icon', 'remove')} type='button' onMouseDown={handleRemoveBtn}>
            <Icon name={IconOption.name.CIRCLE_CLEAR_FILL} size={IconOption.size.S} fill={IconOption.fill.SUBTLE} />
          </button>
        )}
      </div>
      {helperText && (
        <Text className={cx('helperText')} fontStyle={TextOption.fontStyle.BODY_3_M} color={getHelperTextColor()}>
          {helperText}
        </Text>
      )}
    </div>
  );
};

export default TextField;
