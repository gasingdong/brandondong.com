import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="content-wrapper">
      <div className="content">
        <h1>Whoops! There&apos;s nothing here...</h1>
        <p>
          Please go back to the <a href="/">home page.</a>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
