import { Address } from '../account/Address';
import { Alias } from './Alias';
/**
 * The AddressAlias structure describes address aliases
 *
 * @since 0.10.2
 */
export declare class AddressAlias extends Alias {
    /**
     * The alias address
     */
    readonly address: Address;
    /**
     * Create AddressAlias object
     * @param content
     */
    constructor(
    /**
     * The alias address
     */
    address: Address);
    /**
     * Compares AddressAlias for equality.
     *
     * @return boolean
     */
    equals(alias: any): boolean;
    /**
     * Generate alias buffer
     * @return {Uint8Array}
     */
    serialize(): Uint8Array;
}
