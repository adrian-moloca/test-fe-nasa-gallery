import { Layout, Typography } from 'antd';
import { footerHeight } from 'components/constants';

const Footer = () => {

	const { Footer: FooterConstructor } = Layout;
	const { Paragraph } = Typography;

	const getCurrentYear = (): number => {
		return new Date().getFullYear();
	}

	  
	return (
		<FooterConstructor style={{ borderTop: '1px solid #9e9e9e', padding: '6px 0 0 0', height: `${footerHeight}px`}}>
			<Paragraph style={{ margin: 0}}>All rights reserved to &copy; NASA {getCurrentYear()}</Paragraph>
		</FooterConstructor>
	)
}

export default Footer