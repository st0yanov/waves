// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const withPWA = require('next-pwa')

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  trailingSlash: true,
  target: 'serverless',
  nx: {
    // Set this to false if you do not want to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true,
  },
  pwa: {
    dest: 'public',
    scope: '/waves/',
  },
  images: {
    loader: 'imgix', // this is a hack until the bug is fixed in next 11.0.2
    path: '',
    domains: [
    ],
  },
};

if (process.env.NEXT_PUBLIC_BASE_PATH) {
  nextConfig.basePath = process.env.NEXT_PUBLIC_BASE_PATH;
}

module.exports = withNx(withPWA(nextConfig));
