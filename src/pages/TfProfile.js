import React from 'react';
import {profile} from '../components/LinearRegression/linearRegression';

const TfProfile = () => {
  profile().then(tfProfile => {
    console.log(tfProfile);
  });

  return (
    <div>
      <h2>TF Profile</h2>
    </div>
  );
};

export default TfProfile;
