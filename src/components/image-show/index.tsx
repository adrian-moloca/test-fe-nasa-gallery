import { Typography } from 'antd'
import React from 'react'

interface IProps {
    image: string
    photographer: string
    location: string
}

const ImageShow = (props: IProps) : JSX.Element => {
  const {image, photographer, location} = props;
	const { Paragraph } = Typography;
  return (
    <div style={{ width: '100%',display: 'flex', flexDirection: 'column', alignItems: 'flex-start', alignSelf: 'flex-start', marginBottom: '30px', height: '100%'}}>
        <img style={{width: '100%', height: 'auto', borderRadius: '10px'}} src={`${image}`} alt='img'/>
        <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} >
          <Paragraph style={{ fontWeight: 600, fontSize: '18px'}}>Photographer : {photographer?.length > 0 ? photographer : 'Unknown'}</Paragraph>
          <Paragraph style={{ fontWeight: 600, fontSize: '18px'}}>Location : {location?.length > 0 ? location : 'Not specified'}</Paragraph>
        </div>
    </div>
  )
}

export default ImageShow