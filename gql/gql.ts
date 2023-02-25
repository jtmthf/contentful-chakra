/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  query AspectRatioEntry($id: String!, $preview: Boolean) {\n    aspectRatio(id: $id, preview: $preview) {\n      maxW\n      ratio\n    }\n  }\n": types.AspectRatioEntryDocument,
    "\n  query BadgeEntry($id: String!, $preview: Boolean) {\n    badge(id: $id, preview: $preview) {\n      colorScheme\n      childrenCollection {\n        items {\n          ...EntryFragment\n        }\n      }\n    }\n  }\n": types.BadgeEntryDocument,
    "\n  query BoxEntry($id: String!, $preview: Boolean) {\n    box(id: $id, preview: $preview) {\n      p\n      maxW\n      borderWidth\n      childrenCollection {\n        items {\n          ...EntryFragment\n        }\n      }\n    }\n  }\n": types.BoxEntryDocument,
    "\n  query CenterEntry($id: String!, $preview: Boolean) {\n    center(id: $id, preview: $preview) {\n      h\n      childrenCollection {\n        items {\n          ...EntryFragment\n        }\n      }\n    }\n  }\n": types.CenterEntryDocument,
    "\n  query FlexEntry($id: String!, $preview: Boolean) {\n    flex(id: $id, preview: $preview) {\n      align\n      mt\n      childrenCollection {\n        items {\n          ...EntryFragment\n        }\n      }\n    }\n  }\n": types.FlexEntryDocument,
    "\n  query IconEntry($id: String!, $preview: Boolean) {\n    icon(id: $id, preview: $preview) {\n      src {\n        url\n      }\n      color\n    }\n  }\n": types.IconEntryDocument,
    "\n  query ImageEntry($id: String!, $preview: Boolean) {\n    image(id: $id, preview: $preview) {\n      borderRadius\n      priority\n      height\n      width\n      src {\n        description\n        height\n        width\n        url\n      }\n    }\n  }\n": types.ImageEntryDocument,
    "\n  query PageEntryQuery($id: String!, $preview: Boolean) {\n    page(id: $id, preview: $preview) {\n      childrenCollection {\n        items {\n          ...EntryFragment\n        }\n      }\n    }\n  }\n": types.PageEntryQueryDocument,
    "\n  query TextEntry($id: String!, $preview: Boolean) {\n    text(id: $id, preview: $preview) {\n      ml\n      textTransform\n      fontSize\n      fontWeight\n      mt\n      lineHeight\n      color\n      children\n    }\n  }\n": types.TextEntryDocument,
    "\n  fragment EntryFragment on Entry {\n    __typename\n    sys {\n      id\n    }\n  }\n": types.EntryFragmentFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AspectRatioEntry($id: String!, $preview: Boolean) {\n    aspectRatio(id: $id, preview: $preview) {\n      maxW\n      ratio\n    }\n  }\n"): (typeof documents)["\n  query AspectRatioEntry($id: String!, $preview: Boolean) {\n    aspectRatio(id: $id, preview: $preview) {\n      maxW\n      ratio\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query BadgeEntry($id: String!, $preview: Boolean) {\n    badge(id: $id, preview: $preview) {\n      colorScheme\n      childrenCollection {\n        items {\n          ...EntryFragment\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query BadgeEntry($id: String!, $preview: Boolean) {\n    badge(id: $id, preview: $preview) {\n      colorScheme\n      childrenCollection {\n        items {\n          ...EntryFragment\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query BoxEntry($id: String!, $preview: Boolean) {\n    box(id: $id, preview: $preview) {\n      p\n      maxW\n      borderWidth\n      childrenCollection {\n        items {\n          ...EntryFragment\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query BoxEntry($id: String!, $preview: Boolean) {\n    box(id: $id, preview: $preview) {\n      p\n      maxW\n      borderWidth\n      childrenCollection {\n        items {\n          ...EntryFragment\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query CenterEntry($id: String!, $preview: Boolean) {\n    center(id: $id, preview: $preview) {\n      h\n      childrenCollection {\n        items {\n          ...EntryFragment\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query CenterEntry($id: String!, $preview: Boolean) {\n    center(id: $id, preview: $preview) {\n      h\n      childrenCollection {\n        items {\n          ...EntryFragment\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query FlexEntry($id: String!, $preview: Boolean) {\n    flex(id: $id, preview: $preview) {\n      align\n      mt\n      childrenCollection {\n        items {\n          ...EntryFragment\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query FlexEntry($id: String!, $preview: Boolean) {\n    flex(id: $id, preview: $preview) {\n      align\n      mt\n      childrenCollection {\n        items {\n          ...EntryFragment\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query IconEntry($id: String!, $preview: Boolean) {\n    icon(id: $id, preview: $preview) {\n      src {\n        url\n      }\n      color\n    }\n  }\n"): (typeof documents)["\n  query IconEntry($id: String!, $preview: Boolean) {\n    icon(id: $id, preview: $preview) {\n      src {\n        url\n      }\n      color\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ImageEntry($id: String!, $preview: Boolean) {\n    image(id: $id, preview: $preview) {\n      borderRadius\n      priority\n      height\n      width\n      src {\n        description\n        height\n        width\n        url\n      }\n    }\n  }\n"): (typeof documents)["\n  query ImageEntry($id: String!, $preview: Boolean) {\n    image(id: $id, preview: $preview) {\n      borderRadius\n      priority\n      height\n      width\n      src {\n        description\n        height\n        width\n        url\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PageEntryQuery($id: String!, $preview: Boolean) {\n    page(id: $id, preview: $preview) {\n      childrenCollection {\n        items {\n          ...EntryFragment\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query PageEntryQuery($id: String!, $preview: Boolean) {\n    page(id: $id, preview: $preview) {\n      childrenCollection {\n        items {\n          ...EntryFragment\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query TextEntry($id: String!, $preview: Boolean) {\n    text(id: $id, preview: $preview) {\n      ml\n      textTransform\n      fontSize\n      fontWeight\n      mt\n      lineHeight\n      color\n      children\n    }\n  }\n"): (typeof documents)["\n  query TextEntry($id: String!, $preview: Boolean) {\n    text(id: $id, preview: $preview) {\n      ml\n      textTransform\n      fontSize\n      fontWeight\n      mt\n      lineHeight\n      color\n      children\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment EntryFragment on Entry {\n    __typename\n    sys {\n      id\n    }\n  }\n"): (typeof documents)["\n  fragment EntryFragment on Entry {\n    __typename\n    sys {\n      id\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;