## Development

To get started with development first clone the repo and start up the
devcontainer.

Start Copfuse Client with:

```bash
yarn
yarn dev
```

Create a root .env file and add the following to it from your supabase instance:

```bash
SUPABASE_URL=http://host.docker.internal:54321
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=

```

Exposed Endpoints

```bash
http://localhost:3000

```

## Local Development (Outside the dev container)

#### Install Homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

#### Install Yarn and set to the latest stable version

```bash
brew install yarn

yarn set version stable
```

Create a root .env file and add the following to it from your supabase instance:

```bash
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=

```

Start Copfuse Client with:

```bash
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view
the app.
