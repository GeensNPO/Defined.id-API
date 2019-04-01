import {
    GenerateKeyHandler,
    GenerateKeysHandler,
    GeneratePublicKeyDocumentRequest,
    GeneratePublicKeysDocumentHandler,
    HashRegisterHandler,
    NemAccount,
    NemTransactionService,
    ProofOfDocumentService,
    ProveOwnershipHandler,
    SecurityService,
    SeedService,
    VerifyOwnershipHandler
} from "@geens_npo/defined-id";

export function initializeKeys(req: any, res: any, next: Function): any {
    let password: string = req.body.password;
    if (password) password = password.trim();
    else return res.status(400).send(['Password is required']);

    const derivedKey = SecurityService.scrypt(password);
    return res.ok();
}

export function hashBytes(req: any, res: any, next: Function): any {
    let bytes: Uint8Array = req.body.documentBytes;

    if (!bytes) return res.status(400).send(['documentBytes is required']);
    return res.status(200).send({
        hash: SecurityService.sha256Hash(bytes)
    });
}

export function timestampDocument(req: any, res: any, next: Function): any {
    const hashRegisterHandler = new HashRegisterHandler();
    const register = hashRegisterHandler.handle(req.body);

    if (register.validationErrors && register.validationErrors.length > 0) {
        return res.status(400).send({code: 400, message: register.validationErrors})
    }

    const generateKeyHandler: GenerateKeyHandler = new GenerateKeyHandler();
    const key = generateKeyHandler.handle(req.body);

    if (key.errors && key.errors.length > 0) {
        return res.status(500).send(key);
    }
    if (key.validationErrors && key.validationErrors.length > 0) {
        return res.status(400).send(key);
    }

    const nemAccount = new NemAccount(key.key, register.nemCatapultBlockchain);
    return NemTransactionService.timestampTransaction(nemAccount, register.documentHash, register.nodeUri).then((transaction) => {

        return res.status(200).send({
            nemTransactionHash: transaction
        });
    }).catch((error) => {
        const status = error.status || 400;
        return res.status(status).send({code: status, message: error})

    })
}

export function verifyHash(req: any, res: any, next: Function): any {
    const hashRegisterHandler = new HashRegisterHandler();
    const register = hashRegisterHandler.handle(req.body);

    if (register.validationErrors && register.validationErrors.length > 0) {
        return res.status(400).send({code: 400, message: register.validationErrors})
    }

    return NemTransactionService.getTransactionIndexForHash(req.body.publicKey, register.documentHash, register.nodeUri, register.nemCatapultBlockchain).then((result) => {
        let info;
        switch (result) {
            case -1:
                info = "Hash was not registered";
                break;
            case 0:
                info = "Hash was registered";
                break;
            default:
                info = "Hash was registered but is outdated";
                break;
        }
        return res.status(200).send({
            hashIndex: result,
            message: info
        });
    }).catch((error) => {
        const status = error.status || 400;
        return res.status(status).send({code: status, message: error})
    })
}

export function proveOwnership(req: any, res: any, next: Function): any {
    const proveOwnershipHandler: ProveOwnershipHandler = new ProveOwnershipHandler();
    const response = proveOwnershipHandler.handle(req.body);

    if (response.errors && response.errors.length > 0) {
        return res.status(500).send(response);
    }
    if (response.validationErrors && response.validationErrors.length > 0) {
        return res.status(400).send(response);
    }

    return res.status(200).send(response);
}

export function verifyOwnership(req: any, res: any, next: Function): any {
    const verifyOwnershipHandler: VerifyOwnershipHandler = new VerifyOwnershipHandler();
    const response = verifyOwnershipHandler.handle(req.body);

    if (response.errors && response.errors.length > 0) {
        return res.status(500).send(response);
    }
    if (response.validationErrors && response.validationErrors.length > 0) {
        return res.status(400).send(response);
    }

    return res.status(200).send(response);
}

export function generatePublicKeys(req: any, res: any, next: Function): any {

    const generateKeysHandler: GenerateKeysHandler = new GenerateKeysHandler();
    const keysResponse = generateKeysHandler.handle(req.body);

    if (keysResponse.errors && keysResponse.errors.length > 0) {
        return res.status(500).send(keysResponse);
    }

    if (keysResponse.validationErrors && keysResponse.validationErrors.length > 0) {
        return res.status(400).send(keysResponse);
    }

    const generatePublicKeysDocumentHandler: GeneratePublicKeysDocumentHandler = new GeneratePublicKeysDocumentHandler();
    const request: GeneratePublicKeyDocumentRequest = {
        did: req.body.did,
        encode: req.body.encode,
        pubKeys: keysResponse.keys
    };

    const generateResponse = generatePublicKeysDocumentHandler.handle(request);

    if (generateResponse.errors && generateResponse.errors.length > 0) {
        return res.status(500).send(generateResponse);
    }

    if (generateResponse.validationErrors && generateResponse.validationErrors.length > 0) {
        return res.status(400).send(generateResponse);
    }

    return res.status(200).send(generateResponse);
}


export function proofDocument(req: any, res: any, next: Function): any {

    const generateKeyHandler: GenerateKeyHandler = new GenerateKeyHandler();
    const key = generateKeyHandler.handle(req.body);

    if (key.errors && key.errors.length > 0) {
        return res.status(500).send(key);
    }
    if (key.validationErrors && key.validationErrors.length > 0) {
        return res.status(400).send(key);
    }

    const document = req.body.document;
    if (!document) {
        return res.status(400).send({error: ["Document is required"]});

    }

    return res.status(200).send(ProofOfDocumentService.generateProof(document, key.key, "http://www.defined.id"));
}

export function generateSeed(req: any, res: any, next: Function): any {
    return res.status(200).send({seed: SeedService.generateSeed()})
}
