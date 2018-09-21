import React from 'react';
import { Fragment } from 'react';
import Amplify, { graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

const CreatedSessionSubscription = `subscription CreatedSession {
  onCreateSession {
    name
  }
}`;

const SessionListQuery = `  query ListSessions(
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        startsAt
        name
        description
      }
      nextToken
    }
  }
`;

const CreateSessionMutation = `
mutation CreateSession(
  $name:String!, 
  $startsAt: AWSDateTime!
  $endsAt: AWSDateTime!
){
  createSession(input:{
    name: $name
    description: "asdfasdf"
    startsAt: $startsAt
    endsAt: $endsAt
  }) {
      id
      endsAt
      startsAt
      name
      description
  }
}
`;

const SearchQuery = `query($query:String!) {
  searchSessions(filter:{
    or: [{
      description: {
        matchPhrasePrefix: $query
      }
    },
    {
      name: {
        matchPhrasePrefix: $query
      }
    }]
  }) {
    items {
      name
      startsAt
      description
    }
  }
}`;

const Json = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

class CreateSession extends React.Component {
  state = {
    lastSessionCreated: null
  };

  render() {
    return (<Connect mutation={graphqlOperation(CreateSessionMutation)}>
      {({ mutation }) => (<Fragment>
        <button
          onClick={async () => {
            this.setState({
              lastSessionCreated: await mutation({
                name: 'Some name', startsAt: new Date(), endsAt: new Date()
              })
            });
          }}
        >
          Create Session
        </button>
        {this.state.lastSessionCreated && (<Json data={this.state.lastSessionCreated}/>)}
      </Fragment>)}
    </Connect>);
  }
}

class Tabs extends React.Component {
  state = {
    selectedTab: 'list'
  };

  render() {
    const { selectedTab } = this.state;

    if (selectedTab === 'list') {
      return <SessionList/>
    }

    if (selectedTab === 'search') {
      return <SessionSearchList/>
    }
    return null;
  }
}

const SessionList = () => (<Connect
  query={graphqlOperation(SessionListQuery)}
  subscription={graphqlOperation(CreatedSessionSubscription)}
  onSubscriptionMsg={(prev, { onCreateSession }) => {
    return {
      listSessions: {
        ...prev.listSessions, items: [onCreateSession, ...prev.listSessions.items]
      }
    };
  }}
>
  {data => <Json data={data}/>}
</Connect>);

class SessionSearchList extends React.Component {
  state = {
    query: ''
  }

  render() {
    const { query } = this.state;
    return (<Fragment>
      <input onChange={(e) => {
        this.setState({ query: e.target.value })
      }}/>
      <Connect
        query={graphqlOperation(SearchQuery, { query })}
        subscription={graphqlOperation(CreatedSessionSubscription)}
        onSubscriptionMsg={(prev, { onCreateSession }) => {
          return {
            listSessions: {
              ...prev.listSessions, items: [onCreateSession, ...prev.listSessions.items]
            }
          };
        }}
      >
        {data => <Json data={data}/>}
      </Connect>
    </Fragment>)
  }
}


class App extends React.Component {
  render() {
    return (<Fragment>
      <CreateSession/>
      <SessionList/>
      <SessionSearchList/>
    </Fragment>);
  }
}

export default App;
