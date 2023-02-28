import { graphql } from '@/gql';
import { client } from '@/lib/client';
import tailwindConfig from '@/tailwind.config';
import resolveConfig from 'tailwindcss/resolveConfig';
import Traverse from './traverse';

const fullConfig = resolveConfig(tailwindConfig);

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

  const { childrenCollection, h } = data?.center ?? {};

  return (
    <div
      className="flex items-center justify-center h-[var(--h)]"
      style={{
        '--h': h as string,
      }}
    >
      <Traverse>{childrenCollection?.items}</Traverse>
    </div>
  );
}
