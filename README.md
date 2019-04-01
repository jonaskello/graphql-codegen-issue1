## How to test

```
yarn graphql
```

Gives error:

```
$ gql-gen --config graphql-codegen.yml
  ✔ Parse configuration
  ❯ Generate outputs
    ❯ Generate generated.ts
      ✔ Load GraphQL schemas
      ✔ Load GraphQL documents
      ✖ Generate
        → schemaType.getInterfaces is not a function


 Found 1 error

  ✖ generated.ts
    TypeError: schemaType.getInterfaces is not a function
```
