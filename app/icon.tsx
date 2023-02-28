import { graphql } from '@/gql';
import { client } from '@/lib/client';
import { Parser } from 'html-to-react';
import tailwindConfig from '@/tailwind.config';
import resolveConfig from 'tailwindcss/resolveConfig';
import { RecursiveKeyValuePair } from 'tailwindcss/types/config';

const fullConfig = resolveConfig(tailwindConfig);

type Props = {
  id: string;
};

const parser = new Parser();

const iconEntry = graphql(/* GraphQL */ `
  query IconEntry($id: String!, $preview: Boolean) {
    icon(id: $id, preview: $preview) {
      src {
        url
      }
      color
    }
  }
`);

export default async function Icon({ id }: Props) {
  const { data } = await client
    .query(iconEntry, {
      id,
      preview: true,
    })
    .toPromise();

  const { src, color } = data?.icon ?? {};

  const {
    props: { children, ...attributes },
  } = parser.parse(await (await fetch(src?.url!)).text());

  return (
    <svg
      className="h-[1em] w-[1em] fill-current text-[var(--color)]"
      style={{
        '--color': (
          fullConfig.theme?.colors?.[
            color.name.split('.')[0]
          ] as RecursiveKeyValuePair
        )[color.name.split('.')[1]],
      }}
      color={color.name}
      {...attributes}
    >
      {children}
    </svg>
  );
}
