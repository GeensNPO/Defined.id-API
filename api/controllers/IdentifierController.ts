import {Did, DidValidator} from "@geens_npo/defined-id";

export function generateDid(req: any, res: any, next: Function): any {
    let method: string = req.body.method;
    if (method) method = method.trim();

    let nemPublicKey: string = req.body.nemPublicKey;
    if (nemPublicKey) nemPublicKey = nemPublicKey.trim();

    const did: Did = new Did(method, nemPublicKey);
    const errors = DidValidator.validateDidModel(did);
    if (errors.length > 0) return res.status(400).send(errors);

    return res.status(200).send({
        did: did.format(),
        salt: did.salt
    });
}
