// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ItalicSvg from '@ant-design/icons-svg/lib/asn/ItalicOutlined'

export default {
  name: 'Italic',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ItalicSvg } },
      children
    )
};