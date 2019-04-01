//tslint:disable

type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Bar = {
  readonly id: Scalars["ID"];
};

export type CachePatch = Foo | Bar;

export type Foo = {
  readonly id: Scalars["ID"];
};

export type Query = {
  readonly _dummy?: Maybe<Scalars["String"]>;
};

export type Subscription = {
  readonly cachePatches: ReadonlyArray<CachePatch>;
};
export type CachePatchesSubscriptionSubscriptionVariables = {};

export type CachePatchesSubscriptionSubscription = {
  readonly __typename?: "Subscription";
} & { readonly cachePatches: ReadonlyArray<> };

export type CachePatchesSubscription_CachePatchFragment =
  | ({ readonly __typename?: "Foo" } & Pick<Foo, "id">)
  | ({ readonly __typename?: "Bar" } & Pick<Bar, "id">);
