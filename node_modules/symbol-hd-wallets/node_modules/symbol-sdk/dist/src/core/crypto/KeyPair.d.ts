export declare class KeyPair {
    /**
     * Creates a key pair from a private key string.
     * @param {string} privateKeyString A hex encoded private key string.
     * @returns {module:crypto/keyPair~KeyPair} The key pair.
     */
    static createKeyPairFromPrivateKeyString(privateKeyString: string): {
        privateKey: Uint8Array;
        publicKey: Uint8Array;
    };
    /**
     * Signs a data buffer with a key pair.
     * @param {module:crypto/keyPair~KeyPair} keyPair The key pair to use for signing.
     * @param {Uint8Array} data The data to sign.
     * @returns {Uint8Array} The signature.
     */
    static sign(keyPair: any, data: Uint8Array): Uint8Array;
    /**
     * Verifies a signature.
     * @param {Uint8Array} publicKey The public key to use for verification.
     * @param {Uint8Array} data The data to verify.
     * @param {Uint8Array} signature The signature to verify.
     * @returns {boolean} true if the signature is verifiable, false otherwise.
     */
    static verify(publicKey: Uint8Array, data: Uint8Array, signature: Uint8Array): boolean;
}
