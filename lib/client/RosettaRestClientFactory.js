"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosettaRestClientFactory = void 0;
/*
 * Copyright 2022 Fernando Boucquez
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var openapi_1 = require("../openapi");
/**
 * Main class used to create Rosetta rest clients.
 *
 * These rest client would most likely be used for Rosetta e2e testing as this sdk brings server side dependencies (e.g. express) you may not want in a Rosetta client.
 *
 */
var RosettaRestClientFactory = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param configs the config used to tune the client, including url, custom fetch implementation and middleware.
     */
    function RosettaRestClientFactory(configs) {
        var fetchApi = configs.fetchApi || (typeof window !== 'undefined' && window.fetch.bind(window)) || fetch;
        this.configuration = new openapi_1.Configuration({
            basePath: configs.url,
            fetchApi: fetchApi,
            middleware: configs.middleware || [],
        });
    }
    RosettaRestClientFactory.prototype.account = function () {
        return new openapi_1.AccountApi(this.configuration);
    };
    RosettaRestClientFactory.prototype.block = function () {
        return new openapi_1.BlockApi(this.configuration);
    };
    RosettaRestClientFactory.prototype.events = function () {
        return new openapi_1.EventsApi(this.configuration);
    };
    RosettaRestClientFactory.prototype.construction = function () {
        return new openapi_1.ConstructionApi(this.configuration);
    };
    RosettaRestClientFactory.prototype.call = function () {
        return new openapi_1.CallApi(this.configuration);
    };
    RosettaRestClientFactory.prototype.mempool = function () {
        return new openapi_1.MempoolApi(this.configuration);
    };
    RosettaRestClientFactory.prototype.network = function () {
        return new openapi_1.NetworkApi(this.configuration);
    };
    RosettaRestClientFactory.prototype.search = function () {
        return new openapi_1.SearchApi(this.configuration);
    };
    return RosettaRestClientFactory;
}());
exports.RosettaRestClientFactory = RosettaRestClientFactory;
//# sourceMappingURL=RosettaRestClientFactory.js.map