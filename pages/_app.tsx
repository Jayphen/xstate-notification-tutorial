import * as React from "react";
import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  // we will put our notification provider here
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default App;
