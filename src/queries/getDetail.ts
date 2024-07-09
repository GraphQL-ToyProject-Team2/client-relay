import { graphql } from 'react-relay';

const getDetail = graphql`
  query getDetailQuery($id: ID!) {
    accommodation(id: $id) {
      title
      description
      price
      host {
        id
        name
        avatar
        bio
      }
      location
      images
      isLiked
    }
  }
`;

export default getDetail;
