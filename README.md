# DHIS2 Public Portal PoC

What is this PoC about?

-   A minimal working PoC for a more secure Public Portal for visualization of DHIS2 data.

-   Leveraging the new Next.js Server Actions ('use server') to make authorized requests to the middleware via a secret API Key.

-   The API Key is securely stored server-side in an environment variable and referenced by the Next.js Server Action ('use server') code without exposing it to the client.

-   The middleware only provides the requested data after successful validation of the API Key.

-   Authentication to the DHIS2 RESTful API is securely handled by the middleware.

## Pre-requisites

-   Node.js >= v18.17.0

# Installation

1. Clone the repository to your local machine:

```bash
git clone git@github.com:0xafrogeek/dhis2-public-portal-poc.git
```

2. Change directory to the project folder:

```bash
cd dhis2-public-portal-poc
```

3. Install packages:

```bash
npm i
```

4. Make sure the nodejs/express [middleware](github.com/0xafrogeek/dhis2-middleware-poc) is up and running.

5. Copy the `.env.example` file to `.env.local` and update the values accordingly.

```bash
cp .env.example .env.local
```

6. Run the project in development mode:

```bash
npm run dev
```
