import React from 'react';

// searchfield is not used
const SearchBox = ({searchChange}) => {
	return (
		<div className='pa2'>
			<input
			className='pa3 na n--green bg-light-blue' 
			type='search' 
			placeholder='search robots'
			onChange={searchChange} 
			/>
		</div>
	);
}

export default SearchBox;