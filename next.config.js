/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "scontent.fsgn7-2.fna.fbcdn.net"
            }
        ]
    },
    experimental: {
        serverActions: true,
    },
};

module.exports = nextConfig
