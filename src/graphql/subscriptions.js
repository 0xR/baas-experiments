// this is an auto generated file. This will be overwritten
import gql from "graphql-tag";

export const OnCreateSession = gql`
  subscription OnCreateSession {
    onCreateSession {
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
export const OnUpdateSession = gql`
  subscription OnUpdateSession {
    onUpdateSession {
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
export const OnDeleteSession = gql`
  subscription OnDeleteSession {
    onDeleteSession {
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
