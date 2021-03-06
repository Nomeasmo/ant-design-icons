
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import EuroCircleFillSvg from '@ant-design/icons-svg/lib/fill/EuroCircleFill';

export default {
  name: 'IconEuroCircleFilled',
  displayName: 'EuroCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: EuroCircleFillSvg } },
      children
    ),
};
