import { graphql } from 'react-relay';

export const getWishlist = graphql`
  query getWishlistQuery {
    accommodations {
      id
      title
      description
      price
      host {
        name
      }
      images
      isLiked
    }
  }
`;

export default getWishlist;
