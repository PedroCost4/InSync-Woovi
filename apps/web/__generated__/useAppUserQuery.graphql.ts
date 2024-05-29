/**
 * @generated SignedSource<<8b79188655cc9357ef605593e5861a85>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type useAppUserQuery$variables = Record<PropertyKey, never>;
export type useAppUserQuery$data = {
  readonly me: {
    readonly avatar: string | null | undefined;
    readonly id: string;
    readonly username: string;
  } | null | undefined;
};
export type useAppUserQuery = {
  response: useAppUserQuery$data;
  variables: useAppUserQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "me",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "username",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "avatar",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useAppUserQuery",
    "selections": (v0/*: any*/),
    "type": "query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "useAppUserQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "1ab95fe5132aed487fd578b9a9abb9c9",
    "id": null,
    "metadata": {},
    "name": "useAppUserQuery",
    "operationKind": "query",
    "text": "query useAppUserQuery {\n  me {\n    id\n    username\n    avatar\n  }\n}\n"
  }
};
})();

(node as any).hash = "22e52defa2afea32bde498569b1c38c4";

export default node;
