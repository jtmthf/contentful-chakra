import { graphql } from '@/gql';
import { client } from '@/lib/client';
import * as chakra from '@/lib/chakra-ui';
import { pickDefined } from '@/lib/pick-defined';
import Markdown from 'markdown-to-jsx';

type Props = {
  id: string;
};

const textEntry = graphql(/* GraphQL */ `
  query TextEntry($id: String!, $preview: Boolean) {
    text(id: $id, preview: $preview) {
      ml
      textTransform
      fontSize
      fontWeight
      mt
      lineHeight
      color
      children
    }
  }
`);

export default async function Text({ id }: Props) {
  const { data } = await client
    .query(textEntry, {
      id,
      preview: true,
    })
    .toPromise();

  const { children, color, ...props } = data?.text ?? {};

  return (
    // @ts-ignore
    <chakra.Text color={color?.name} {...pickDefined(props)}>
      <Markdown>{children ?? ''}</Markdown>
    </chakra.Text>
  );
}
