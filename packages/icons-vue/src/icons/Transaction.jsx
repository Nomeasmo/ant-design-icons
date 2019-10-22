// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import TransactionSvg from '@ant-design/icons-svg/lib/asn/TransactionOutlined'

export default {
  name: 'Transaction',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TransactionSvg } },
      children
    )
};