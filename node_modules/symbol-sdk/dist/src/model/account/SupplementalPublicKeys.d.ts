import { AccountLinkPublicKey } from './AccountLinkPublicKey';
import { AccountLinkVotingKey } from './AccountLinkVotingKey';
/**
 * SupplementalPublicKeys
 */
export declare class SupplementalPublicKeys {
    /**
     * Linked keys
     */
    readonly linked?: AccountLinkPublicKey | undefined;
    /**
     * Node linked keys
     */
    readonly node?: AccountLinkPublicKey | undefined;
    /**
     * VRF linked keys
     */
    readonly vrf?: AccountLinkPublicKey | undefined;
    /**
     * Voting linked keys
     */
    readonly voting?: AccountLinkVotingKey[] | undefined;
    /**
     *
     */
    constructor(
    /**
     * Linked keys
     */
    linked?: AccountLinkPublicKey | undefined, 
    /**
     * Node linked keys
     */
    node?: AccountLinkPublicKey | undefined, 
    /**
     * VRF linked keys
     */
    vrf?: AccountLinkPublicKey | undefined, 
    /**
     * Voting linked keys
     */
    voting?: AccountLinkVotingKey[] | undefined);
}
