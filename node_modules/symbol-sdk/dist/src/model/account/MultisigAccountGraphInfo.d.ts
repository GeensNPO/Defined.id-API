import { MultisigAccountInfo } from './MultisigAccountInfo';
/**
 * Multisig account graph info model
 */
export declare class MultisigAccountGraphInfo {
    /**
     * The multisig accounts.
     */
    readonly multisigEntries: Map<number, MultisigAccountInfo[]>;
    /**
     * @param multisigEntries
     */
    constructor(
    /**
     * The multisig accounts.
     */
    multisigEntries: Map<number, MultisigAccountInfo[]>);
}
