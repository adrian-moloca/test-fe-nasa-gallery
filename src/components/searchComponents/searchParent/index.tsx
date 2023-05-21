
import React, {FC} from 'react';
import './index.css';
import CardComponent from '../searchCard';
import { FormattedItem } from 'views/search';
import { Skeleton} from 'antd';


interface IProps {
	data: FormattedItem[]
	loading: boolean
}

const BoxParent: FC<IProps> = (props) => {
  const {data, loading} = props;
  return (
    <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', marginTop: '24px', gap: '20px', justifyContent: 'center' }}>
    {loading ?
      <>
        <Skeleton.Image style={{ width: '350px', height: '350px' }} active={true} />
        <Skeleton.Image style={{ width: '350px', height: '350px' }} active={true} />
        <Skeleton.Image style={{ width: '350px', height: '350px' }} active={true} />
        <Skeleton.Image style={{ width: '350px', height: '350px' }} active={true} />
      </>
      :
      <>{ data?.length > 0 ?
        data.map((item, index) => 
          <CardComponent index={index} key={`${item}-${index}`} title={`${item.data ? item.data.title : '-'} `} location={`Location: ${item.data && item.data.location ? item.data.location : 'Not specified'} `} 
            thumbnail={`${item.href}`} photographerName={`Photographer: ${item.data && item.data.photographer ? item.data.photographer : 'Unknown'} `}/>
            )
        :
        <p>No results found</p>
      }</>
    }
    </div>
  )
}

export default BoxParent;