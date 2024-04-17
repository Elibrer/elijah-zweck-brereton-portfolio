import { gql } from "@apollo/client";

// get all users
// export const GET_USERS = gql`
//   query GetUsers {
//     getUsers {
//       _id
//       country
//       email
//       enquiries
//       firstName
//       lastName
//       phoneNumber
//     }
//   }
// `;
// get a single user by username
export const GET_USER = gql`
  query GetUser($id: ID!) {
    getUser(_id: $id) {
      _id
      country
      email
      enquiries
      firstName
      lastName
      phoneNumber
    }
  }
`;
