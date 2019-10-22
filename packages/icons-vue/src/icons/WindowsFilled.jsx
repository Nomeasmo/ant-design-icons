// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import WindowsFilledSvg from '@ant-design/icons-svg/lib/asn/WindowsFilled'

export default {
  name: 'WindowsFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: WindowsFilledSvg } },
      children
    )
};