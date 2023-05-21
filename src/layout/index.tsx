import React from 'react';
import { Grid, Layout } from 'antd';
import Header from 'components/header';
import Views from 'views';
import Footer from 'components/footer';
import { footerHeight, headerHeight } from 'components/constants';
import ScrollUpButton from 'components/button/back-top';

const MainLayout = () => {

	const { useBreakpoint } = Grid;
	const screen = useBreakpoint();
	const { Content } = Layout;

	return (
		<>
			<Header />
			<Content style={{ padding: !screen['sm'] ? '0' : '0 50px', minHeight: `calc(100vh - ${headerHeight + footerHeight}px)` }}>
				<Views />
			</Content>
			<ScrollUpButton />
			<Footer />
		</>
	)
}

export default MainLayout