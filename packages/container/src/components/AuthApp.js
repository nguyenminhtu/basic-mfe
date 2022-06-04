import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { mount } from 'auth/AuthComponent';

export default function AuthApp({ onSignIn }) {
  const authElRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    if (authElRef.current) {
      const { onParentNavigate } = mount(authElRef.current, {
        onNavigate: ({ pathname: nextPathname }) => {
          const { pathname: currentPathname } = history.location;

          if (currentPathname !== nextPathname) {
            history.push(nextPathname);
          }
        },
        initialPath: history.location.pathname,
        onSignIn,
      });

      history.listen(onParentNavigate);
    }
  }, []);

  return <div ref={authElRef} />;
}
