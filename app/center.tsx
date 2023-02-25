import { graphql } from '@/gql';
import { client } from '@/lib/client';
import * as chakra from '@/lib/chakra-ui';
import { pickDefined } from '@/lib/pick-defined';
import Traverse from './traverse';

type Props = {
  id: string;
};

const centerEntry = graphql(/* GraphQL */ `
  query CenterEntry($id: String!, $preview: Boolean) {
    center(id: $id, preview: $preview) {
      h
      childrenCollection {
        items {
          ...EntryFragment
        }
      }
    }
  }
`);

export default async function Center({ id }: Props) {
  const { data } = await client
    .query(centerEntry, {
      id,
      preview: true,
    })
    .toPromise();

  const { childrenCollection, ...props } = data?.center ?? {};

  return (
    <chakra.Center {...pickDefined(props)}>
      <Traverse>{childrenCollection?.items}</Traverse>
    </chakra.Center>
  );
}
