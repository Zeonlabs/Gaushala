export class PinNotFoundException extends Error{
    code = 404
    message = 'pin not found'
}
export class IdNotProvidedException extends Error{
    code = 422
    message = 'Id not provided'
}
export class NoRecordWithIDException extends Error{
    code=404
    message='no record found with such id'
}