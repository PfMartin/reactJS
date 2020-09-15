import React from 'react';

const Footer = () => {
  const creatorFirstName = 'Martin';
  const creatorLastName = 'Pfatrisch'

  return (
    <div className="foot">
      <p>&copy; {`${creatorFirstName} ${creatorLastName}`}</p>
    </div>
  )
}

export default Footer