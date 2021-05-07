/**
 * The account key flags enum,.
 */
export declare enum AccountKeyTypeFlags {
    /**
     * Unset key.
     */
    Unset = 0,
    /**
     * Linked account public key.
     * note This can be either a remote or main account public key depending on context.
     */
    Linked = 1,
    /**
     * Node public key on which remote is allowed to harvest.
     */
    Node = 2,
    /**
     * VRF public key.
     */
    VRF = 4,
    /**
     * All valid keys.
     */
    All = 7
}
