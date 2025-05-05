/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        domains: ['blog.nidodecuidados.com'],
    },
    trailingSlash: true,
}

module.exports = nextConfig