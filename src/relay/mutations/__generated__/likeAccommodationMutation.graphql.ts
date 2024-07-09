/**
 * @generated SignedSource<<15cd6cda19eca2fd0e69db3c658af3c9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type likeAccommodationMutation$variables = {
  id: string;
};
export type likeAccommodationMutation$data = {
  readonly likeAccommodation: {
    readonly isLiked: boolean;
  } | null | undefined;
};
export type likeAccommodationMutation = {
  response: likeAccommodationMutation$data;
  variables: likeAccommodationMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isLiked",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "likeAccommodationMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Accommodation",
        "kind": "LinkedField",
        "name": "likeAccommodation",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "likeAccommodationMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Accommodation",
        "kind": "LinkedField",
        "name": "likeAccommodation",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5f0668b199aa609fd518aec310a19798",
    "id": null,
    "metadata": {},
    "name": "likeAccommodationMutation",
    "operationKind": "mutation",
    "text": "mutation likeAccommodationMutation(\n  $id: ID!\n) {\n  likeAccommodation(id: $id) {\n    isLiked\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "1398584595d91975e49e81fb7db66512";

export default node;
