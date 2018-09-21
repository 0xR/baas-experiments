// this is an auto generated file. This will be overwritten
import gql from "graphql-tag";

export const GetSession = gql`
  query GetSession($id: ID!) {
    getSession(id: $id) {
      id
      startsAt
      endsAt
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
export const ListSessions = gql`
  query ListSessions(
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        startsAt
        endsAt
        name
        description
      }
      nextToken
    }
  }
`;
export const SearchSessions = gql`
  query SearchSessions(
    $filter: SearchableSessionFilterInput
    $sort: SearchableSessionSortInput
    $limit: Int
    $nextToken: Int
  ) {
    searchSessions(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        startsAt
        endsAt
        name
        description
      }
      nextToken
    }
  }
`;
