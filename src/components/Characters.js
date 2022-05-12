import React from 'react';

function Characters ( {characters} ){
	return(
		<div className='row'>
			{characters.map((item, index) => (
				<div key={index} className='col mb-4'>
					<div className='card' style={{minWidth: '200px', maxWidth: '50px', backgroundColor: 'black'}}>
						<img src={item.image} alt={item.name}/>
						<div className='card-body'>
							<h5 className='card-title'style={{color: 'white'}}>{item.name}</h5>
							<h6 className='card-subtitle text-muted'>Especie {item.species}</h6>
							<h6 className='card-subtitle text-muted'>{item.status}</h6>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Characters;