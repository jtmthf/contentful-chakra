import { graphql } from '@/gql';
import { client } from '@/lib/client';
import tailwindConfig from '@/tailwind.config';
import resolveConfig from 'tailwindcss/resolveConfig';
import { RecursiveKeyValuePair } from 'tailwindcss/types/config';
import Traverse from './traverse';

const fullConfig = resolveConfig(tailwindConfig);

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
    <span
      className="inline-block whitespace-nowrap align-middle px-1 rounded-sm uppercase text-xs font-bold bg-[var(--badge-bg)] text-[var(--badge-color)]"
      style={{
        '--badge-bg': (
          fullConfig.theme?.colors?.[colorScheme.name] as RecursiveKeyValuePair
        )['100'] as string,
        '--badge-color': (
          fullConfig.theme?.colors?.[colorScheme.name] as RecursiveKeyValuePair
        )['800'] as string,
      }}
    >
      <Traverse>{childrenCollection?.items}</Traverse>
    </span>
  );
}
