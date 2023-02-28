import { graphql } from '@/gql';
import { ResultOf } from '@graphql-typed-document-node/core';
import Badge from './badge';
import Box from './box';
import Center from './center';
import Flex from './flex';
import Icon from './icon';
import Image from './image';
import Text from './text';

export const EntryFragment = graphql(/* GraphQL */ `
  fragment EntryFragment on Entry {
    __typename
    sys {
      id
    }
  }
`);

type Props = {
  children:
    | ResultOf<typeof EntryFragment>
    | (ResultOf<typeof EntryFragment> | null)[]
    | null
    | undefined;
};

export default function Traverse(props: Props) {
  if (props.children == null) {
    return null;
  } else if (Array.isArray(props.children)) {
    return (
      <>
        {props.children.map((child) => (
          <Traverse key={child?.sys.id}>{child}</Traverse>
        ))}
      </>
    );
  }

  switch (props.children.__typename) {
    case 'Badge':
      // @ts-expect-error Server Component
      return <Badge {...props.children.sys} />;
    case 'Box':
      // @ts-expect-error Server Component
      return <Box {...props.children.sys} />;
    case 'Center':
      // @ts-expect-error Server Component
      return <Center {...props.children.sys} />;
    case 'Flex':
      // @ts-expect-error Server Component
      return <Flex {...props.children.sys} />;
    case 'Icon':
      // @ts-expect-error Server Component
      return <Icon {...props.children.sys} />;
    case 'Image':
      // @ts-expect-error Server Component
      // eslint-disable-next-line jsx-a11y/alt-text
      return <Image {...props.children.sys} />;
    case 'Text':
      // @ts-expect-error Server Component
      return <Text {...props.children.sys} />;
    default:
      return null;
  }
}
