# Defined-id

Requirements
============

1. Docker windows client

Installation
============

1. `docker build . -t defined-id`
2. `docker run -p 1337:1337 defined-id`

Defined-id running on 1337 port : http://localhost:1337/

Api
============

## Identifier ##

`POST /api/identifier/did`

#### Description ###

Generate DID based on method name and NEM public key.

Did regex : `^did:[a-z]+:[0-9A-Za-z]{34}$`

#### Parameters ###

| Parameter     | Type          | Required      |
| ------------- | ------------- | ------------- |
| Method        | String        | Yes           |
| NemPublicKey  | String        | Yes           |

#### Request example ###

```json
{
    "method": "defined",
    "nemPublicKey": "D98C8B7478E0255127E24B7C0752B78B5D4A90F1454FA9D8CD262ABF665B2B1B"
}
```

#### Response example ###

```json
{
    "did": "did:defined:166evUDhpSSq23xP26oeQ4uNZNZce1KFFP",
    "salt": "52e1aea9-c6ac-4af2-bec0-aaf9cd30a182"
}
```

## Hash ##

`POST /api/hash`


#### Description ###

Generate bytes sha256 representation

#### Parameters ###

| Parameter     | Type          | Required      |
| ------------- | ------------- | ------------- |
| DocumentBytes | Uint8Array    | Yes           |

#### Request example ###

```json
{
    "documentBytes": [40,50,60]
}
```

#### Response example ###

```json
{
    "hash": "caf6c9e744640159cc972fc83bbb44e09141cfc2c205274cb9cb08a583bbeec5"
}
```


`POST /api/hash/register`

Register document hash on NEM blockchain.

#### Parameters ###

| Parameter             | Type              | Required      |
| --------------------- | ----------------- | ------------- |
| Did                   | String            | Yes           |
| KeyIds                | Integer           | Yes           |
| PersonaId             | Integer           | Yes           |
| ConnectionId          | Integer           | Yes           |
| Seed                  | String            | Yes           |
| documentHash          | String            | Yes           |
| nemCatapultBlockchain | String            | Yes           |
| nodeUri               | String            | Yes           |

#### Request example ###

```json
{
    "documentHash":"ff269cd7a2dd34b2a62b92a9232d68a84a4a1ce6458dfd87b0082df96b3105b6",
    "nemCatapultBlockchain": "PublicTestnet",
    "nodeUri": "http://localhost:3000",
    "did": "did:defined:166evUDhpSSq23xP26oeQ4uNZNZce1KFFP",
    "keyId": 1,
    "personaId": 1,
    "connectionId": 2,
    "encode": "hex",
    "seed": "seed"
}
```

#### Response example ###

``` json
{
    "nemTransactionHash": "1C1DDC56E31F36B601FF5B7D030F1093DE34C6BD3CDE56BB3C9A6BD961A5EAC6"
}
```

`POST /api/hash/verify`

Verify if a document hash was registered on NEM blockchain.

#### Parameters ###

| Parameter             | Type              | Required      |
| --------------------- | ----------------- | ------------- |
| documentHash          | String            | Yes           |
| nemCatapultBlockchain | String            | Yes           |
| nodeUri               | String            | Yes           |
| publicKey             | String            | Yes           |

#### Request example ###

```json
{
	"documentHash": "1e04c3815f90220d3d3fdcc8bdae00c24b3d4fd9d2b3858a6eddeb973840c155",
	"nemCatapultBlockchain": "PublicTestnet",
	"nodeUri": "http://api.nemtech.io:3000",
	"publicKey": "e25e127e9cfa42c2ec31fd7a00e44e0972a67f0a5b3c0d68cba677267b8d9c78"
}
```

#### Response example ###

``` json
{
    "hashIndex": -1,
    "message": "Hash was not registered"
}
```

## Crypto ##

`POST /api/crypto/initializeKeys`

Initializes derived keys based on a password.

#### Parameters ###

| Parameter     | Type          | Required      |
| ------------- | ------------- | ------------- |
| Password      | String        | Yes           |

#### Request example ###

```json
{
    "password": "password"
}
```

#### Response example ###

```
OK
```

`POST /api/crypto/pubKeys`

Generate public keys.

#### Parameters ###

| Parameter     | Type              | Required      |
| ------------- | ----------------- | ------------- |
| Did           | String            | Yes           |
| KeyIds        | Array of integers | Yes           |
| PersonaId     | Integer           | Yes           |
| ConnectionId  | Integer           | Yes           |
| Encode        | String            | Yes           |
| Seed          | String            | Yes           |

Encode possible values : `hex, base58, pem`

#### Request example ###

```json
{
    "did": "did:defined:166evUDhpSSq23xP26oeQ4uNZNZce1KFFP",
    "keyIds": [1, 2],
    "personaId": 1,
    "connectionId": 2,
    "encode": "hex",
    "seed": "seed"
}
```

#### Response example ###

```json
{
    "context": [
        "https://w3id.org/did/v1",
        "https://w3id.org/security/v1"
    ],
    "pubKey": [
        {
            "id": "did:defined:166evUDhpSSq23xP26oeQ4uNZNZce1KFFP#authentication-key-1",
            "owner": "did:defined:166evUDhpSSq23xP26oeQ4uNZNZce1KFFP",
            "type": "Ed25519VerificationKey2018",
            "publicKeyHex": "0023757068c19dd7b51531ed327c0e000e7f737a3611a7374015618988aa733bb8"
        },
        {
            "id": "did:defined:166evUDhpSSq23xP26oeQ4uNZNZce1KFFP#granting-key-2",
            "owner": "did:defined:166evUDhpSSq23xP26oeQ4uNZNZce1KFFP",
            "type": "Ed25519VerificationKey2018",
            "publicKeyHex": "00e8b5ce1df5c8984511591967b17ae0913581e2daca7b403507536b0294c6eacd"
        }
    ],
    "meta": {
        "createdAt": "2019-01-22T09:39:10.742Z",
        "createdBy": "http://defined.id/"
    }
}
```

`POST /api/crypto/poo`

Generate a proof of ownership for a public key.

#### Parameters ###

| Parameter     | Type              | Required      |
| ------------- | ----------------- | ------------- |
| KeyId         | Integer           | Yes           |
| PersonaId     | Integer           | Yes           |
| ConnectionId  | Integer           | Yes           |
| DidProver     | String            | Yes           |
| DidVerifier   | String            | Yes           |
| Seed          | String            | Yes           |

#### Request example ###

```json
{
      "keyId": 1,
      "personaId": 1,
      "connectionId": 2,
      "didProver": "did:defined:166evUDhpSSq23xP26oeQ4uNZNZce1KFFP",
      "didVerifier": "did:defined:1ATaPiJdX2u4NHeYVux1iYcdDCTrXpdoxC",
      "seed": "fffcf9f6f3f0edeae7e4e1dedbd8d5d2cfccc9c6c3c0bdbab7b4b1aeaba8a5a29f9c999693908d8a8784817e7b7875726f6c696663605d5a5754514e4b484542"
}
```

#### Response example ###

```json
{
    "didProver": "did:defined:166evUDhpSSq23xP26oeQ4uNZNZce1KFFP",
    "didVerifier": "did:defined:1ATaPiJdX2u4NHeYVux1iYcdDCTrXpdoxC",
    "publicKey": "ccc98085b11e5b96c614036294be077d0b66a272b6476d3ba7eb440a3c2df00d",
    "timestamp": 1548947150636,
    "signature": "YFipwAdFVonV4/9zQjPdzPLArX181RAaK3UvXixQ7Rg0lX/sz8FLEK4sJU+2zJhAPHIFlNyD87+9wsBWTRf1Aw=="
}
```
`POST /api/crypto/poo/verify`

Verify a proof of ownership for a public key.

#### Parameters ###

| Parameter     | Type              | Required      |
| ------------- | ----------------- | ------------- |
| DidProver     | String            | Yes           |
| DidVerifier   | String            | Yes           |
| PublicKey     | String            | Yes           |
| Timestamp     | Integer           | Yes           |
| Signature     | String            | Yes           |


#### Request example ###

```json
{
    "didProver": "did:defined:166evUDhpSSq23xP26oeQ4uNZNZce1KFFP",
    "didVerifier": "did:defined:1ATaPiJdX2u4NHeYVux1iYcdDCTrXpdoxC",
    "publicKey": "ccc98085b11e5b96c614036294be077d0b66a272b6476d3ba7eb440a3c2df00d",
    "timestamp": 1548947150636,
    "signature": "YFipwAdFVonV4/9zQjPdzPLArX181RAaK3UvXixQ7Rg0lX/sz8FLEK4sJU+2zJhAPHIFlNyD87+9wsBWTRf1Aw=="
}
```

#### Response example ###

```json
{
  "errors": [
    "Invalid Proof Of Ownership"
  ]
}
```
`GET /api/crypto/seed`

Get random seed.

#### Response example ###

```json
{
    "seed": "17c444888010ed9191a55778d59f2cd64130faaf99baa95b9b24f226f2512d727e1caf13a82447bbfd3a9e82de8f399176eb033a29cf4fa0eac85f2e18a7e1b4"
}
```

`POST /api/crypto/signDocument`
 
 Add proof to a DID document.
  
 #### Parameters ###
 
 | Parameter     | Type              | Required      |
 | ------------- | ----------------- | ------------- |
 | document      | JSON              | Yes           |
 | keyId         | Integer           | Yes           |
 | personaId     | Integer           | Yes           |
 | connectionId  | Integer           | Yes           |
 | Seed          | String            | Yes           |
 
 
 #### Request example ###
 
 ```json
{
	"document": {
    "context": [
        "https://w3id.org/did/v1",
        "https://w3id.org/security/v1"
    ],
    "id": "did:defined:166evUDhpSSq23xP26oeQ4uNZNZce1KFFP",
    "salt": "52e1aea9-c6ac-4af2-bec0-aaf9cd30a182",
    "publicKey": [
        {
            "id": "did:defined:166evUDhpSSq23xP26oeQ4uNZNZce1KFFP#authentication-key-1",
            "owner": "did:defined:166evUDhpSSq23xP26oeQ4uNZNZce1KFFP",
            "type": "Ed25519VerificationKey2018",
            "publicKeyHex": "0023757068c19dd7b51531ed327c0e000e7f737a3611a7374015618988aa733bb8"
        },
        {
            "id": "did:defined:166evUDhpSSq23xP26oeQ4uNZNZce1KFFP#granting-key-2",
            "owner": "did:defined:166evUDhpSSq23xP26oeQ4uNZNZce1KFFP",
            "type": "Ed25519VerificationKey2018",
            "publicKeyHex": "00e8b5ce1df5c8984511591967b17ae0913581e2daca7b403507536b0294c6eacd"
        }
    ],
    "service": [
        {
            "serviceName": "openid",
            "type": "OpenIdConnectVersion1.0Service",
            "serviceEndpoint": "https://openid.example.com/"
        },
        {
            "serviceName": "vcr",
            "type": "CredentialRepositoryService",
            "serviceEndpoint": "https://repository.example.com/service/8377464"
        },
        {
            "serviceName": "xdi",
            "type": "XdiService",
            "serviceEndpoint": "https://xdi.example.com/8377464"
        }
    ],
    "created": "2019-03-01T09:53:34.698Z"
},
 "did": "did:defined:166evUDhpSSq23xP26oeQ4uNZNZce1KFFP",
    "keyId": 1,
    "personaId": 1,
    "connectionId": 1,
    "seed": "seed"
}
 ```
 
 #### Response example ###
 
 ```json
{
    "context": [
        "https://w3id.org/did/v1",
        "https://w3id.org/security/v1"
    ],
    "id": "did:defined:166evUDhpSSq23xP26oeQ4uNZNZce1KFFP",
    "salt": "52e1aea9-c6ac-4af2-bec0-aaf9cd30a182",
    "publicKey": [
        {
            "id": "did:defined:166evUDhpSSq23xP26oeQ4uNZNZce1KFFP#authentication-key-1",
            "owner": "did:defined:166evUDhpSSq23xP26oeQ4uNZNZce1KFFP",
            "type": "Ed25519VerificationKey2018",
            "publicKeyHex": "0023757068c19dd7b51531ed327c0e000e7f737a3611a7374015618988aa733bb8"
        },
        {
            "id": "did:defined:166evUDhpSSq23xP26oeQ4uNZNZce1KFFP#granting-key-2",
            "owner": "did:defined:166evUDhpSSq23xP26oeQ4uNZNZce1KFFP",
            "type": "Ed25519VerificationKey2018",
            "publicKeyHex": "00e8b5ce1df5c8984511591967b17ae0913581e2daca7b403507536b0294c6eacd"
        }
    ],
    "service": [
        {
            "serviceName": "openid",
            "type": "OpenIdConnectVersion1.0Service",
            "serviceEndpoint": "https://openid.example.com/"
        },
        {
            "serviceName": "vcr",
            "type": "CredentialRepositoryService",
            "serviceEndpoint": "https://repository.example.com/service/8377464"
        },
        {
            "serviceName": "xdi",
            "type": "XdiService",
            "serviceEndpoint": "https://xdi.example.com/8377464"
        }
    ],
    "created": "2019-03-01T09:53:34.698Z",
    "proof": {
        "type": "Ed25519Signature2018",
        "created": "2019-03-27T08:16:33.137Z",
        "creator": "http://www.defined.id",
        "signatureValue": "710d158a068dbfdf08f43f327e29e0563fb0fdefdd95b445444ce2e2954de674"
    }
}
```

##Document generation ##

`POST /api/documentGeneration/didDocument`

Did document generation

#### Parameters ###

| Parameter     | Type              | Required      |
| ------------- | ----------------- | ------------- |
| Did           | String            | Yes           |
| Salt          | String            | Yes           |
| PubKey        | Array of keys     | Yes           |
| Services      | Array of services | Yes           |


#### Request example ###

```json
{
   "did": "did:defined:166evUDhpSSq23xP26oeQ4uNZNZce1KFFP",
   "salt": "52e1aea9-c6ac-4af2-bec0-aaf9cd30a182",
   "services": [
       {
          "serviceName": "openid",
          "type": "OpenIdConnectVersion1.0Service",
          "serviceEndpoint": "https://openid.example.com/"
       }, 
       {
          "serviceName": "vcr",
          "type": "CredentialRepositoryService",
          "serviceEndpoint": "https://repository.example.com/service/8377464"
       },
       {
          "serviceName": "xdi",
          "type": "XdiService",
          "serviceEndpoint": "https://xdi.example.com/8377464"
       }
   ],
   "pubKey": [
        {
            "id": "did:defined:166evUDhpSSq23xP26oeQ4uNZNZce1KFFP#authentication-key-1",
            "owner": "did:defined:166evUDhpSSq23xP26oeQ4uNZNZce1KFFP",
            "type": "Ed25519VerificationKey2018",
            "publicKeyHex": "0023757068c19dd7b51531ed327c0e000e7f737a3611a7374015618988aa733bb8"
        },
        {
            "id": "did:defined:166evUDhpSSq23xP26oeQ4uNZNZce1KFFP#granting-key-2",
            "owner": "did:defined:166evUDhpSSq23xP26oeQ4uNZNZce1KFFP",
            "type": "Ed25519VerificationKey2018",
            "publicKeyHex": "00e8b5ce1df5c8984511591967b17ae0913581e2daca7b403507536b0294c6eacd"
        }
    ]
}
```

#### Response example ###

```json
{
    "context": [
        "https://w3id.org/did/v1",
        "https://w3id.org/security/v1"
    ],
    "id": "did:defined:166evUDhpSSq23xP26oeQ4uNZNZce1KFFP",
    "salt": "52e1aea9-c6ac-4af2-bec0-aaf9cd30a182",
    "publicKey": [
        {
            "id": "did:defined:166evUDhpSSq23xP26oeQ4uNZNZce1KFFP#authentication-key-1",
            "owner": "did:defined:166evUDhpSSq23xP26oeQ4uNZNZce1KFFP",
            "type": "Ed25519VerificationKey2018",
            "publicKeyHex": "0023757068c19dd7b51531ed327c0e000e7f737a3611a7374015618988aa733bb8"
        },
        {
            "id": "did:defined:166evUDhpSSq23xP26oeQ4uNZNZce1KFFP#granting-key-2",
            "owner": "did:defined:166evUDhpSSq23xP26oeQ4uNZNZce1KFFP",
            "type": "Ed25519VerificationKey2018",
            "publicKeyHex": "00e8b5ce1df5c8984511591967b17ae0913581e2daca7b403507536b0294c6eacd"
        }
    ],
    "service": [
        {
            "serviceName": "openid",
            "type": "OpenIdConnectVersion1.0Service",
            "serviceEndpoint": "https://openid.example.com/"
        },
        {
            "serviceName": "vcr",
            "type": "CredentialRepositoryService",
            "serviceEndpoint": "https://repository.example.com/service/8377464"
        },
        {
            "serviceName": "xdi",
            "type": "XdiService",
            "serviceEndpoint": "https://xdi.example.com/8377464"
        }
    ],
    "created": "2019-02-11T07:27:43.687Z"
}
```


`POST /api/documentGeneration/claim`

Verifiable claim document generation

#### Parameters ###

| Parameter      | Type              | Required      |
| -------------- | ----------------- | ------------- |
| Context        | Array of strings  | No            |
| Id             | String            | Yes           |
| Type           | Array of strings  | No            |
| Issuer         | String            | Yes           |
| IssuanceDate   | String            | Yes           |
| ExpirationDate | String            | Yes           |
| Claim          | Claim object      | Yes           |


#### Request example ###

```json
{
	"context": ["http://www.example.com"],
	"type": ["customType"],
    "id": "http://defined.id/vc/1",
    "issuer": "Defined id",
    "claim": {
    	"id": "http://defined.id/vc/1",
    	"firstName": "Defined",
    	"lastName": "Id"
    },
    "issuanceDate": "2018-10-10",
    "expirationDate": "2019-10-10"
}
```

#### Response example ###

```json
{
    "context": [
        "http://www.example.com",
        "https://w3id.org/security/v2",
        "https://www.w3.org/2018/credentials/v1"
    ],
    "id": "http://defined.id/vc/1",
    "type": [
        "customType",
        "VerifiableCredential"
    ],
    "issuer": "Defined id",
    "claim": {
        "id": "http://defined.id/vc/1",
        "firstName": "Defined",
        "lastName": "Id"
    },
    "issuanceDate": "2018-10-10",
    "expirationDate": "2019-10-10"
}
```
