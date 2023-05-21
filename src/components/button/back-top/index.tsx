import { useRef, useEffect, useState } from 'react';
import { Button } from 'antd';
import { UpOutlined } from '@ant-design/icons';

const ScrollUpButton = () => {
  const scrollButtonRef = useRef<HTMLDivElement>(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const screenHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      setShowButton(scrollPosition > screenHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      ref={scrollButtonRef}
      style={{
        position: 'sticky',
        bottom: '30px',
        marginRight: '30px',
        display: showButton ? 'flex' : 'none',
        justifyContent: 'flex-end',
      }}
    >
      <Button style={{ backgroundColor: '#7171ef', width: '50px', height :'50px' }} type="primary" shape="circle" 
        icon={<UpOutlined />} onClick={handleScrollUp} />
    </div>
  );
};

export default ScrollUpButton;
