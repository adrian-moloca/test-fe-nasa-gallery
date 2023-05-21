import { useMemo } from 'react';
import BoxParent from 'components/searchComponents/searchParent';
import SearchInput from 'components/searchComponents/searchInput'
import useSearch from 'hooks/use-search';
import { CollectionItem, CollectionItemData } from 'hooks/use-search/index.interfaces';

export interface FormattedItem {
	href?: string;
	data?: CollectionItemData;
}
const Search = () => {
	const { search, loading, data } = useSearch();

  const formatedData = useMemo(() => {
		const interestData = data?.collection?.items;
		if (interestData && Array.isArray(interestData)) {
			return interestData.map((el: CollectionItem): FormattedItem => {
				return {
					href: el.links ? el.links[0].href : undefined,
					data: el.data ? el.data[0] : undefined,
				};
			});
		}
		return [];
	}, [data]);

  return (
    <>
      <SearchInput search={search}/>
      <BoxParent data={formatedData} loading={loading}/>
    </>
  )
}

export default Search