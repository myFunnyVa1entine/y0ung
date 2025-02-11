import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>y0ung</title>
        <link rel="stylesheet" href="/styles.css" />
        {/* darumadrop */}
        <link
          href="https://fonts.googleapis.com/css2?family=Darumadrop+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body class="antialiased font-darumadrop">
        <Component />
      </body>
    </html>
  );
}
