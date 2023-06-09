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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/com.eduit.bootcamp.cart-ui/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/com.eduit.bootcamp.cart-ui/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EduitRestShoppingCartApiOpenApi30);
  }
}(this, function(expect, EduitRestShoppingCartApiOpenApi30) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EduitRestShoppingCartApiOpenApi30.ProductDTO();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ProductDTO', function() {
    it('should create an instance of ProductDTO', function() {
      // uncomment below and update the code to test ProductDTO
      //var instance = new EduitRestShoppingCartApiOpenApi30.ProductDTO();
      //expect(instance).to.be.a(EduitRestShoppingCartApiOpenApi30.ProductDTO);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new EduitRestShoppingCartApiOpenApi30.ProductDTO();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new EduitRestShoppingCartApiOpenApi30.ProductDTO();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new EduitRestShoppingCartApiOpenApi30.ProductDTO();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instance = new EduitRestShoppingCartApiOpenApi30.ProductDTO();
      //expect(instance).to.be();
    });

    it('should have the property qty (base name: "qty")', function() {
      // uncomment below and update the code to test the property qty
      //var instance = new EduitRestShoppingCartApiOpenApi30.ProductDTO();
      //expect(instance).to.be();
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instance = new EduitRestShoppingCartApiOpenApi30.ProductDTO();
      //expect(instance).to.be();
    });

    it('should have the property dateCreated (base name: "dateCreated")', function() {
      // uncomment below and update the code to test the property dateCreated
      //var instance = new EduitRestShoppingCartApiOpenApi30.ProductDTO();
      //expect(instance).to.be();
    });

    it('should have the property dateDeleted (base name: "dateDeleted")', function() {
      // uncomment below and update the code to test the property dateDeleted
      //var instance = new EduitRestShoppingCartApiOpenApi30.ProductDTO();
      //expect(instance).to.be();
    });

  });

}));
