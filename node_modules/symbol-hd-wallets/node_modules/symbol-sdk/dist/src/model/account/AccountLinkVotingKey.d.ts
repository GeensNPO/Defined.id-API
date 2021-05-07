/**
 * Account link voting key
 */
export declare class AccountLinkVotingKey {
    /**
     * public key
     */
    readonly publicKey: string;
    /**
     * Start epoch
     */
    readonly startEpoch: number;
    /**
     * End epoch
     */
    readonly endEpoch: number;
    /**
     *
     */
    constructor(
    /**
     * public key
     */
    publicKey: string, 
    /**
     * Start epoch
     */
    startEpoch: number, 
    /**
     * End epoch
     */
    endEpoch: number);
}
