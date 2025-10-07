export default {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/comment-ca-marche', destination: '/how-it-works', permanent: false },
      { source: '/a-propos', destination: '/about', permanent: false },
      { source: '/assurances/rc-pro', destination: '/insurance/general-liability', permanent: false },
      { source: '/assurances/multirisque-professionnelle', destination: '/insurance/commercial-property', permanent: false },
      { source: '/assurances/flotte-automobile', destination: '/insurance/commercial-auto', permanent: false },
      { source: '/assurances/at-mp', destination: '/insurance/workers-compensation', permanent: false },
      { source: '/packs/pack-tpe', destination: '/insurance/business-owners-policy', permanent: false },
    ];
  },
};
