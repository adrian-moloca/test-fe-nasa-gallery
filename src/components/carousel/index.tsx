import React, { FC, Fragment } from 'react';
import { Carousel } from 'antd';
import { IAssetsResponse, ImageItem } from 'hooks/use-assets/index.interfaces';

const contentStyle: React.CSSProperties = {
  color: '#fff',
  maxHeight: '500px',
  width: '100%',
  minWidth: '300px',
  textAlign: 'center',
  borderRadius: '10px'
};

const CarouselImages: FC<IAssetsResponse> = (props) => {

  const {collection} = props;

  console.log(collection)
  return (
    <Carousel autoplay style={{ width: '100%', maxWidth: '1200px', height: '500px', borderRadius: '10px', backgroundColor: '#969696' }}>
      {collection.items?.map((item: ImageItem, index: number) =>
        <Fragment key={`${item}-${index}`}>
            <img style={contentStyle}
            alt="project-carousel"
            src={item.href} />
        </Fragment>
      )}
    </Carousel>
  )

};

export default CarouselImages;