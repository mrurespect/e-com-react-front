import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query {
  getProducts{
    id,
    name,
    price,
    category{
        id,
        name
        }
    }
}
`;