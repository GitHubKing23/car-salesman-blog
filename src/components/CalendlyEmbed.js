import React, { useEffect } from 'react';

const CalendlyEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/wise11jeff/car-sales-meeting"
        style={{ minWidth: '320px', height: '700px' }}
      ></div>
    </div>
  );
};

export default CalendlyEmbed;
