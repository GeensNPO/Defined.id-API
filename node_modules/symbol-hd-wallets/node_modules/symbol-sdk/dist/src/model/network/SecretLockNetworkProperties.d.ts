export declare class SecretLockNetworkProperties {
    readonly maxSecretLockDuration?: string | undefined;
    readonly minProofSize?: string | undefined;
    readonly maxProofSize?: string | undefined;
    /**
     * @param maxSecretLockDuration - Maximum number of blocks for which a secret lock can exist.
     * @param minProofSize - Minimum size of a proof in bytes.
     * @param maxProofSize - Maximum size of a proof in bytes.
     */
    constructor(maxSecretLockDuration?: string | undefined, minProofSize?: string | undefined, maxProofSize?: string | undefined);
}
