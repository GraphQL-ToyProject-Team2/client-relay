import { graphql } from 'react-relay';

const likeAccommodation = graphql`
  mutation likeAccommodationMutation($id: ID!) {
    likeAccommodation(id: $id) {
      isLiked
    }
  }
`;

export default likeAccommodation;
