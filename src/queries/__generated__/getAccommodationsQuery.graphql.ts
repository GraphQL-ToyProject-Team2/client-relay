/**
 * @generated SignedSource<<a446ffb4f4033e7fecccd8a90a6aae1f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type getAccommodationsQuery$variables = Record<PropertyKey, never>;
export type getAccommodationsQuery$data = {
  readonly accommodations: ReadonlyArray<{
    readonly description: string | null | undefined;
    readonly host: {
      readonly name: string;
    };
    readonly id: string;
    readonly images: ReadonlyArray<string> | null | undefined;
    readonly price: number;
    readonly title: string;
  }>;
};
export type getAccommodationsQuery = {
  response: getAccommodationsQuery$data;
  variables: getAccommodationsQuery$variables;
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
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "getAccommodationsQuery",
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
          (v5/*: any*/)
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
    "name": "getAccommodationsQuery",
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
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7f8de998b1d6c49e21146d99ce3c528c",
    "id": null,
    "metadata": {},
    "name": "getAccommodationsQuery",
    "operationKind": "query",
    "text": "query getAccommodationsQuery {\n  accommodations {\n    id\n    title\n    description\n    price\n    host {\n      name\n      id\n    }\n    images\n  }\n}\n"
  }
};
})();

(node as any).hash = "5e1076b06f1d97c6c417599097be5ceb";

export default node;
