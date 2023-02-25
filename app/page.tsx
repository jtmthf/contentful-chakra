import { graphql } from '@/gql';
import { client } from '@/lib/client';
import Traverse from './traverse';

const pageEntry = graphql(/* GraphQL */ `
  query PageEntryQuery($id: String!, $preview: Boolean) {
    page(id: $id, preview: $preview) {
      childrenCollection {
        items {
          ...EntryFragment
        }
      }
    }
  }
`);

export default async function Home() {
  const { data } = await client
    .query(pageEntry, {
      id: '5DdcIjMPPV5vSJMffvC3Cx',
      preview: true,
    })
    .toPromise();

  return (
    <main>
      <Traverse>{data?.page?.childrenCollection?.items}</Traverse>
    </main>
  );
}
