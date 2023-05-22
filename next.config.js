/** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental: {
    //     esmExternals: false,
    // },
    env: {
        NEXT_PRIVATE_PREBUNDLED_REACT: "next",
    },
};

module.exports = nextConfig;
