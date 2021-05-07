export declare class MultisigNetworkProperties {
    readonly maxMultisigDepth?: string | undefined;
    readonly maxCosignatoriesPerAccount?: string | undefined;
    readonly maxCosignedAccountsPerAccount?: string | undefined;
    /**
     * @param maxMultisigDepth - Maximum number of multisig levels.
     * @param maxCosignatoriesPerAccount - Maximum number of cosignatories per account.
     * @param maxCosignedAccountsPerAccount - Maximum number of accounts a single account can cosign.
     */
    constructor(maxMultisigDepth?: string | undefined, maxCosignatoriesPerAccount?: string | undefined, maxCosignedAccountsPerAccount?: string | undefined);
}
