import React from 'react';

import RecordListHeader from './RecordListHeader';
import RecordList from './RecordList';

const Home: React.FC = () => {
  return (
    <div>
      <RecordListHeader />
      <RecordList />
    </div>
  );
};

export default Home;
