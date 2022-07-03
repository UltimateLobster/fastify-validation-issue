import { Type, Static } from '@sinclair/typebox';

export const FooSchema = Type.Object({
  type: Type.Union([Type.Literal('bar'), Type.Literal('baz')]),
}, {$id: 'FooSchema' });

export const FooSchemaRef = Type.Ref(FooSchema);
export type Foo = Static<typeof FooSchema>;
