// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import RightSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/RightSquareTwoTone'

export default {
  name: 'RightSquareTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RightSquareTwoToneSvg } },
      children
    )
};