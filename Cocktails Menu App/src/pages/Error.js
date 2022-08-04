import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1>Where you goin fam?</h1>
        <Link to='/' className='btn btn-primary'>
          Main Page
        </Link>
      </div>
    </section>
  );
};

export default Error;
