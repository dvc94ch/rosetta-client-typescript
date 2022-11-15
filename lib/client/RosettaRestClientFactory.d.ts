import { AccountApi, BlockApi, CallApi, ConstructionApi, EventsApi, MempoolApi, Middleware, NetworkApi, SearchApi } from '../openapi';
/**
 * Params used to create a client factory.
 */
interface RestClientFactoryParams {
    /**
     * The rest url of the Rosetta service. E.g: http://localhost:8080/
     */
    url: string;
    /**
     * Optional fetch api.
     */
    fetchApi?: unknown;
    /**
     * Middleware for pre/post request customizations.
     */
    middleware?: Middleware[];
}
/**
 * Main class used to create Rosetta rest clients.
 *
 * These rest client would most likely be used for Rosetta e2e testing as this sdk brings server side dependencies (e.g. express) you may not want in a Rosetta client.
 *
 */
export declare class RosettaRestClientFactory {
    private readonly configuration;
    /**
     * Constructor
     *
     * @param configs the config used to tune the client, including url, custom fetch implementation and middleware.
     */
    constructor(configs: RestClientFactoryParams);
    account(): AccountApi;
    block(): BlockApi;
    events(): EventsApi;
    construction(): ConstructionApi;
    call(): CallApi;
    mempool(): MempoolApi;
    network(): NetworkApi;
    search(): SearchApi;
}
export {};
