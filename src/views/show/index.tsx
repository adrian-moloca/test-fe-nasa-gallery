import { Typography } from 'antd';
import CarouselImages from 'components/carousel';
import ImageShow from 'components/image-show';
import { useLocation } from 'react-router-dom';
import useAssets from 'hooks/use-assets';
import { useAppSelector } from 'store/store-hooks';

const Show = () => {

	const { Paragraph } = Typography;

	const {state} = useLocation();
	const index = state.index;
	const dataApp = useAppSelector(state => state.results?.collection?.items[index])

	const { data: assetsData } = useAssets({
	  dependencies: [],
	  disabled: false,
	  params: dataApp?.data[0]?.nasa_id as string
	})

	return (
		<div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', 
			marginBottom: '30px', marginTop: '30px', alignItems: 'center', borderLeft: '1px solid #696969', borderRight: '1px solid #696969' }}>
			<h1>{dataApp?.data[0].title}</h1>
			<div style={{ maxWidth: '1200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
				<div style={{ width: '100%' }}>
					<ImageShow image={`${dataApp?.links[0].href}`} photographer={dataApp?.data[0]?.photographer ? dataApp?.data[0]?.photographer : '' }
						location={dataApp?.data[0]?.location ? dataApp?.data[0]?.location : ''} />
				</div>
			</div>
			<Paragraph style={{ maxHeight: '50%', maxWidth: '1200px', fontSize: '18px' }}>{dataApp?.data[0].description}</Paragraph>
			<div style={{ width: '100%',  maxWidth: '1200px', display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
				<Paragraph style={{ display: 'flex', fontWeight: 600 }}>Keywords: {''}
					{dataApp?.data[0]?.keywords?.join(', ')} </Paragraph>
			</div>
			<CarouselImages {...assetsData} />
		</div>
	)
}

export default Show;