/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateSessionInput = {
  startsAt: string,
  endsAt: string,
  name: string,
  description: string,
};

export type UpdateSessionInput = {
  id: string,
  startsAt?: string | null,
  endsAt?: string | null,
  name?: string | null,
  description?: string | null,
};

export type DeleteSessionInput = {
  id?: string | null,
};

export type ModelSessionFilterInput = {
  id?: ModelIDFilterInput | null,
  startsAt?: ModelStringFilterInput | null,
  endsAt?: ModelStringFilterInput | null,
  name?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  and?: Array< ModelSessionFilterInput | null > | null,
  or?: Array< ModelSessionFilterInput | null > | null,
  not?: ModelSessionFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type SearchableSessionFilterInput = {
  id?: SearchableIDFilterInput | null,
  startsAt?: SearchableStringFilterInput | null,
  endsAt?: SearchableStringFilterInput | null,
  name?: SearchableStringFilterInput | null,
  description?: SearchableStringFilterInput | null,
  and?: Array< SearchableSessionFilterInput | null > | null,
  or?: Array< SearchableSessionFilterInput | null > | null,
  not?: SearchableSessionFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
};

export type SearchableSessionSortInput = {
  field?: SearchableSessionSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableSessionSortableFields {
  id = "id",
  startsAt = "startsAt",
  endsAt = "endsAt",
  name = "name",
  description = "description",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type CreateSessionMutationVariables = {
  input: CreateSessionInput,
};

export type CreateSessionMutation = {
  createSession:  {
    __typename: "Session",
    id: string,
    startsAt: string,
    endsAt: string,
    name: string,
    description: string,
    location:  {
      __typename: "Location",
      name: string,
      capacity: number,
    },
    attendees:  Array< {
      __typename: "Attendee",
      name: string,
    } >,
  } | null,
};

export type UpdateSessionMutationVariables = {
  input: UpdateSessionInput,
};

export type UpdateSessionMutation = {
  updateSession:  {
    __typename: "Session",
    id: string,
    startsAt: string,
    endsAt: string,
    name: string,
    description: string,
    location:  {
      __typename: "Location",
      name: string,
      capacity: number,
    },
    attendees:  Array< {
      __typename: "Attendee",
      name: string,
    } >,
  } | null,
};

export type DeleteSessionMutationVariables = {
  input: DeleteSessionInput,
};

export type DeleteSessionMutation = {
  deleteSession:  {
    __typename: "Session",
    id: string,
    startsAt: string,
    endsAt: string,
    name: string,
    description: string,
    location:  {
      __typename: "Location",
      name: string,
      capacity: number,
    },
    attendees:  Array< {
      __typename: "Attendee",
      name: string,
    } >,
  } | null,
};

export type GetSessionQueryVariables = {
  id: string,
};

export type GetSessionQuery = {
  getSession:  {
    __typename: "Session",
    id: string,
    startsAt: string,
    endsAt: string,
    name: string,
    description: string,
    location:  {
      __typename: "Location",
      name: string,
      capacity: number,
    },
    attendees:  Array< {
      __typename: "Attendee",
      name: string,
    } >,
  } | null,
};

export type ListSessionsQueryVariables = {
  filter?: ModelSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSessionsQuery = {
  listSessions:  {
    __typename: "ModelSessionConnection",
    items:  Array< {
      __typename: "Session",
      id: string,
      startsAt: string,
      endsAt: string,
      name: string,
      description: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type SearchSessionsQueryVariables = {
  filter?: SearchableSessionFilterInput | null,
  sort?: SearchableSessionSortInput | null,
  limit?: number | null,
  nextToken?: number | null,
};

export type SearchSessionsQuery = {
  searchSessions:  {
    __typename: "SearchableSessionConnection",
    items:  Array< {
      __typename: "Session",
      id: string,
      startsAt: string,
      endsAt: string,
      name: string,
      description: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateSessionSubscription = {
  onCreateSession:  {
    __typename: "Session",
    id: string,
    startsAt: string,
    endsAt: string,
    name: string,
    description: string,
    location:  {
      __typename: "Location",
      name: string,
      capacity: number,
    },
    attendees:  Array< {
      __typename: "Attendee",
      name: string,
    } >,
  } | null,
};

export type OnUpdateSessionSubscription = {
  onUpdateSession:  {
    __typename: "Session",
    id: string,
    startsAt: string,
    endsAt: string,
    name: string,
    description: string,
    location:  {
      __typename: "Location",
      name: string,
      capacity: number,
    },
    attendees:  Array< {
      __typename: "Attendee",
      name: string,
    } >,
  } | null,
};

export type OnDeleteSessionSubscription = {
  onDeleteSession:  {
    __typename: "Session",
    id: string,
    startsAt: string,
    endsAt: string,
    name: string,
    description: string,
    location:  {
      __typename: "Location",
      name: string,
      capacity: number,
    },
    attendees:  Array< {
      __typename: "Attendee",
      name: string,
    } >,
  } | null,
};
