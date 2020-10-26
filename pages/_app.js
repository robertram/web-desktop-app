import Head from 'next/head';
import { Reset } from 'styled-reset'
import { useRouter } from 'next/router'
import styled from 'styled-components';
import GlobalStyle from '../static/css/GlobalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      </Head>
      <Reset />
      <GlobalStyle />
      <styles.App className="App">
        <div className="AppContent">
          <Component {...pageProps} />
        </div>
      </styles.App>
    </>
  )
}

const styles = {};

styles.App = styled.div`
  height: 100%;
  display: flex;
  .SideBarContent {
    min-height: 100vh;
  }
  .SideBarContent,
  .Search
   {
    ${props =>
      props.hideSidebar
        ? `
          display: none;
          `
        : ``
      };
  }
  .AppContent {
    flex: 1;
    width: 0;
  }
`;

export default MyApp
