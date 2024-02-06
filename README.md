# DHIS2 Public Portal PoC

-   A minimal working PoC for a more secure Public Portal for visualization of DHIS2 data.

-   Leveraging the new Next.js Server Actions ('use server') to make authenticated requests to the middleware with an API Key

-   The API Key is securely stored server-side in an environment variable and referenced by the Next.js Server Action ('use server') code without exposing it to the client.

-   The API Key is validated by the middleware and only provides the requested data if the key is valid

-   Authentication to the DHIS2 API is also securely handled by the middleware
