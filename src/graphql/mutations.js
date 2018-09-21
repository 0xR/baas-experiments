// this is an auto generated file. This will be overwritten
import gql from "graphql-tag";

export const CreateSession = gql`
  mutation CreateSession($input: CreateSessionInput!) {
    createSession(input: $input) {
      id
      date
      name
      description
      location {
        name
        capacity
      }
      attendees {
        name
      }
    }
  }
`;
export const UpdateSession = gql`
  mutation UpdateSession($input: UpdateSessionInput!) {
    updateSession(input: $input) {
      id
      date
      name
      description
      location {
        name
        capacity
      }
      attendees {
        name
      }
    }
  }
`;
export const DeleteSession = gql`
  mutation DeleteSession($input: DeleteSessionInput!) {
    deleteSession(input: $input) {
      id
      date
      name
      description
      location {
        name
        capacity
      }
      attendees {
        name
      }
    }
  }
`;
