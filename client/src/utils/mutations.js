import { gql } from "@apollo/client";

// add user
export const ADD_USER = gql`
  mutation AddUser($enquiries: [String], $phoneNumber: String, $country: String, $email: String, $lastName: String, $firstName: String) {
  addUser(enquiries: $enquiries, phoneNumber: $phoneNumber, country: $country, email: $email, lastName: $lastName, firstName: $firstName) {
    phoneNumber
    lastName
    firstName
    enquiries
    email
    country
    _id
  }
}
`;

//  Update user
export const UPDATE_USER = gql`
  mutation UpdateUser($enquiries: [String], $phoneNumber: String, $country: String, $email: String, $lastName: String, $firstName: String, $id: ID) {
  updateUser(enquiries: $enquiries, phoneNumber: $phoneNumber, country: $country, email: $email, lastName: $lastName, firstName: $firstName, _id: $id) {
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

//  delete user
export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
  deleteUser(_id: $id) {
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