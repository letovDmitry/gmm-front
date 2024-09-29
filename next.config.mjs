// next.config.mjs
const nextConfig = {


    images: {
        domains: ['t.me', 'cdn4.cdn-telegram.org'],
    },
    output: 'standalone',
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        icon: true,
                        svgProps: { fill: 'currentColor' },
                    },
                },
            ],
        });
        return config;
    },
};

export default nextConfig;

