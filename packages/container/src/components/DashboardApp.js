import React, { useEffect, useRef } from 'react';

import { mount } from 'dashboard/DashboardComponent';

export default function DashboardApp() {
  const dashboardElRef = useRef(null);

  useEffect(() => {
    if (dashboardElRef.current) {
      mount(dashboardElRef.current);
    }
  }, []);

  return <div ref={dashboardElRef} />;
}
