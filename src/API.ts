/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateSessionInput = {
  date: string,
  name: string,
  description: string,
};

export type UpdateSessionInput = {
  id: string,
  date?: string | null,
  name?: string | null,
  description?: string | null,
};

export type DeleteSessionInput = {
  id?: string | null,
};

export type ModelSessionFilterInput = {
  id?: ModelIDFilterInput | null,
  date?: ModelStringFilterInput | null,
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

export type CreateSessionMutationVariables = {
  input: CreateSessionInput,
};

export type CreateSessionMutation = {
  createSession:  {
    __typename: "Session",
    id: string,
    date: string,
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
    date: string,
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
    date: string,
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
    date: string,
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
      date: string,
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
    date: string,
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
    date: string,
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
    date: string,
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
