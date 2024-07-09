import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import Detail from './pages/Detail';
import styled from 'styled-components';
import GlobalStyle from './styles/globalStyles';
import WishList from './pages/WishList';
import { loadQuery, RelayEnvironmentProvider } from 'react-relay';
import { getAccommodationsQuery } from './queries/__generated__/getAccommodationsQuery.graphql';
import environment from './relay/environment';
import getAccommodations from './queries/getAccommodations';
import { getDetailQuery } from './queries/__generated__/getDetailQuery.graphql';
import getDetail from './queries/getDetail';
import DetailWrapper from './components/DetailWrapper';
import { Suspense } from 'react';
import { getWishlistQuery } from './queries/__generated__/getWishlistQuery.graphql';
import getWishlist from './queries/getWishlist';

const MobileContainer = styled.div`
  font-family: 'Pretendard Variable';
  display: flex;

  position: relative;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;
  background-color: #fff;

  max-width: 375px;
  min-height: 100vh;
`;

const initialQueryRefMain = loadQuery<getAccommodationsQuery>(environment, getAccommodations, {});
const initialQueryRefWishlist = loadQuery<getWishlistQuery>(environment, getWishlist, {});

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Main queryRef={initialQueryRefMain} /> },
    { path: '/detail/:id', element: <DetailWrapper /> },
    { path: '/wishlist', element: <WishList queryRef={initialQueryRefWishlist} /> },
  ]);
  return (
    <RelayEnvironmentProvider environment={environment}>
      <MobileContainer>
        <GlobalStyle />
        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </MobileContainer>
    </RelayEnvironmentProvider>
  );
}

export default App;
