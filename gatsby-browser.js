exports.onRouteUpdate = (props, pluginOptions) => {
  if (typeof window._satellite !== 'undefined') {
    const routeChangeEventName = pluginOptions.routeChangeEventName || 'gatsbyRouteChange';

    // wrap inside a timeout to make sure react-helmet is done with it's changes (https://github.com/gatsbyjs/gatsby/issues/9139)
    // reactHelmet is using requestAnimationFrame: https://github.com/nfl/react-helmet/blob/5.2.0/src/HelmetUtils.js#L296-L299
    setTimeout(() => {
      // Dispatch route change event to target in a rule.
      _satellite.track('state',
        {
          xdm: {},
          data: {
            _adobe_corpnew: {
              web: {
                webPageDetails: {
                  customPageName: location.href
                }
              }
            }
          }
        });
    }, 32);
  }
};