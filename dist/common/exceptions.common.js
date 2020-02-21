"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PinNotFoundException extends Error {
    constructor() {
        super(...arguments);
        this.code = 404;
        this.message = 'pin not found';
    }
}
exports.PinNotFoundException = PinNotFoundException;
class IdNotProvidedException extends Error {
    constructor() {
        super(...arguments);
        this.code = 422;
        this.message = 'Id not provided';
    }
}
exports.IdNotProvidedException = IdNotProvidedException;
class NoRecordWithIDException extends Error {
    constructor() {
        super(...arguments);
        this.code = 404;
        this.message = 'no record found with such id';
    }
}
exports.NoRecordWithIDException = NoRecordWithIDException;
//# sourceMappingURL=exceptions.common.js.map