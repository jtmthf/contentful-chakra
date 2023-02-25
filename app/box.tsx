import { graphql } from '@/gql';
import { client } from '@/lib/client';
import * as chakra from '@/lib/chakra-ui';
import { pickDefined } from '@/lib/pick-defined';
import Traverse from './traverse';

type Props = {
  id: string;
};

const boxEntry = graphql(/* GraphQL */ `
  query BoxEntry($id: String!, $preview: Boolean) {
    box(id: $id, preview: $preview) {
      p
      maxW
      borderWidth
      childrenCollection {
        items {
          ...EntryFragment
        }
      }
    }
  }
`);

export default async function Box({ id }: Props) {
  const { data } = await client
    .query(boxEntry, {
      id,
      preview: true,
    })
    .toPromise();

  const { childrenCollection, ...props } = data?.box ?? {};

  return (
    <chakra.Box {...pickDefined(props)}>
      <Traverse>{childrenCollection?.items}</Traverse>
    </chakra.Box>
  );
}
