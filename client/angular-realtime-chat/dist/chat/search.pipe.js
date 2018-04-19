import { Pipe } from '@angular/core';
var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, key, term) {
        return value.filter(function (item) {
            if (item.hasOwnProperty(key)) {
                if (term) {
                    var regExp = new RegExp('\\b' + term, 'gi');
                    return regExp.test(item[key]);
                }
                else {
                    return true;
                }
            }
            else {
                return false;
            }
        });
    };
    SearchPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'searchPipe',
                },] },
    ];
    return SearchPipe;
}());
export { SearchPipe };
//# sourceMappingURL=search.pipe.js.map