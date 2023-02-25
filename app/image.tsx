import { graphql } from '@/gql';
import { client } from '@/lib/client';
import * as chakra from '@/lib/chakra-ui';
import NextImage from 'next/image';
import { pickDefined } from '@/lib/pick-defined';

type Props = {
  id: string;
};

const imageEntry = graphql(/* GraphQL */ `
  query ImageEntry($id: String!, $preview: Boolean) {
    image(id: $id, preview: $preview) {
      borderRadius
      priority
      height
      width
      src {
        description
        height
        width
        url
      }
    }
  }
`);

export default async function Image({ id }: Props) {
  const { data } = await client
    .query(imageEntry, {
      id,
      preview: true,
    })
    .toPromise();

  if (data?.image?.src == null) {
    return null;
  }

  const { src, priority, height, width, ...props } = data.image;

  return (
    <chakra.Box {...pickDefined(props)} overflow="hidden">
      <NextImage
        src={src.url!}
        alt={src.description!}
        width={width ?? src.width!}
        height={height ?? src.height!}
        priority={priority ?? false}
      />
    </chakra.Box>
  );
}
