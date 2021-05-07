export declare class Crypto {
    private static AES_ALGO;
    /**
     * Encrypt data
     * @param {string} data
     * @param {string} salt
     * @param {string} password
     */
    static encrypt(data: string, password: string): string;
    /**
     * Decrypt data
     * @param {string} data
     * @param {string} salt
     * @param {string} password
     */
    static decrypt(data: string, password: string): string;
    /***
     * Encode a message, separated from encode() to help testing
     *
     * @param {string} senderPriv - A sender private key
     * @param {string} recipientPub - A recipient public key
     * @param {string} msg - A text message
     * @param {Uint8Array} iv - An initialization vector
     * @param {Uint8Array} salt - A salt
     * @return {string} - The encoded message
     */
    static _encode: (senderPriv: string, recipientPub: string, msg: string, iv: Uint8Array) => string;
    /**
     * Encode a message using AES-GCM algorithm
     *
     * @param {string} senderPriv - A sender private key
     * @param {string} recipientPub - A recipient public key
     * @param {string} msg - A text message
     * @param {boolean} isHexString - Is payload string a hexadecimal string (default = false)
     * @return {string} - The encoded message
     */
    static encode: (senderPriv: string, recipientPub: string, msg: string, isHexString?: boolean) => string;
    /**
     * Decode an encrypted message payload
     *
     * @param {string} recipientPrivate - A recipient private key
     * @param {string} senderPublic - A sender public key
     * @param {Uint8Array} payload - An encrypted message payload in bytes
     * @param {Uint8Array} tagAndIv - 16-bytes AES auth tag and 12-byte AES initialization vector
     * @return {string} - The decoded payload as hex
     */
    static _decode: (recipientPrivate: string, senderPublic: string, payload: Uint8Array, tagAndIv: Uint8Array) => string;
    /**
     * Decode an encrypted (AES-GCM algorithm) message payload
     *
     * @param {string} recipientPrivate - A recipient private key
     * @param {string} senderPublic - A sender public key
     * @param {string} payload - An encrypted message payload
     * @return {string} - The decoded payload as hex
     */
    static decode: (recipientPrivate: string, senderPublic: string, payload: string) => string;
    /**
     * Generate random bytes by length
     * @param {number} length - The length of the random bytes
     *
     * @return {Uint8Array}
     */
    static randomBytes: (length: number) => any;
}
