const React = require('react');
const isBrowser = typeof window !== "undefined";

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  if(isBrowser) {
    var launchURL = 'https://assets.adobedtm.com/d4d114c60e50/a0e989131fd5/launch-5dd5dd2177e6.min.js';
  var edgeConfigId = '57c20bab-94c3-425e-95cb-0b9948b1fdd4';

  if (window.location.hostname === ('localhost') || window.location.hostname.includes('developer-dev') || window.location.hostname.includes('developer-stage')) {
    edgeConfigId = 'a44f0037-2ada-441f-a012-243832ce5ff9';
    launchURL = 'https://assets.adobedtm.com/d4d114c60e50/a0e989131fd5/launch-2c94beadc94f-development.min.js';
  }

  setHeadComponents([
    <>
      <script type="text/javascript">
        {`
          window.alloy_all = window.alloy_all || {};
          window.alloy_all.data = window.alloy_all.data || {};
          window.alloy_all.data._adobe_corpnew = window.alloy_all.data._adobe_corpnew || {};
          window.alloy_all.data._adobe_corpnew.digitalData = window.alloy_all.data._adobe_corpnew.digitalData || {};
          window.alloy_all.data._adobe_corpnew.digitalData.page = window.alloy_all.data._adobe_corpnew.digitalData.page || {};
          window.alloy_all.data._adobe_corpnew.digitalData.page.pageInfo = window.alloy_all.data._adobe_corpnew.digitalData.page.pageInfo || {};
          window.alloy_all.data._adobe_corpnew.digitalData.page.pageInfo.language = 'en-US';

          window.marketingtech = {
            adobe: {
              launch: {
                url: ${launchURL},
                controlPageLoad: true,
              },
              alloy: {
                edgeConfigId: ${edgeConfigId},
              },
              target: false,
              audienceManager: false,
            }
          };
        `}
      </script>
      <script src="https://www.adobe.com/marketingtech/main.standard.min.js" async />
    </>,
  ]);
  }

};