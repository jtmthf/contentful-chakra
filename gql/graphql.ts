/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
};

/** AspectRatio component is used to embed responsive videos and maps, etc. [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/AspectRatio) */
export type AspectRatio = Entry & {
  __typename?: 'AspectRatio';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<AspectRatioLinkingCollections>;
  maxW?: Maybe<Scalars['String']>;
  ratio?: Maybe<Scalars['Float']>;
  sys: Sys;
};


/** AspectRatio component is used to embed responsive videos and maps, etc. [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/AspectRatio) */
export type AspectRatioLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** AspectRatio component is used to embed responsive videos and maps, etc. [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/AspectRatio) */
export type AspectRatioMaxWArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** AspectRatio component is used to embed responsive videos and maps, etc. [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/AspectRatio) */
export type AspectRatioRatioArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AspectRatioCollection = {
  __typename?: 'AspectRatioCollection';
  items: Array<Maybe<AspectRatio>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AspectRatioFilter = {
  AND?: InputMaybe<Array<InputMaybe<AspectRatioFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AspectRatioFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  maxW?: InputMaybe<Scalars['String']>;
  maxW_contains?: InputMaybe<Scalars['String']>;
  maxW_exists?: InputMaybe<Scalars['Boolean']>;
  maxW_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  maxW_not?: InputMaybe<Scalars['String']>;
  maxW_not_contains?: InputMaybe<Scalars['String']>;
  maxW_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ratio?: InputMaybe<Scalars['Float']>;
  ratio_exists?: InputMaybe<Scalars['Boolean']>;
  ratio_gt?: InputMaybe<Scalars['Float']>;
  ratio_gte?: InputMaybe<Scalars['Float']>;
  ratio_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  ratio_lt?: InputMaybe<Scalars['Float']>;
  ratio_lte?: InputMaybe<Scalars['Float']>;
  ratio_not?: InputMaybe<Scalars['Float']>;
  ratio_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type AspectRatioLinkingCollections = {
  __typename?: 'AspectRatioLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type AspectRatioLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AspectRatioOrder {
  MaxWAsc = 'maxW_ASC',
  MaxWDesc = 'maxW_DESC',
  RatioAsc = 'ratio_ASC',
  RatioDesc = 'ratio_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  iconCollection?: Maybe<IconCollection>;
  imageCollection?: Maybe<ImageCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsIconCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/badge) */
export type Badge = Entry & {
  __typename?: 'Badge';
  childrenCollection?: Maybe<BadgeChildrenCollection>;
  colorScheme?: Maybe<Scalars['JSON']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<BadgeLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/badge) */
export type BadgeChildrenCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/badge) */
export type BadgeColorSchemeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/badge) */
export type BadgeLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BadgeChildrenCollection = {
  __typename?: 'BadgeChildrenCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type BadgeCollection = {
  __typename?: 'BadgeCollection';
  items: Array<Maybe<Badge>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type BadgeFilter = {
  AND?: InputMaybe<Array<InputMaybe<BadgeFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BadgeFilter>>>;
  childrenCollection_exists?: InputMaybe<Scalars['Boolean']>;
  colorScheme_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type BadgeLinkingCollections = {
  __typename?: 'BadgeLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type BadgeLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum BadgeOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Box is the most abstract component on top of which all other Chakra UI components are built. By default, it renders a `div` element [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/box) */
export type Box = Entry & {
  __typename?: 'Box';
  borderWidth?: Maybe<Scalars['String']>;
  childrenCollection?: Maybe<BoxChildrenCollection>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<BoxLinkingCollections>;
  maxW?: Maybe<Scalars['String']>;
  p?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** Box is the most abstract component on top of which all other Chakra UI components are built. By default, it renders a `div` element [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/box) */
export type BoxBorderWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Box is the most abstract component on top of which all other Chakra UI components are built. By default, it renders a `div` element [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/box) */
export type BoxChildrenCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Box is the most abstract component on top of which all other Chakra UI components are built. By default, it renders a `div` element [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/box) */
export type BoxLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Box is the most abstract component on top of which all other Chakra UI components are built. By default, it renders a `div` element [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/box) */
export type BoxMaxWArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Box is the most abstract component on top of which all other Chakra UI components are built. By default, it renders a `div` element [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/box) */
export type BoxPArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type BoxChildrenCollection = {
  __typename?: 'BoxChildrenCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type BoxCollection = {
  __typename?: 'BoxCollection';
  items: Array<Maybe<Box>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type BoxFilter = {
  AND?: InputMaybe<Array<InputMaybe<BoxFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BoxFilter>>>;
  borderWidth?: InputMaybe<Scalars['String']>;
  borderWidth_contains?: InputMaybe<Scalars['String']>;
  borderWidth_exists?: InputMaybe<Scalars['Boolean']>;
  borderWidth_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  borderWidth_not?: InputMaybe<Scalars['String']>;
  borderWidth_not_contains?: InputMaybe<Scalars['String']>;
  borderWidth_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  childrenCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  maxW?: InputMaybe<Scalars['String']>;
  maxW_contains?: InputMaybe<Scalars['String']>;
  maxW_exists?: InputMaybe<Scalars['Boolean']>;
  maxW_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  maxW_not?: InputMaybe<Scalars['String']>;
  maxW_not_contains?: InputMaybe<Scalars['String']>;
  maxW_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  p?: InputMaybe<Scalars['String']>;
  p_contains?: InputMaybe<Scalars['String']>;
  p_exists?: InputMaybe<Scalars['Boolean']>;
  p_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  p_not?: InputMaybe<Scalars['String']>;
  p_not_contains?: InputMaybe<Scalars['String']>;
  p_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type BoxLinkingCollections = {
  __typename?: 'BoxLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type BoxLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum BoxOrder {
  BorderWidthAsc = 'borderWidth_ASC',
  BorderWidthDesc = 'borderWidth_DESC',
  MaxWAsc = 'maxW_ASC',
  MaxWDesc = 'maxW_DESC',
  PAsc = 'p_ASC',
  PDesc = 'p_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Center is a layout component that centers its child within itself. [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/center) */
export type Center = Entry & {
  __typename?: 'Center';
  childrenCollection?: Maybe<CenterChildrenCollection>;
  contentfulMetadata: ContentfulMetadata;
  h?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<CenterLinkingCollections>;
  sys: Sys;
};


/** Center is a layout component that centers its child within itself. [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/center) */
export type CenterChildrenCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Center is a layout component that centers its child within itself. [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/center) */
export type CenterHArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Center is a layout component that centers its child within itself. [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/center) */
export type CenterLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CenterChildrenCollection = {
  __typename?: 'CenterChildrenCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CenterCollection = {
  __typename?: 'CenterCollection';
  items: Array<Maybe<Center>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CenterFilter = {
  AND?: InputMaybe<Array<InputMaybe<CenterFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CenterFilter>>>;
  childrenCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  h?: InputMaybe<Scalars['String']>;
  h_contains?: InputMaybe<Scalars['String']>;
  h_exists?: InputMaybe<Scalars['Boolean']>;
  h_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  h_not?: InputMaybe<Scalars['String']>;
  h_not_contains?: InputMaybe<Scalars['String']>;
  h_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CenterLinkingCollections = {
  __typename?: 'CenterLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type CenterLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum CenterOrder {
  HAsc = 'h_ASC',
  HDesc = 'h_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Flex is Box with display set to flex and comes with helpful style shorthand. It renders a `div` element. [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/flex) */
export type Flex = Entry & {
  __typename?: 'Flex';
  align?: Maybe<Scalars['String']>;
  childrenCollection?: Maybe<FlexChildrenCollection>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<FlexLinkingCollections>;
  mt?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** Flex is Box with display set to flex and comes with helpful style shorthand. It renders a `div` element. [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/flex) */
export type FlexAlignArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Flex is Box with display set to flex and comes with helpful style shorthand. It renders a `div` element. [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/flex) */
export type FlexChildrenCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Flex is Box with display set to flex and comes with helpful style shorthand. It renders a `div` element. [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/flex) */
export type FlexLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Flex is Box with display set to flex and comes with helpful style shorthand. It renders a `div` element. [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/flex) */
export type FlexMtArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type FlexChildrenCollection = {
  __typename?: 'FlexChildrenCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type FlexCollection = {
  __typename?: 'FlexCollection';
  items: Array<Maybe<Flex>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type FlexFilter = {
  AND?: InputMaybe<Array<InputMaybe<FlexFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FlexFilter>>>;
  align?: InputMaybe<Scalars['String']>;
  align_contains?: InputMaybe<Scalars['String']>;
  align_exists?: InputMaybe<Scalars['Boolean']>;
  align_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  align_not?: InputMaybe<Scalars['String']>;
  align_not_contains?: InputMaybe<Scalars['String']>;
  align_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  childrenCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  mt?: InputMaybe<Scalars['String']>;
  mt_contains?: InputMaybe<Scalars['String']>;
  mt_exists?: InputMaybe<Scalars['Boolean']>;
  mt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mt_not?: InputMaybe<Scalars['String']>;
  mt_not_contains?: InputMaybe<Scalars['String']>;
  mt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type FlexLinkingCollections = {
  __typename?: 'FlexLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type FlexLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum FlexOrder {
  AlignAsc = 'align_ASC',
  AlignDesc = 'align_DESC',
  MtAsc = 'mt_ASC',
  MtDesc = 'mt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/icon) */
export type Icon = Entry & {
  __typename?: 'Icon';
  color?: Maybe<Scalars['JSON']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<IconLinkingCollections>;
  src?: Maybe<Asset>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/icon) */
export type IconColorArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/icon) */
export type IconLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/icon) */
export type IconSrcArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type IconCollection = {
  __typename?: 'IconCollection';
  items: Array<Maybe<Icon>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type IconFilter = {
  AND?: InputMaybe<Array<InputMaybe<IconFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IconFilter>>>;
  color_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  src_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type IconLinkingCollections = {
  __typename?: 'IconLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type IconLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum IconOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** The Image component is used to display images with support for fallback. [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/image) */
export type Image = Entry & {
  __typename?: 'Image';
  borderRadius?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<ImageLinkingCollections>;
  priority?: Maybe<Scalars['Boolean']>;
  src?: Maybe<Asset>;
  sys: Sys;
  width?: Maybe<Scalars['Int']>;
};


/** The Image component is used to display images with support for fallback. [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/image) */
export type ImageBorderRadiusArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** The Image component is used to display images with support for fallback. [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/image) */
export type ImageHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** The Image component is used to display images with support for fallback. [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/image) */
export type ImageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** The Image component is used to display images with support for fallback. [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/image) */
export type ImagePriorityArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** The Image component is used to display images with support for fallback. [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/image) */
export type ImageSrcArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** The Image component is used to display images with support for fallback. [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/image) */
export type ImageWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ImageCollection = {
  __typename?: 'ImageCollection';
  items: Array<Maybe<Image>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ImageFilter = {
  AND?: InputMaybe<Array<InputMaybe<ImageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ImageFilter>>>;
  borderRadius?: InputMaybe<Scalars['String']>;
  borderRadius_contains?: InputMaybe<Scalars['String']>;
  borderRadius_exists?: InputMaybe<Scalars['Boolean']>;
  borderRadius_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  borderRadius_not?: InputMaybe<Scalars['String']>;
  borderRadius_not_contains?: InputMaybe<Scalars['String']>;
  borderRadius_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  priority?: InputMaybe<Scalars['Boolean']>;
  priority_exists?: InputMaybe<Scalars['Boolean']>;
  priority_not?: InputMaybe<Scalars['Boolean']>;
  src_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export type ImageLinkingCollections = {
  __typename?: 'ImageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ImageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ImageOrder {
  BorderRadiusAsc = 'borderRadius_ASC',
  BorderRadiusDesc = 'borderRadius_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  PriorityAsc = 'priority_ASC',
  PriorityDesc = 'priority_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

/** [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/page) */
export type Page = Entry & {
  __typename?: 'Page';
  childrenCollection?: Maybe<PageChildrenCollection>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PageLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/page) */
export type PageChildrenCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageChildrenCollection = {
  __typename?: 'PageChildrenCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageCollection = {
  __typename?: 'PageCollection';
  items: Array<Maybe<Page>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  childrenCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type PageLinkingCollections = {
  __typename?: 'PageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PageOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Query = {
  __typename?: 'Query';
  aspectRatio?: Maybe<AspectRatio>;
  aspectRatioCollection?: Maybe<AspectRatioCollection>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  badge?: Maybe<Badge>;
  badgeCollection?: Maybe<BadgeCollection>;
  box?: Maybe<Box>;
  boxCollection?: Maybe<BoxCollection>;
  center?: Maybe<Center>;
  centerCollection?: Maybe<CenterCollection>;
  entryCollection?: Maybe<EntryCollection>;
  flex?: Maybe<Flex>;
  flexCollection?: Maybe<FlexCollection>;
  icon?: Maybe<Icon>;
  iconCollection?: Maybe<IconCollection>;
  image?: Maybe<Image>;
  imageCollection?: Maybe<ImageCollection>;
  page?: Maybe<Page>;
  pageCollection?: Maybe<PageCollection>;
  text?: Maybe<Text>;
  textCollection?: Maybe<TextCollection>;
};


export type QueryAspectRatioArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAspectRatioCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AspectRatioOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AspectRatioFilter>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryBadgeArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryBadgeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<BadgeOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BadgeFilter>;
};


export type QueryBoxArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryBoxCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<BoxOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BoxFilter>;
};


export type QueryCenterArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCenterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CenterOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CenterFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryFlexArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryFlexCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FlexOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FlexFilter>;
};


export type QueryIconArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryIconCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IconOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IconFilter>;
};


export type QueryImageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ImageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ImageFilter>;
};


export type QueryPageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageFilter>;
};


export type QueryTextArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TextOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TextFilter>;
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** Text is the used to render text and paragraphs within an interface. [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/text) */
export type Text = Entry & {
  __typename?: 'Text';
  children?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['JSON']>;
  contentfulMetadata: ContentfulMetadata;
  fontSize?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<TextLinkingCollections>;
  ml?: Maybe<Scalars['String']>;
  mt?: Maybe<Scalars['String']>;
  sys: Sys;
  textTransform?: Maybe<Scalars['String']>;
};


/** Text is the used to render text and paragraphs within an interface. [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/text) */
export type TextChildrenArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Text is the used to render text and paragraphs within an interface. [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/text) */
export type TextColorArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Text is the used to render text and paragraphs within an interface. [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/text) */
export type TextFontSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Text is the used to render text and paragraphs within an interface. [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/text) */
export type TextFontWeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Text is the used to render text and paragraphs within an interface. [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/text) */
export type TextLineHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Text is the used to render text and paragraphs within an interface. [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/text) */
export type TextLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Text is the used to render text and paragraphs within an interface. [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/text) */
export type TextMlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Text is the used to render text and paragraphs within an interface. [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/text) */
export type TextMtArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Text is the used to render text and paragraphs within an interface. [See type definition](https://app.contentful.com/spaces/w2p4p07dx3ir/content_types/text) */
export type TextTextTransformArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TextCollection = {
  __typename?: 'TextCollection';
  items: Array<Maybe<Text>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TextFilter = {
  AND?: InputMaybe<Array<InputMaybe<TextFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TextFilter>>>;
  children?: InputMaybe<Scalars['String']>;
  children_contains?: InputMaybe<Scalars['String']>;
  children_exists?: InputMaybe<Scalars['Boolean']>;
  children_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  children_not?: InputMaybe<Scalars['String']>;
  children_not_contains?: InputMaybe<Scalars['String']>;
  children_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  color_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  fontSize?: InputMaybe<Scalars['String']>;
  fontSize_contains?: InputMaybe<Scalars['String']>;
  fontSize_exists?: InputMaybe<Scalars['Boolean']>;
  fontSize_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fontSize_not?: InputMaybe<Scalars['String']>;
  fontSize_not_contains?: InputMaybe<Scalars['String']>;
  fontSize_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fontWeight?: InputMaybe<Scalars['String']>;
  fontWeight_contains?: InputMaybe<Scalars['String']>;
  fontWeight_exists?: InputMaybe<Scalars['Boolean']>;
  fontWeight_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fontWeight_not?: InputMaybe<Scalars['String']>;
  fontWeight_not_contains?: InputMaybe<Scalars['String']>;
  fontWeight_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lineHeight?: InputMaybe<Scalars['String']>;
  lineHeight_contains?: InputMaybe<Scalars['String']>;
  lineHeight_exists?: InputMaybe<Scalars['Boolean']>;
  lineHeight_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lineHeight_not?: InputMaybe<Scalars['String']>;
  lineHeight_not_contains?: InputMaybe<Scalars['String']>;
  lineHeight_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ml?: InputMaybe<Scalars['String']>;
  ml_contains?: InputMaybe<Scalars['String']>;
  ml_exists?: InputMaybe<Scalars['Boolean']>;
  ml_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ml_not?: InputMaybe<Scalars['String']>;
  ml_not_contains?: InputMaybe<Scalars['String']>;
  ml_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mt?: InputMaybe<Scalars['String']>;
  mt_contains?: InputMaybe<Scalars['String']>;
  mt_exists?: InputMaybe<Scalars['Boolean']>;
  mt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mt_not?: InputMaybe<Scalars['String']>;
  mt_not_contains?: InputMaybe<Scalars['String']>;
  mt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  textTransform?: InputMaybe<Scalars['String']>;
  textTransform_contains?: InputMaybe<Scalars['String']>;
  textTransform_exists?: InputMaybe<Scalars['Boolean']>;
  textTransform_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  textTransform_not?: InputMaybe<Scalars['String']>;
  textTransform_not_contains?: InputMaybe<Scalars['String']>;
  textTransform_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TextLinkingCollections = {
  __typename?: 'TextLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type TextLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TextOrder {
  FontSizeAsc = 'fontSize_ASC',
  FontSizeDesc = 'fontSize_DESC',
  FontWeightAsc = 'fontWeight_ASC',
  FontWeightDesc = 'fontWeight_DESC',
  LineHeightAsc = 'lineHeight_ASC',
  LineHeightDesc = 'lineHeight_DESC',
  MlAsc = 'ml_ASC',
  MlDesc = 'ml_DESC',
  MtAsc = 'mt_ASC',
  MtDesc = 'mt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextTransformAsc = 'textTransform_ASC',
  TextTransformDesc = 'textTransform_DESC'
}

export type AspectRatioEntryQueryVariables = Exact<{
  id: Scalars['String'];
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type AspectRatioEntryQuery = { __typename?: 'Query', aspectRatio?: { __typename?: 'AspectRatio', maxW?: string | null, ratio?: number | null } | null };

export type BadgeEntryQueryVariables = Exact<{
  id: Scalars['String'];
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type BadgeEntryQuery = { __typename?: 'Query', badge?: { __typename?: 'Badge', colorScheme?: any | null, childrenCollection?: { __typename?: 'BadgeChildrenCollection', items: Array<{ __typename: 'AspectRatio', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Badge', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Box', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Center', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Flex', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Icon', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Image', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Text', sys: { __typename?: 'Sys', id: string } } | null> } | null } | null };

export type BoxEntryQueryVariables = Exact<{
  id: Scalars['String'];
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type BoxEntryQuery = { __typename?: 'Query', box?: { __typename?: 'Box', p?: string | null, maxW?: string | null, borderWidth?: string | null, childrenCollection?: { __typename?: 'BoxChildrenCollection', items: Array<{ __typename: 'AspectRatio', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Badge', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Box', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Center', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Flex', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Icon', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Image', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Text', sys: { __typename?: 'Sys', id: string } } | null> } | null } | null };

export type CenterEntryQueryVariables = Exact<{
  id: Scalars['String'];
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CenterEntryQuery = { __typename?: 'Query', center?: { __typename?: 'Center', h?: string | null, childrenCollection?: { __typename?: 'CenterChildrenCollection', items: Array<{ __typename: 'AspectRatio', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Badge', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Box', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Center', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Flex', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Icon', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Image', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Text', sys: { __typename?: 'Sys', id: string } } | null> } | null } | null };

export type FlexEntryQueryVariables = Exact<{
  id: Scalars['String'];
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type FlexEntryQuery = { __typename?: 'Query', flex?: { __typename?: 'Flex', align?: string | null, mt?: string | null, childrenCollection?: { __typename?: 'FlexChildrenCollection', items: Array<{ __typename: 'AspectRatio', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Badge', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Box', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Center', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Flex', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Icon', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Image', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Text', sys: { __typename?: 'Sys', id: string } } | null> } | null } | null };

export type IconEntryQueryVariables = Exact<{
  id: Scalars['String'];
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type IconEntryQuery = { __typename?: 'Query', icon?: { __typename?: 'Icon', color?: any | null, src?: { __typename?: 'Asset', url?: string | null } | null } | null };

export type ImageEntryQueryVariables = Exact<{
  id: Scalars['String'];
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type ImageEntryQuery = { __typename?: 'Query', image?: { __typename?: 'Image', borderRadius?: string | null, priority?: boolean | null, height?: number | null, width?: number | null, src?: { __typename?: 'Asset', description?: string | null, height?: number | null, width?: number | null, url?: string | null } | null } | null };

export type PageEntryQueryQueryVariables = Exact<{
  id: Scalars['String'];
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type PageEntryQueryQuery = { __typename?: 'Query', page?: { __typename?: 'Page', childrenCollection?: { __typename?: 'PageChildrenCollection', items: Array<{ __typename: 'AspectRatio', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Badge', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Box', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Center', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Flex', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Icon', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Image', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Text', sys: { __typename?: 'Sys', id: string } } | null> } | null } | null };

export type TextEntryQueryVariables = Exact<{
  id: Scalars['String'];
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type TextEntryQuery = { __typename?: 'Query', text?: { __typename?: 'Text', ml?: string | null, textTransform?: string | null, fontSize?: string | null, fontWeight?: string | null, mt?: string | null, lineHeight?: string | null, color?: any | null, children?: string | null } | null };

type EntryFragment_AspectRatio_Fragment = { __typename: 'AspectRatio', sys: { __typename?: 'Sys', id: string } };

type EntryFragment_Badge_Fragment = { __typename: 'Badge', sys: { __typename?: 'Sys', id: string } };

type EntryFragment_Box_Fragment = { __typename: 'Box', sys: { __typename?: 'Sys', id: string } };

type EntryFragment_Center_Fragment = { __typename: 'Center', sys: { __typename?: 'Sys', id: string } };

type EntryFragment_Flex_Fragment = { __typename: 'Flex', sys: { __typename?: 'Sys', id: string } };

type EntryFragment_Icon_Fragment = { __typename: 'Icon', sys: { __typename?: 'Sys', id: string } };

type EntryFragment_Image_Fragment = { __typename: 'Image', sys: { __typename?: 'Sys', id: string } };

type EntryFragment_Page_Fragment = { __typename: 'Page', sys: { __typename?: 'Sys', id: string } };

type EntryFragment_Text_Fragment = { __typename: 'Text', sys: { __typename?: 'Sys', id: string } };

export type EntryFragmentFragment = EntryFragment_AspectRatio_Fragment | EntryFragment_Badge_Fragment | EntryFragment_Box_Fragment | EntryFragment_Center_Fragment | EntryFragment_Flex_Fragment | EntryFragment_Icon_Fragment | EntryFragment_Image_Fragment | EntryFragment_Page_Fragment | EntryFragment_Text_Fragment;

export const EntryFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EntryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<EntryFragmentFragment, unknown>;
export const AspectRatioEntryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AspectRatioEntry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"preview"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"preview"},"value":{"kind":"Variable","name":{"kind":"Name","value":"preview"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"maxW"}},{"kind":"Field","name":{"kind":"Name","value":"ratio"}}]}}]}}]} as unknown as DocumentNode<AspectRatioEntryQuery, AspectRatioEntryQueryVariables>;
export const BadgeEntryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BadgeEntry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"preview"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"badge"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"preview"},"value":{"kind":"Variable","name":{"kind":"Name","value":"preview"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"colorScheme"}},{"kind":"Field","name":{"kind":"Name","value":"childrenCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFragment"}}]}}]}}]}}]}},...EntryFragmentFragmentDoc.definitions]} as unknown as DocumentNode<BadgeEntryQuery, BadgeEntryQueryVariables>;
export const BoxEntryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BoxEntry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"preview"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"box"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"preview"},"value":{"kind":"Variable","name":{"kind":"Name","value":"preview"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"p"}},{"kind":"Field","name":{"kind":"Name","value":"maxW"}},{"kind":"Field","name":{"kind":"Name","value":"borderWidth"}},{"kind":"Field","name":{"kind":"Name","value":"childrenCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFragment"}}]}}]}}]}}]}},...EntryFragmentFragmentDoc.definitions]} as unknown as DocumentNode<BoxEntryQuery, BoxEntryQueryVariables>;
export const CenterEntryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CenterEntry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"preview"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"center"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"preview"},"value":{"kind":"Variable","name":{"kind":"Name","value":"preview"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"h"}},{"kind":"Field","name":{"kind":"Name","value":"childrenCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFragment"}}]}}]}}]}}]}},...EntryFragmentFragmentDoc.definitions]} as unknown as DocumentNode<CenterEntryQuery, CenterEntryQueryVariables>;
export const FlexEntryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FlexEntry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"preview"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"flex"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"preview"},"value":{"kind":"Variable","name":{"kind":"Name","value":"preview"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"align"}},{"kind":"Field","name":{"kind":"Name","value":"mt"}},{"kind":"Field","name":{"kind":"Name","value":"childrenCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFragment"}}]}}]}}]}}]}},...EntryFragmentFragmentDoc.definitions]} as unknown as DocumentNode<FlexEntryQuery, FlexEntryQueryVariables>;
export const IconEntryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"IconEntry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"preview"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icon"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"preview"},"value":{"kind":"Variable","name":{"kind":"Name","value":"preview"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<IconEntryQuery, IconEntryQueryVariables>;
export const ImageEntryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ImageEntry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"preview"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"preview"},"value":{"kind":"Variable","name":{"kind":"Name","value":"preview"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"borderRadius"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"src"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<ImageEntryQuery, ImageEntryQueryVariables>;
export const PageEntryQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PageEntryQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"preview"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"preview"},"value":{"kind":"Variable","name":{"kind":"Name","value":"preview"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"childrenCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EntryFragment"}}]}}]}}]}}]}},...EntryFragmentFragmentDoc.definitions]} as unknown as DocumentNode<PageEntryQueryQuery, PageEntryQueryQueryVariables>;
export const TextEntryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TextEntry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"preview"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"preview"},"value":{"kind":"Variable","name":{"kind":"Name","value":"preview"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ml"}},{"kind":"Field","name":{"kind":"Name","value":"textTransform"}},{"kind":"Field","name":{"kind":"Name","value":"fontSize"}},{"kind":"Field","name":{"kind":"Name","value":"fontWeight"}},{"kind":"Field","name":{"kind":"Name","value":"mt"}},{"kind":"Field","name":{"kind":"Name","value":"lineHeight"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"children"}}]}}]}}]} as unknown as DocumentNode<TextEntryQuery, TextEntryQueryVariables>;