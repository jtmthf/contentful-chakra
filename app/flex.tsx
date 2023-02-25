import { graphql } from '@/gql';
import { client } from '@/lib/client';
import * as chakra from '@/lib/chakra-ui';
import { pickDefined } from '@/lib/pick-defined';
import Traverse from './traverse';

type Props = {
  id: string;
};

const flexEntry = graphql(/* GraphQL */ `
  query FlexEntry($id: String!, $preview: Boolean) {
    flex(id: $id, preview: $preview) {
      align
      mt
      childrenCollection {
        items {
          ...EntryFragment
        }
      }
    }
  }
`);

export default async function Flex({ id }: Props) {
  const { data } = await client
    .query(flexEntry, {
      id,
      preview: true,
    })
    .toPromise();

  const { childrenCollection, ...props } = data?.flex ?? {};

  return (
    <chakra.Flex {...pickDefined(props)}>
      <Traverse>{childrenCollection?.items}</Traverse>
    </chakra.Flex>
  );
}
