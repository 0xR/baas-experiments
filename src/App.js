import React from 'react';
import Amplify, { graphqlOperation }  from "aws-amplify";
import { Connect } from "aws-amplify-react";
import awsExports from './aws-exports';

Amplify.configure(awsExports);

const ListSessions = `  query ListSessions(
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

class App extends React.Component {

    render() {

        const ListView = ({ events }) => (
            <div>
                <h3>All events</h3>
                <ul>
                    {events && events.length && events.map(event => <li key={event.id}>{event.name} ({event.id})</li>)}
                </ul>
            </div>
        );

        console.log({
            ListSessions
        });
        return (
            <Connect query={graphqlOperation(ListSessions)}>
                {(...args) => (
                    <pre>{JSON.stringify(args, null, 2)}</pre>
                )}
            </Connect>
        )
    }
}

export default App;
