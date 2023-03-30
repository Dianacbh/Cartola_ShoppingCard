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
    instance = new EduitRestShoppingCartApiOpenApi30.UserRequestDTO();
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

  describe('UserRequestDTO', function() {
    it('should create an instance of UserRequestDTO', function() {
      // uncomment below and update the code to test UserRequestDTO
      //var instance = new EduitRestShoppingCartApiOpenApi30.UserRequestDTO();
      //expect(instance).to.be.a(EduitRestShoppingCartApiOpenApi30.UserRequestDTO);
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instance = new EduitRestShoppingCartApiOpenApi30.UserRequestDTO();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "firstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instance = new EduitRestShoppingCartApiOpenApi30.UserRequestDTO();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "lastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instance = new EduitRestShoppingCartApiOpenApi30.UserRequestDTO();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new EduitRestShoppingCartApiOpenApi30.UserRequestDTO();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instance = new EduitRestShoppingCartApiOpenApi30.UserRequestDTO();
      //expect(instance).to.be();
    });

    it('should have the property role (base name: "role")', function() {
      // uncomment below and update the code to test the property role
      //var instance = new EduitRestShoppingCartApiOpenApi30.UserRequestDTO();
      //expect(instance).to.be();
    });

  });

}));