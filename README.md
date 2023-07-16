# Node TS Express and Prisma

This Repository is a boilerplate to build a RESTful API with Express.js and Prisma using [TypeScript](https://www.typescriptlang.org/) and [pnpm](pnpm.io) for package management

## Usage

- To install package

```bash
pnpm install
```

- To start development

```bash
pnpm dev
```

- To start production

```bash
pnpm build
pnpm start
```

- To work with prisma

```bash
# prisma db push
pnpm db:push
# prisma generate
pnpm db:generate
# prisma migrate dev
pnpm db:migrate
```

### 🚚 Using Docker

- Starting

```bash
docker compose up -d
```

## Folder Structure

```md
.
├── 📂prisma/
│ └── schema.prisma
├── 📂src/
│ ├── 📂controller/
│ │ └── user.controller.ts
│ ├── 📂lib/
│ │ └── prisma.ts
│ ├── 📂middleware/
│ │ └── auth.ts
│ ├── 📂routes/
│ │ ├── index.ts
│ │ └── user.route.ts
│ ├── 📂types/
│ │ ├── express/
│ │ │ └── index.ts
│ │ └── index.ts
│ └── server.ts
├── .env.example
├── package.json
├── pnpm-lock.yaml
├── README.md
└── tsconfig.json
```
