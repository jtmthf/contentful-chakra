import { graphql } from '@/gql';
import { client } from '@/lib/client';
import Markdown from 'markdown-to-jsx';
import tailwindConfig from '@/tailwind.config';
import resolveConfig from 'tailwindcss/resolveConfig';
import { RecursiveKeyValuePair } from 'tailwindcss/types/config';

const fullConfig = resolveConfig(tailwindConfig);

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

  const {
    children,
    color,
    ml,
    textTransform,
    fontSize,
    fontWeight,
    mt,
    lineHeight,
  } = data?.text ?? {};

  const [colorFamily, colorShade] = color?.name?.split('.') ?? [];

  return (
    <p
      className="text-[var(--color)] ml-[var(--ml)] mt-[var(--mt)] [text-transform:var(--text-transform)] [font-size:var(--font-size)] [font-weight:var(--font-weight)] leading-[var(--line-height)]"
      style={{
        '--color': (
          fullConfig.theme?.colors?.[colorFamily] as RecursiveKeyValuePair
        )?.[colorShade] as string,
        '--ml': fullConfig.theme?.margin?.[ml as string] as string,
        '--mt': fullConfig.theme?.margin?.[mt as string] as string,
        '--text-transform': textTransform as string,
        '--font-size': fullConfig.theme?.fontSize?.[
          fontSize as string
        ] as string,
        '--font-weight': fullConfig.theme?.fontWeight?.[
          fontWeight as string
        ] as string,
        '--line-height': fullConfig.theme?.lineHeight?.[
          lineHeight as string
        ] as string,
      }}
    >
      <Markdown>{children ?? ''}</Markdown>
    </p>
  );
}
