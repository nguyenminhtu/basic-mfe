import React, { useEffect, useRef } from 'react';
import { mount } from 'marketing/MarketingComponent';

export default function MarketingApp() {
  const marketingElRef = useRef(null);

  useEffect(() => {
    if (marketingElRef.current) {
      mount(marketingElRef.current);
    }
  }, []);

  return <div ref={marketingElRef} />;
}
