// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import EditTwoToneSvg from '@ant-design/icons-svg/lib/asn/EditTwoTone'

export default {
  name: 'EditTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: EditTwoToneSvg } },
      children
    )
};