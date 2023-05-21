import React, { FC, useEffect, useState } from 'react';
import { Button, Grid, Input, Space, Typography } from 'antd';
import { MoreOutlined, SearchOutlined } from '@ant-design/icons';
import { SearchParams } from 'hooks/use-search/index.interfaces';
import { useAppSelector } from 'store/store-hooks';

interface IProps {
	search: (params: SearchParams) => void
}

interface IYear {
	startYear: number
	endYear: number
}

const SearchInput: FC<IProps> = (props) => {
	const { search} = props;

	const { useBreakpoint } = Grid
	const screen = useBreakpoint();
	const { Search } = Input;
	const { Paragraph } = Typography;
	const [show, setShow] = useState<boolean>(false);
	const [year, setYear] = useState<IYear>({startYear: 1950, endYear: 2023})
	const previousSearch = useAppSelector(state => state?.searchedValue);
	const [searchValue, setSearchValue] = useState<string>(previousSearch || '');

	const onSearch = (value: string) => search({q: value, endYear: String(year?.endYear), startYear: String(year?.startYear)});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e?.target?.value)
	}

	const handleShow = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		setShow(!show);
	}

	const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
		setYear((prev) => ({...prev, [name]: e.target.value }))
	}	

	const handleApply = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		search({q: searchValue, endYear: String(year?.endYear), startYear: String(year?.startYear)});
	}

	useEffect(() => {
		previousSearch && previousSearch.length && search({q: searchValue, endYear: String(year?.endYear), startYear: String(year?.startYear)});
		// eslint-disable-next-line
	}, [previousSearch])

	return (
		<div style={{ padding: '24px 50px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
			<div style={{ width: '100%', display: 'flex', gap: '14px', justifyContent: 'center' }}>
				<Search value={searchValue} style={{ maxWidth: '600px', minWidth: '200px' }} placeholder="Search" onSearch={onSearch} onChange={(e) => handleChange(e)}
					enterButton={<Button style={{ backgroundColor: '#7171ef', color: '#000' }}>{!screen['sm'] ? <SearchOutlined /> : 'Search'}</Button>} />
				<Button onClick={(e) => handleShow(e)} >{!screen['sm'] ? <MoreOutlined /> : 'Filter'}</Button>
			</div>
			{show &&
				<div style={{ maxWidth: '800px', minWidth: '200px' , display: 'flex',justifyContent: 'center', marginTop: '14px' }}>
					<Space.Compact style={{ width: '100%', alignItems :'center', marginRight: '15px'}}>
						<Paragraph style={{ margin: 0 , paddingRight: '12px' }}>Year (1950 - 2023):</Paragraph>
						<Input type='number' value={year?.startYear} style={{ width: '30%'}} placeholder="Year to start" 
							onChange={(e) => handleYearChange(e, 'startYear')} />
						<Input type='number' value={year?.endYear} style={{ width: '30%'}} placeholder="Year to end" 
							onChange={(e) => handleYearChange(e, 'endYear')}/>
						<Button style={{ backgroundColor: '#7171ef', color: '#000', width :'75px' }}
							onClick={(e) => handleApply(e)}>Apply</Button>
					</Space.Compact>
				</div>
			}
			{/* { formatedData && formatedData?.map((image, index) => {
				return (
					<img key={'test' + index} src={`${image.href}`} alt={`${image.href}`} style={{ width :'200px', height :'200px'}} />
				)
			})} */}
		</div>
	)
}

export default SearchInput;