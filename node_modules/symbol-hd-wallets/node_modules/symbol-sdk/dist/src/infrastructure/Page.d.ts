/**
 * It represents a page of results after a repository search call.
 *
 * @param <T> then model type.
 */
export declare class Page<T> {
    readonly data: T[];
    readonly pageNumber: number;
    readonly pageSize: number;
    isLastPage: boolean;
    /**
     * Constructor.
     *
     * @param data the page data
     * @param pageNumber the current page number starting from 1.
     * @param pageSize the page size.
     */
    constructor(data: T[], pageNumber: number, pageSize: number);
}
