/**
 * Eduit REST shopping cart API - OpenAPI 3.0
 * Aplicacion Carrito de compras Bootcamp EducacionIt.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: federicovittorini@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CategoryDTO from '../com.eduit.bootcamp.cart-ui.model/CategoryDTO';
import CategoryRequestDTO from '../com.eduit.bootcamp.cart-ui.model/CategoryRequestDTO';
import ProductDTO from '../com.eduit.bootcamp.cart-ui.model/ProductDTO';
import ProductRequestDTO from '../com.eduit.bootcamp.cart-ui.model/ProductRequestDTO';
import ResponseContainerResponseDTO from '../com.eduit.bootcamp.cart-ui.model/ResponseContainerResponseDTO';

/**
* Backoffice service.
* @module com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.api/BackofficeApi
* @version 1.0.0
*/
export default class BackofficeApi {

    /**
    * Constructs a new BackofficeApi. 
    * @alias module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.api/BackofficeApi
    * @class
    * @param {module:com.eduit.bootcamp.cart-ui/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.eduit.bootcamp.cart-ui/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createCategory operation.
     * @callback module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.api/BackofficeApi~createCategoryCallback
     * @param {String} error Error message, if any.
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ResponseContainerResponseDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create category
     * Create a category, authentication required.
     * @param {Object} opts Optional parameters
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/CategoryRequestDTO} opts.categoryRequestDTO Created category object
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.api/BackofficeApi~createCategoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ResponseContainerResponseDTO}
     */
    createCategory(opts, callback) {
      opts = opts || {};
      let postBody = opts['categoryRequestDTO'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ResponseContainerResponseDTO;
      return this.apiClient.callApi(
        '/products/category', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createProduct operation.
     * @callback module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.api/BackofficeApi~createProductCallback
     * @param {String} error Error message, if any.
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ResponseContainerResponseDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create product
     * Create a product, authentication required.
     * @param {Object} opts Optional parameters
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ProductRequestDTO} opts.productRequestDTO Created product object
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.api/BackofficeApi~createProductCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ResponseContainerResponseDTO}
     */
    createProduct(opts, callback) {
      opts = opts || {};
      let postBody = opts['productRequestDTO'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ResponseContainerResponseDTO;
      return this.apiClient.callApi(
        '/products/product', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCategory operation.
     * @callback module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.api/BackofficeApi~deleteCategoryCallback
     * @param {String} error Error message, if any.
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ResponseContainerResponseDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete category
     * Delete a category, authentication required.
     * @param {Number} categoryId the category id
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.api/BackofficeApi~deleteCategoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ResponseContainerResponseDTO}
     */
    deleteCategory(categoryId, callback) {
      let postBody = null;
      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling deleteCategory");
      }

      let pathParams = {
        'categoryId': categoryId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ResponseContainerResponseDTO;
      return this.apiClient.callApi(
        '/products/category/{categoryId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteProduct operation.
     * @callback module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.api/BackofficeApi~deleteProductCallback
     * @param {String} error Error message, if any.
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ResponseContainerResponseDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete product
     * Delete a product, authentication required.
     * @param {Number} productId the product id
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.api/BackofficeApi~deleteProductCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ResponseContainerResponseDTO}
     */
    deleteProduct(productId, callback) {
      let postBody = null;
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling deleteProduct");
      }

      let pathParams = {
        'productId': productId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ResponseContainerResponseDTO;
      return this.apiClient.callApi(
        '/products/product/{productId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAllCategory operation.
     * @callback module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.api/BackofficeApi~retrieveAllCategoryCallback
     * @param {String} error Error message, if any.
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ResponseContainerResponseDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a list of category
     * Retrieve a list of category, authentication required.
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.api/BackofficeApi~retrieveAllCategoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ResponseContainerResponseDTO}
     */
    retrieveAllCategory(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ResponseContainerResponseDTO;
      return this.apiClient.callApi(
        '/products/category', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAllProducts operation.
     * @callback module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.api/BackofficeApi~retrieveAllProductsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ResponseContainerResponseDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a list of products
     * Retrieve a list of products, authentication required.
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.api/BackofficeApi~retrieveAllProductsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ResponseContainerResponseDTO}
     */
    retrieveAllProducts(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ResponseContainerResponseDTO;
      return this.apiClient.callApi(
        '/products/product', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveCategory operation.
     * @callback module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.api/BackofficeApi~retrieveCategoryCallback
     * @param {String} error Error message, if any.
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ResponseContainerResponseDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve category
     * Retrieve a category, authentication required.
     * @param {Number} categoryId the category id
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.api/BackofficeApi~retrieveCategoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ResponseContainerResponseDTO}
     */
    retrieveCategory(categoryId, callback) {
      let postBody = null;
      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling retrieveCategory");
      }

      let pathParams = {
        'categoryId': categoryId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ResponseContainerResponseDTO;
      return this.apiClient.callApi(
        '/products/category/{categoryId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveProduct operation.
     * @callback module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.api/BackofficeApi~retrieveProductCallback
     * @param {String} error Error message, if any.
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ResponseContainerResponseDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve product
     * Retrieve a product, authentication required.
     * @param {Number} productId the product id
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.api/BackofficeApi~retrieveProductCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ResponseContainerResponseDTO}
     */
    retrieveProduct(productId, callback) {
      let postBody = null;
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling retrieveProduct");
      }

      let pathParams = {
        'productId': productId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ResponseContainerResponseDTO;
      return this.apiClient.callApi(
        '/products/product/{productId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCategory operation.
     * @callback module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.api/BackofficeApi~updateCategoryCallback
     * @param {String} error Error message, if any.
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ResponseContainerResponseDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update category
     * Update a category, authentication required.
     * @param {Number} categoryId the category id
     * @param {Object} opts Optional parameters
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/CategoryDTO} opts.categoryDTO Updated category object
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.api/BackofficeApi~updateCategoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ResponseContainerResponseDTO}
     */
    updateCategory(categoryId, opts, callback) {
      opts = opts || {};
      let postBody = opts['categoryDTO'];
      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling updateCategory");
      }

      let pathParams = {
        'categoryId': categoryId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ResponseContainerResponseDTO;
      return this.apiClient.callApi(
        '/products/category/{categoryId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateProduct operation.
     * @callback module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.api/BackofficeApi~updateProductCallback
     * @param {String} error Error message, if any.
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ResponseContainerResponseDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update product
     * Update a product, authentication required.
     * @param {Number} productId the product id
     * @param {Object} opts Optional parameters
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ProductDTO} opts.productDTO Updated product object
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.api/BackofficeApi~updateProductCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ResponseContainerResponseDTO}
     */
    updateProduct(productId, opts, callback) {
      opts = opts || {};
      let postBody = opts['productDTO'];
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling updateProduct");
      }

      let pathParams = {
        'productId': productId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ResponseContainerResponseDTO;
      return this.apiClient.callApi(
        '/products/product/{productId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
