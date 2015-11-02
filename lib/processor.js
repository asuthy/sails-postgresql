/**
 * Module Dependencies
 */

var _ = require('lodash');

/**
 * Processes data returned from a SQL query.
 */

var Processor = module.exports = function Processor(schema) {
    this.schema = schema;
    return this;
};

/**
 * Cast special values to proper types.
 *
 * Ex: Array is stored as "[0,1,2,3]" and should be cast to proper
 * array for return values.
 */

Processor.prototype.cast = function(table, values) {

    // Removed support for array due to poor performance
    return values;
};