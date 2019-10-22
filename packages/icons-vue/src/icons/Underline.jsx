// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import UnderlineSvg from '@ant-design/icons-svg/lib/asn/UnderlineOutlined'

export default {
  name: 'Underline',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UnderlineSvg } },
      children
    )
};