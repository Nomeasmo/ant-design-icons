// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import UnlockFilledSvg from '@ant-design/icons-svg/lib/asn/UnlockFilled'

export default {
  name: 'UnlockFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UnlockFilledSvg } },
      children
    )
};