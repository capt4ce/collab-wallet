import React from 'react';

import RecordViewHeader from './RecordViewHeader';
import RecordDetail from './RecordDetail';

const AddEditRecord: React.FC = () => {
  return (
    <div>
      <RecordViewHeader />
      <div className="mb-3" />
      <RecordDetail />
    </div>
  );
};

export default AddEditRecord;
