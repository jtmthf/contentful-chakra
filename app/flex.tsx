import { graphql } from '@/gql';
import { client } from '@/lib/client';
import tailwindConfig from '@/tailwind.config';
import resolveConfig from 'tailwindcss/resolveConfig';
import Traverse from './traverse';

const fullConfig = resolveConfig(tailwindConfig);

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

  const { childrenCollection, align, mt } = data?.flex ?? {};

  return (
    <div
      className="flex [align-items:var(--align)] mt-[var(--mt)]"
      style={{
        '--align': align as string,
        '--mt': fullConfig.theme?.margin?.[mt as string] as string,
      }}
    >
      <Traverse>{childrenCollection?.items}</Traverse>
    </div>
  );
}
