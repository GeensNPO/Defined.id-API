import { Alias } from './Alias';
/**
 * The EmptyAlias structure describes empty aliases (type:0)
 *
 * @since 0.10.2
 */
export declare class EmptyAlias extends Alias {
    /**
     * The alias type
     */
    readonly type: number;
    /**
     * Create EmptyAlias object
     *
     * @param type
     * @param content
     */
    constructor();
    /**
     * Compares EmptyAlias for equality.
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
