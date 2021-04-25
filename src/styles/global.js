import { Global, css } from "@emotion/react";

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        :root {
          --poppins-bold: "Poppins", -apple-system;
          --purple: #845ef7;
        }
        html {
          height: 100%;
        }
        body {
          text-align: center;
          min-height: 100%;
        }
        a,
        a:visited,
        a:hover {
          text-decoration: none;
        }
        * {
          margin: 0;
          padding: 0;
          font-family: var(--poppins-bold);
        }
      `}
    />
  );
}
