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

export type Foo = {
  readonly id: Scalars["ID"];
};

export type FooBar = Foo | Bar;

export type Query = {
  readonly fooBar: ReadonlyArray<FooBar>;
};
export type Unnamed_1_QueryVariables = {};

export type Unnamed_1_Query = { readonly __typename?: "Query" } & {
  readonly fooBar: ReadonlyArray<

      | ({ readonly __typename?: "Foo" } & Pick<Foo, "id">)
      | ({ readonly __typename?: "Bar" } & Pick<Bar, "id">)
  >;
};

export type FooBarFragmentFragment =
  | ({ readonly __typename?: "Foo" } & Pick<Foo, "id">)
  | ({ readonly __typename?: "Bar" } & Pick<Bar, "id">);
