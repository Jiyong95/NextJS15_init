import classnames from 'classnames/bind';
import { FC, useEffect, useRef, useState } from 'react';

import { BorderColor } from '@constant/styles/color/BorderColorType';

import Text, { TextOption } from '@atoms/text';

import { TextAreaSizeType } from './TextAreaType';

import styles from './index.module.scss';
const cx = classnames.bind(styles);

export const TextAreaOption = {
  size: TextAreaSizeType,
};

interface Props {
  className?: string;
  size?: TextAreaSizeType;
  helperText?: React.ReactNode;
  isError?: boolean;
  isSuccess?: boolean;
  textAreaOptions?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
}

const TextArea: FC<Props> = ({
  className,
  size = TextAreaSizeType.L,
  helperText,
  isError,
  isSuccess,
  textAreaOptions,
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  // 값 변화시 재렌더링을 위한 state
  const [_, setRerender] = useState(textAreaOptions?.value ?? '');
  const [helperTextWidth, setHelperTextWidth] = useState(0);

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
    if (textAreaOptions?.disabled) {
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

  const customTextAreaOptions = {
    placeholder: '입력하세요',
    ...textAreaOptions,
    ref: (e: HTMLTextAreaElement | null) => {
      (textAreaOptions as any)?.ref?.(e); //hook-form register 인자로 들어올 경우 처리
      textAreaRef.current = e;
    },
    onFocus: (e: React.FocusEvent<HTMLTextAreaElement>) => {
      textAreaOptions?.onFocus?.(e);
    },
    onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => {
      textAreaOptions?.onBlur?.(e);
    },
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (textAreaOptions?.maxLength && e.target.value.length > textAreaOptions.maxLength) return;
      setRerender(e.target.value);
      textAreaOptions?.onChange?.(e);
    },
  };

  useEffect(() => {
    if (helperText && textAreaRef.current) setHelperTextWidth(textAreaRef.current.clientWidth);
  }, []);

  return (
    <div className={cx(className)}>
      <textarea
        className={cx('textArea', [size])}
        {...customTextAreaOptions}
        style={{
          borderColor: getBorderColor(),
        }}
      />
      <div className={cx('helperTextArea')}>
        <Text
          fontStyle={TextOption.fontStyle.BODY_3_M}
          color={getHelperTextColor()}
          ellipsis={1}
          styles={{
            width: helperTextWidth ? helperTextWidth - 80 : 0,
          }}>
          {helperText}
        </Text>
        {!!textAreaOptions?.maxLength && (
          <Text
            fontStyle={TextOption.fontStyle.BODY_3_M}
            color={TextOption.color.SUBTLEST}>{`${textAreaRef.current?.value?.length ?? 0}/${
            textAreaOptions?.maxLength
          }`}</Text>
        )}
      </div>
    </div>
  );
};

export default TextArea;
