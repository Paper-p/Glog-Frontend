import { css, Global } from "@emotion/react";

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        html,
        body {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          background: #1a1b1e;
        }
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        p {
          margin: 0;
        }
      `}
    />
  );
};

export default GlobalStyle;
