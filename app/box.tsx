import { graphql } from '@/gql';
import { client } from '@/lib/client';
import tailwindConfig from '@/tailwind.config';
import resolveConfig from 'tailwindcss/resolveConfig';
import Traverse from './traverse';

const fullConfig = resolveConfig(tailwindConfig);

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

  const { childrenCollection, p, maxW, borderWidth } = data?.box ?? {};

  return (
    <div
      className="p-[var(--p)] max-w-[var(--max-w)] [border-width:var(--border-width)]"
      style={{
        '--p': fullConfig.theme?.padding?.[p as string] as string,
        '--max-w': maxW as string,
        '--border-width': borderWidth as string,
      }}
    >
      <Traverse>{childrenCollection?.items}</Traverse>
    </div>
  );
}
