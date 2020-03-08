import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	return (
		<div>
			{
				robots.map((user,i) =>{					//user here is every element in { robots }, i is the index for every element
					return (
						<Card 
						key={i} 										//key help React identify which items have changed, are added, or are removed
						id={robots[i].id} 
						name={robots[i].name} 
						email={robots[i].email} 
						username={robots[i].username} 
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;