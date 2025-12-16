import React from 'react';
import { bookingProcess } from './data';
import Step from './Step';

const GioiThieuContent = () => {
  return (
    <section>
      {bookingProcess.map(step => (
        <Step
          key={step.step}
          {...step}
        />
      ))}
    </section>
  );
};

export default GioiThieuContent;
