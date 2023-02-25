import { graphql } from '@/gql';
import { client } from '@/lib/client';
import * as chakra from '@/lib/chakra-ui';
import { Parser } from 'html-to-react';

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
    <chakra.Icon color={color.name} fill="current" {...attributes}>
      {children}
    </chakra.Icon>
  );
}
