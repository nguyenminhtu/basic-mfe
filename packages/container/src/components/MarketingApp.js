import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { mount } from 'marketing/MarketingComponent';

export default function MarketingApp() {
  const marketingElRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    if (marketingElRef.current) {
      const { onParentNavigate } = mount(marketingElRef.current, {
        onNavigate: ({ pathname: nextPathname }) => {
          const { pathname: currentPathname } = history.location;

          if (currentPathname !== nextPathname) {
            history.push(nextPathname);
          }
        },
        initialPath: history.location.pathname,
      });

      history.listen(onParentNavigate);
    }
  }, []);

  return <div ref={marketingElRef} />;
}
