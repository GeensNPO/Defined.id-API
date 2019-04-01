import {GenerateDidDocumentHandler, GenerateVerifiableClaimDocumentHandler} from "@geens_npo/defined-id";

export function generateDidDocument(req: any, res: any, next: Function): any {
    const generateDidDocumentHandler: GenerateDidDocumentHandler = new GenerateDidDocumentHandler();
    const response = generateDidDocumentHandler.handle(req.body);

    if (response.errors && response.errors.length > 0) {
        return res.status(500).send(response);
    }

    if (response.validationErrors && response.validationErrors.length > 0) {
        return res.status(400).send(response);
    }

    return res.status(200).send(response.didDocument);
}


export function generateVerifiableClaimsDocument(req: any, res: any, next: Function): any {
    const generateVerifiableClaimsDocument: GenerateVerifiableClaimDocumentHandler = new GenerateVerifiableClaimDocumentHandler();
    const response = generateVerifiableClaimsDocument.handle(req.body);

    if (response.errors && response.errors.length > 0) {
        return res.status(500).send(response);
    }

    if (response.validationErrors && response.validationErrors.length > 0) {
        return res.status(400).send(response);
    }

    return res.status(200).send(response.verifiableClaimDocument);
}
