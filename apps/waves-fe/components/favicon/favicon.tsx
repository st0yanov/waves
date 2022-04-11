import { assetPath } from '../../utils/helpers';

/* eslint-disable-next-line */
export interface FaviconProps {}

export function Favicon(props: FaviconProps) {
  return (
    <>
      <meta name="apple-mobile-web-app-title" content="Waves" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="mobile-web-app-capable" content="yes" />

      <meta name="application-name" content="Waves" />
      <meta name="msapplication-TileColor" content="#00aba9" />
      <meta name="msapplication-config" content={assetPath('static/icons/browserconfig.xml')} />
      <meta name="theme-color" content="#ffffff" />

      <link rel="apple-touch-icon" sizes="180x180" href={assetPath('static/icons/apple-touch-icon.png')} />
      <link rel="icon" type="image/png" sizes="32x32" href={assetPath('static/icons/favicon-32x32.png')} />
      <link rel="icon" type="image/png" sizes="16x16" href={assetPath('static/icons/favicon-16x16.png')} />
      <link rel="manifest" href={assetPath('static/icons/site.webmanifest')} />
      <link rel="mask-icon" href={assetPath('static/icons/safari-pinned-tab.svg')} color="#5bbad5" />
      <link rel="shortcut icon" href={assetPath('static/icons/favicon.ico')} />

      <link href={assetPath('static/images/splashscreens/iphone5_splash.png')} media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
      <link href={assetPath('static/images/splashscreens/iphone6_splash.png')} media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
      <link href={assetPath('static/images/splashscreens/iphoneplus_splash.png')} media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
      <link href={assetPath('static/images/splashscreens/iphonex_splash.png')} media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
      <link href={assetPath('static/images/splashscreens/iphonexr_splash.png')} media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
      <link href={assetPath('static/images/splashscreens/iphonexsmax_splash.png')} media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
      <link href={assetPath('static/images/splashscreens/ipad_splash.png')} media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
      <link href={assetPath('static/images/splashscreens/ipadpro1_splash.png')} media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
      <link href={assetPath('static/images/splashscreens/ipadpro3_splash.png')} media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
      <link href={assetPath('static/images/splashscreens/ipadpro2_splash.png')} media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
    </>
  );
}

export default Favicon;
