import { graphql } from 'react-relay';

const getAccommodations = graphql`
  query getAccommodationsQuery {
    accommodations {
      id
      title
      description
      price
      host {
        name
      }
      images
    }
  }
`;

export default getAccommodations;
