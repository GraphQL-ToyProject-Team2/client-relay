/**
 * @generated SignedSource<<dc5d5394287891a496ff3543f811c399>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type getWishlistQuery$variables = Record<PropertyKey, never>;
export type getWishlistQuery$data = {
  readonly accommodations: ReadonlyArray<{
    readonly description: string | null | undefined;
    readonly host: {
      readonly name: string;
    };
    readonly id: string;
    readonly images: ReadonlyArray<string> | null | undefined;
    readonly isLiked: boolean;
    readonly price: number;
    readonly title: string;
  }>;
};
export type getWishlistQuery = {
  response: getWishlistQuery$data;
  variables: getWishlistQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "price",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "images",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isLiked",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "getWishlistQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Accommodation",
        "kind": "LinkedField",
        "name": "accommodations",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Host",
            "kind": "LinkedField",
            "name": "host",
            "plural": false,
            "selections": [
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          (v5/*: any*/),
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "getWishlistQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Accommodation",
        "kind": "LinkedField",
        "name": "accommodations",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Host",
            "kind": "LinkedField",
            "name": "host",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v0/*: any*/)
            ],
            "storageKey": null
          },
          (v5/*: any*/),
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "63aa19555b020be143e03d83c1d9df61",
    "id": null,
    "metadata": {},
    "name": "getWishlistQuery",
    "operationKind": "query",
    "text": "query getWishlistQuery {\n  accommodations {\n    id\n    title\n    description\n    price\n    host {\n      name\n      id\n    }\n    images\n    isLiked\n  }\n}\n"
  }
};
})();

(node as any).hash = "68aac8fa9a49e50a2a48412846ff4a76";

export default node;
