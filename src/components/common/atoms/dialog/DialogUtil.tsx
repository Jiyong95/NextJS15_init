import Icon, { IconOption } from '@atoms/icon';

import { DialogType } from './DialogType';

export const getDialogIcon = (type: DialogType) => {
  switch (type) {
    case DialogType.WARNING:
      return <Icon name={IconOption.name.CIRCLE_ERROR_FILL} fill={IconOption.fill.DANGER} size={IconOption.size.M} />;
    case DialogType.SUCCESS:
      return <Icon name={IconOption.name.CIRCLE_CHECK_FILL} fill={IconOption.fill.SUCCESS} size={IconOption.size.M} />;
    case DialogType.INFORMATION:
      return (
        <Icon name={IconOption.name.CIRCLE_INFO_FILL} fill={IconOption.fill.INFORMATION} size={IconOption.size.M} />
      );
    default:
      return null;
  }
};
