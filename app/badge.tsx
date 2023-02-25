import { graphql } from '@/gql';
import * as chakra from '@/lib/chakra-ui';
import { client } from '@/lib/client';
import { pickDefined } from '@/lib/pick-defined';
import Traverse from './traverse';

type Props = {
  id: string;
};

const badgeEntry = graphql(/* GraphQL */ `
  query BadgeEntry($id: String!, $preview: Boolean) {
    badge(id: $id, preview: $preview) {
      colorScheme
      childrenCollection {
        items {
          ...EntryFragment
        }
      }
    }
  }
`);

export default async function Badge({ id }: Props) {
  const { data } = await client
    .query(badgeEntry, {
      id,
      preview: true,
    })
    .toPromise();

  const { childrenCollection, colorScheme } = data?.badge ?? {};

  return (
    <chakra.Badge colorScheme={colorScheme?.name}>
      <Traverse>{childrenCollection?.items}</Traverse>
    </chakra.Badge>
  );
}
