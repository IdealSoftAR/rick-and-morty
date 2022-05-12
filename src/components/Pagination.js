import React from 'react';

function Pagination({prev, next, onPrev, onNext}) {
  
  const handlePrev = () => {
    onPrev();
  };

  const handleNext = () => {
    onNext();
  };

  return(
    <nav>
      <ul className='pagination justify-content-center'>
        <li className={prev ? 'page-item' : 'page-item disabled'}>
          <button className='page-link' style={{background: 'black'}} onClick={handlePrev}>{'<'} Ant</button>
        </li>
        <li className={next ? 'page-item' : 'page-item disabled'}>
          <button className='page-link' style={{background: 'black'}} onClick={handleNext}>Sig {'>'}</button>
        </li>
      </ul>
    </nav>

  );
};

export default Pagination;