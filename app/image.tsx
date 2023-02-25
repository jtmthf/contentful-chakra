import { graphql } from '@/gql';
import * as chakra from '@/lib/chakra-ui';
import { client } from '@/lib/client';
import { pickDefined } from '@/lib/pick-defined';
import NextImage from 'next/image';
import { getPlaiceholder } from 'plaiceholder';

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
  const { img, base64 } = await getPlaiceholder(src.url!, {
    size: 10,
  });

  return (
    <chakra.Box {...pickDefined(props)} overflow="hidden">
      <NextImage
        alt={src.description!}
        priority={priority ?? false}
        {...img}
        blurDataURL={base64}
        placeholder="blur"
      />
    </chakra.Box>
  );
}
