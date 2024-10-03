// src/Components/Icon/Icon.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ icon, className, id }) => {
  return (
    <FontAwesomeIcon icon={icon} className={className} id={id} />
  );
};

export default Icon;
