/**
 * When the repository raises an error, the Error's message would be a json string of this format:
 */
export interface RepositoryCallError {
    /**
     * The http status code if know, other wise 0.
     */
    readonly statusCode: number;
    /**
     * The status message if known;
     */
    readonly statusMessage: string;
    /**
     * The rest response body as text.
     */
    readonly body: string;
}
