import { Layout, Typography } from 'antd';
import { headerHeight } from 'components/constants';

const Header = () => {
  
  const { Header: HeaderConstructor} = Layout;
  const { Paragraph } = Typography;
  
  return (
    <>
        <HeaderConstructor style={{ display: 'flex', alignItems: 'center', backgroundColor :'#7171ef', padding: 0, height: `${headerHeight}` }}>
            <img src='https://www.nasa.gov/sites/default/files/styles/side_image/public/thumbnails/image/nasa-logo-web-rgb.png?itok=uDhKSTb1'
                alt='nasa-logo' style={{ width: '120px', height: 'auto'}} />
            <Paragraph style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0, fontSize: '18px', fontWeight: 500}}>
                NASA Media Library 
            </Paragraph>
      </HeaderConstructor>
    </>
  )
}

export default Header