/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  reactStrictMode: true,

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  swcMinify: true, // babel 대신 swc를 사용할 것이므로 옵션활성화
  /** 스타일드 컴포넌트를 적용해야한다. babel-plugin-styled-components를 설치하고 ssr 옵션을 true 로 설정해줄 필요 없이 이렇게만 작성하면 끝이다. (displayname : true, ssr: true)로 설정됨  **/
  compiler: {
    emotion: true,
    // console.log 는 삭제 하고, console.error 는 삭제 되지 않음.
    // removeConsole: process.env.NODE_ENV === 'production',
  },

  /** @TODO 해당 부분 추후 적용 및 수정 예정 */
  // modularizeImports: {
  //   '@itsm/components/?(((\\w*)?/?)*)': { transform: '@itsm/components/{{member}}' },
  // },
  experimental: {
    swcTraceProfiling: false,
    esmExternals: 'loose',
    scrollRestoration: true,
  },
  images: {
    // domains: [ENV.DOMAIN],
    minimumCacheTTL: 3000,
  },
  transpilePackages: ['@agency/components', '@agency/shared', '@agency/icons', '@agency/theme'],
};

module.exports = nextConfig;
