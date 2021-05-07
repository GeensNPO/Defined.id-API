import { Observable } from 'rxjs';
import { NamespaceRepository } from '../infrastructure/NamespaceRepository';
import { NamespaceId } from '../model/namespace/NamespaceId';
import { Namespace } from './Namespace';
/**
 * Namespace service
 */
export declare class NamespaceService {
    private readonly namespaceRepository;
    /**
     * Constructor
     * @param namespaceRepository
     */
    constructor(namespaceRepository: NamespaceRepository);
    /**
     * Get namespace info and name from namespace Id
     * @param id
     * @returns {Observable<Namespace>}
     */
    namespace(id: NamespaceId): Observable<Namespace>;
    private extractFullNamespace;
}
