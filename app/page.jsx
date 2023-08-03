import FormOne from '@/components/FormOne';
import FormTwo from '@/components/FormTwo';
import TableForm from '@/components/TableForm';
import TotalCount from '@/components/TotalCount';
import React from 'react';

const page = () => {
  return (
    <div className=''>
      <TotalCount></TotalCount>
      <TableForm></TableForm>
      <FormOne />
      <FormTwo />
     
    </div>
  );
};

export default page;