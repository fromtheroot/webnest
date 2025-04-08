# WebNest
A modern web application starter template built with Next.js 14, shadcn/ui, and TailwindCSS.

## Features
- ⚡️ Next.js 14 with App Router
- 🎨 Styled with TailwindCSS
- 🧩 shadcn/ui components
- 📦 TypeScript support
- 🐳 Docker support
- 🚀 Modern development stack

## Prerequisites
- Node.js 18+ 
- npm or yarn
- Docker (optional, for containerization)

## Getting Started
1. Clone the repository:
```bash
git clone https://github.com/fromtheroot/webnest.git
cd webnest
```

2. Install and run:
```bash
chmod +x start.sh
./start.sh
```

This will install dependencies and start the development server. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts
- `npm i` - Install dependencies manually
- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `./start.sh` - Fresh install and start development server

## Docker Support
The project includes Docker support for both development and production environments.

### Development
```bash
docker compose up -d
```

### Production
```bash
docker compose -f docker-compose.prod.yml up -d
```

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
MIT
