/**
 * This script gives extending to any classes.
 */
(function (win, doc, exports) {

    'use strict';

    /**
     * Extend classes
     * @param {Function} child sub class function.
     * @param {Function} _super super class function.
     */
    function extend(child, _super) {
        function ctor() { this.constructor = child; }
        ctor.prototype = _super.prototype;
        child.prototype = new ctor();
        child.prototype._superclass = _super;
        child.prototype._super = function () {
            this._prevctor = (this._prevctor) ? this._prevctor.prototype._superclass : _super;
            this._prevctor.apply(this, arguments);
        };
    }

    /*! ------------------------------------------------------------------------
        EXPORTS TO GLOBAL
    ---------------------------------------------------------------------------- */
    exports.extend = extend;

}(window, document, window));

