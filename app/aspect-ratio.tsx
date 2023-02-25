import { graphql } from '@/gql';
import { client } from '@/lib/client';
import * as chakra from '@/lib/chakra-ui';
import { pickDefined } from '@/lib/pick-defined';

type Props = {
  id: string;
};

const aspectRatioEntry = graphql(/* GraphQL */ `
  query AspectRatioEntry($id: String!, $preview: Boolean) {
    aspectRatio(id: $id, preview: $preview) {
      maxW
      ratio
    }
  }
`);

export default async function AspectRatio({ id }: Props) {
  const { data } = await client
    .query(aspectRatioEntry, {
      id,
      preview: true,
    })
    .toPromise();

  return <chakra.AspectRatio {...pickDefined(data?.aspectRatio)} />;
}
