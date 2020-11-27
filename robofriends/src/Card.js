import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Card = (props) => {
  const { id, name, email } = props;
  return (
    <Fragment>
      <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${id}?200*200`} alt='robot' />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
        </div>
      </div>
    </Fragment>
  );
}

export default Card;

