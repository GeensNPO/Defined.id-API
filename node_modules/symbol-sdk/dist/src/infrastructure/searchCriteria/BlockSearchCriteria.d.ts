import { BlockOrderBy } from './BlockOrderBy';
import { SearchCriteria } from './SearchCriteria';
/**
 * Defines the params used to search blocks. With this criteria, you can sort and filter
 * block queries using rest.
 */
export interface BlockSearchCriteria extends SearchCriteria {
    /**
     * Public key of the account signing the entity. (optional)
     */
    signerPublicKey?: string;
    /**
     * beneficiary address. (optional)
     */
    beneficiaryAddress?: string;
    /**
     * Order by block id or height. (optional)
     */
    orderBy?: BlockOrderBy;
}
