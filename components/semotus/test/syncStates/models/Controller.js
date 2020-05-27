"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var dist_1 = require("../../../dist");
var Customer_1 = require("./Customer");
var Account_1 = require("./Account");
var Address_1 = require("./Address");
var delay = require('../../../dist/helpers/Utilities.js').delay;
var Controller = /** @class */ (function (_super) {
    __extends(Controller, _super);
    function Controller() {
        return _super.call(this) || this;
    }
    Controller.prototype.mockServerInit = function () {
        // this.syncState = {scope: undefined, state: undefined};
        // Setup customers and addresses
        var sam = new Customer_1.CustomerA('Sam', 'M', 'Elsamman');
        var karen = new Customer_1.CustomerB('Karen', 'M', 'Burke');
        var ashling = new Customer_1.Customer('Ashling', '', 'Burke');
        // Setup referrers
        sam.referrers = [ashling, karen];
        ashling.referredBy = sam;
        karen.referredBy = sam;
        // Setup addresses
        sam.addAddress(['500 East 83d', 'Apt 1E'], 'New York', 'NY', '10028');
        sam.addAddress(['38 Haggerty Hill Rd', ''], 'Rhinebeck', 'NY', '12572');
        karen.addAddress(['500 East 83d', 'Apt 1E'], 'New York', 'NY', '10028'); // first stage
        karen.addAddress(['38 Haggerty Hill Rd'], 'Rhinebeck', 'NY', '12572'); // first stage
        karen.addAddress(['SomeRandom Address here'], 'Town', 'HI', '00000'); // Second Stage
        karen.addAddress(['Another random Address'], 'Second', 'Hola', '88888'); // Second Stage
        ashling.addAddress(['End of the Road', ''], 'Lexington', 'KY', '34421');
        // Setup accounts
        var samsAccount = new Account_1.Account(1234, ['Sam Elsamman'], sam, sam.addresses[0]);
        var jointAccount = new Account_1.Account(123, ['Sam Elsamman', 'Karen Burke', 'Ashling Burke'], sam, karen.addresses[0]);
        jointAccount.addCustomer(karen, 'joint');
        jointAccount.addCustomer(ashling, 'joint');
        samsAccount.credit(100); // Sam has 100
        samsAccount.debit(50); // Sam has 50
        jointAccount.credit(200); // Joint has 200
        jointAccount.transferTo(100, samsAccount); // Joint has 100, Sam has 150
        jointAccount.transferFrom(50, samsAccount); // Joint has 150, Sam has 100
        jointAccount.debit(25); // Joint has 125
        this.sam = sam;
        this.karen = karen;
        this.ashling = ashling;
    };
    Controller.prototype.setState = function (role, scope, state) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.setState2(role, scope, state);
                this.ashling = this.sam = this.karen = null;
                return [2 /*return*/];
            });
        });
    };
    Controller.prototype.setState2 = function (role, scope, state) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("Role is: " + role);
                console.log("Setting syncState. Original value is " + JSON.stringify(this.syncState));
                this.syncState = { scope: scope, state: state };
                console.log('Controller sync state successfully set');
                return [2 /*return*/];
            });
        });
    };
    Controller.prototype.mainFunc = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, delay(1000)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Controller.prototype.mainFunc2 = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.sam = new Customer_1.CustomerA('yo', 'its', 'me');
                this.sam.addAddress(['500 East 83d', 'Apt 1E'], 'New York', 'NY', '10028');
                this.karen.middleName = 'dont change';
                this.karen.addresses[3].type = 'something';
                this.karen.addresses[0].type = 'nothing';
                return [2 /*return*/];
            });
        });
    };
    Controller.prototype.postServerCall = function (hasChanges, callContext, changeString) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.remoteChanges = changeString;
                return [2 /*return*/];
            });
        });
    };
    Controller.prototype.inspectMessage = function (messageCopy) {
        this.allChanges = messageCopy.changes;
    };
    Controller.prototype.giveSamASecondAccount = function () {
        var address = new Address_1.Address(this.sam, ['Plantana']);
        var samsNewAccount = new Account_1.Account(1234, ['Sam Elsamman'], this.sam, address);
        samsNewAccount.addCustomer(this.sam, 'sole');
    };
    Controller.prototype.reset = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.sam = null;
                this.karen = null;
                this.ashling = null;
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        dist_1.property(),
        __metadata("design:type", Customer_1.CustomerA)
    ], Controller.prototype, "sam", void 0);
    __decorate([
        dist_1.property(),
        __metadata("design:type", Customer_1.CustomerB)
    ], Controller.prototype, "karen", void 0);
    __decorate([
        dist_1.property(),
        __metadata("design:type", Customer_1.Customer)
    ], Controller.prototype, "ashling", void 0);
    __decorate([
        dist_1.remote({ on: 'server' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", Promise)
    ], Controller.prototype, "setState", null);
    __decorate([
        dist_1.remote({ on: 'server' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", Promise)
    ], Controller.prototype, "setState2", null);
    __decorate([
        dist_1.remote({
            on: 'server'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Controller.prototype, "mainFunc", null);
    __decorate([
        dist_1.remote({
            on: 'server'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Controller.prototype, "mainFunc2", null);
    __decorate([
        dist_1.remote(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Controller.prototype, "reset", null);
    Controller = __decorate([
        dist_1.supertypeClass,
        __metadata("design:paramtypes", [])
    ], Controller);
    return Controller;
}(dist_1.Supertype));
exports.Controller = Controller;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMEU7QUFFMUUsdUNBQTBEO0FBQzFELHFDQUFrQztBQUNsQyxxQ0FBa0M7QUFFbEMsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLG9DQUFvQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBR2hFO0lBQWdDLDhCQUFTO0lBWXhDO2VBQ0MsaUJBQU87SUFDUixDQUFDO0lBRUQsbUNBQWMsR0FBZDtRQUNDLHlEQUF5RDtRQUN6RCxnQ0FBZ0M7UUFDaEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxvQkFBUyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDaEQsSUFBSSxLQUFLLEdBQUcsSUFBSSxvQkFBUyxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDakQsSUFBSSxPQUFPLEdBQUcsSUFBSSxtQkFBUSxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFbkQsa0JBQWtCO1FBQ2xCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDakMsT0FBTyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFDekIsS0FBSyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFHdkIsa0JBQWtCO1FBQ2xCLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN0RSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMscUJBQXFCLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxPQUFP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LElBQUksY0FBYyxHQUFHLElBQUksaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzVFLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBR0ssMEJBQUssR0FBWDs7O2dCQUNDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO2dCQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Ozs7S0FDcEI7SUE5R0Q7UUFEQyxlQUFRLEVBQUU7a0NBQ04sb0JBQVM7MkNBQUM7SUFFZjtRQURDLGVBQVEsRUFBRTtrQ0FDSixvQkFBUzs2Q0FBQztJQUVqQjtRQURDLGVBQVEsRUFBRTtrQ0FDRixtQkFBUTsrQ0FBQztJQXFEbEI7UUFEQyxhQUFNLENBQUMsRUFBQyxFQUFFLEVBQUUsUUFBUSxFQUFDLENBQUM7Ozs7OENBSXRCO0lBR0Q7UUFEQyxhQUFNLENBQUMsRUFBQyxFQUFFLEVBQUUsUUFBUSxFQUFDLENBQUM7Ozs7K0NBTXRCO0lBS0Q7UUFIQyxhQUFNLENBQUM7WUFDUCxFQUFFLEVBQUUsUUFBUTtTQUNaLENBQUM7Ozs7OENBSUQ7SUFLRDtRQUhDLGFBQU0sQ0FBQztZQUNQLEVBQUUsRUFBRSxRQUFRO1NBQ1osQ0FBQzs7OzsrQ0FTRDtJQWlCRDtRQURDLGFBQU0sRUFBRTs7OzsyQ0FLUjtJQWhIVyxVQUFVO1FBRHRCLHFCQUFjOztPQUNGLFVBQVUsQ0FpSHRCO0lBQUQsaUJBQUM7Q0FBQSxBQWpIRCxDQUFnQyxnQkFBUyxHQWlIeEM7QUFqSFksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Byb3BlcnR5LCByZW1vdGUsIFN1cGVydHlwZSwgc3VwZXJ0eXBlQ2xhc3N9IGZyb20gJy4uLy4uLy4uL2Rpc3QnO1xuaW1wb3J0IHtDYWxsQ29udGV4dCwgQ2hhbmdlU3RyaW5nLCBDb250cm9sbGVyU3luY1N0YXRlLCBJU2Vtb3R1c0NvbnRyb2xsZXJ9IGZyb20gJy4uLy4uLy4uL3NyYy9oZWxwZXJzL1R5cGVzJ1xuaW1wb3J0IHtDdXN0b21lciwgQ3VzdG9tZXJBLCBDdXN0b21lckJ9IGZyb20gJy4vQ3VzdG9tZXInO1xuaW1wb3J0IHtBY2NvdW50fSBmcm9tICcuL0FjY291bnQnO1xuaW1wb3J0IHtBZGRyZXNzfSBmcm9tICcuL0FkZHJlc3MnO1xuXG5sZXQgZGVsYXkgPSByZXF1aXJlKCcuLi8uLi8uLi9kaXN0L2hlbHBlcnMvVXRpbGl0aWVzLmpzJykuZGVsYXk7XG5cbkBzdXBlcnR5cGVDbGFzc1xuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIgZXh0ZW5kcyBTdXBlcnR5cGUgaW1wbGVtZW50cyBJU2Vtb3R1c0NvbnRyb2xsZXIge1xuXHRAcHJvcGVydHkoKVxuXHRzYW06IEN1c3RvbWVyQTsgLy8gQ3VzdG9tZXIgQVxuXHRAcHJvcGVydHkoKVxuXHRrYXJlbjogQ3VzdG9tZXJCOyAvLyBDdXN0b21lciBCXG5cdEBwcm9wZXJ0eSgpXG5cdGFzaGxpbmc6IEN1c3RvbWVyO1xuXG5cdHN5bmNTdGF0ZTogQ29udHJvbGxlclN5bmNTdGF0ZTtcblx0cmVtb3RlQ2hhbmdlczogQ2hhbmdlU3RyaW5nO1xuXHRhbGxDaGFuZ2VzOiBhbnk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG1vY2tTZXJ2ZXJJbml0KCkge1xuXHRcdC8vIHRoaXMuc3luY1N0YXRlID0ge3Njb3BlOiB1bmRlZmluZWQsIHN0YXRlOiB1bmRlZmluZWR9O1xuXHRcdC8vIFNldHVwIGN1c3RvbWVycyBhbmQgYWRkcmVzc2VzXG5cdFx0dmFyIHNhbSA9IG5ldyBDdXN0b21lckEoJ1NhbScsICdNJywgJ0Vsc2FtbWFuJyk7XG5cdFx0dmFyIGthcmVuID0gbmV3IEN1c3RvbWVyQignS2FyZW4nLCAnTScsICdCdXJrZScpO1xuXHRcdHZhciBhc2hsaW5nID0gbmV3IEN1c3RvbWVyKCdBc2hsaW5nJywgJycsICdCdXJrZScpO1xuXG5cdFx0Ly8gU2V0dXAgcmVmZXJyZXJzXG5cdFx0c2FtLnJlZmVycmVycyA9IFthc2hsaW5nLCBrYXJlbl07XG5cdFx0YXNobGluZy5yZWZlcnJlZEJ5ID0gc2FtO1xuXHRcdGthcmVuLnJlZmVycmVkQnkgPSBzYW07XG5cblxuXHRcdC8vIFNldHVwIGFkZHJlc3Nlc1xuXHRcdHNhbS5hZGRBZGRyZXNzKFsnNTAwIEVhc3QgODNkJywgJ0FwdCAxRSddLCAnTmV3IFlvcmsnLCAnTlknLCAnMTAwMjgnKTtcblx0XHRzYW0uYWRkQWRkcmVzcyhbJzM4IEhhZ2dlcnR5IEhpbGwgUmQnLCAnJ10sICdSaGluZWJlY2snLCAnTlknLCAnMTI1NzInKTtcblxuXHRcdGthcmVuLmFkZEFkZHJlc3MoWyc1MDAgRWFzdCA4M2QnLCAnQXB0IDFFJ10sICdOZXcgWW9yaycsICdOWScsICcxMDAyOCcpOyAvLyBmaXJzdCBzdGFnZVxuXHRcdGthcmVuLmFkZEFkZHJlc3MoWyczOCBIYWdnZXJ0eSBIaWxsIFJkJ10sICdSaGluZWJlY2snLCAnTlknLCAnMTI1NzInKTsgLy8gZmlyc3Qgc3RhZ2Vcblx0XHRrYXJlbi5hZGRBZGRyZXNzKFsnU29tZVJhbmRvbSBBZGRyZXNzIGhlcmUnXSwgJ1Rvd24nLCAnSEknLCAnMDAwMDAnKTsgLy8gU2Vjb25kIFN0YWdlXG5cdFx0a2FyZW4uYWRkQWRkcmVzcyhbJ0Fub3RoZXIgcmFuZG9tIEFkZHJlc3MnXSwgJ1NlY29uZCcsICdIb2xhJywgJzg4ODg4Jyk7IC8vIFNlY29uZCBTdGFnZVxuXG5cdFx0YXNobGluZy5hZGRBZGRyZXNzKFsnRW5kIG9mIHRoZSBSb2FkJywgJyddLCAnTGV4aW5ndG9uJywgJ0tZJywgJzM0NDIxJyk7XG5cblx0XHQvLyBTZXR1cCBhY2NvdW50c1xuXHRcdHZhciBzYW1zQWNjb3VudCA9IG5ldyBBY2NvdW50KDEyMzQsIFsnU2FtIEVsc2FtbWFuJ10sIHNhbSwgc2FtLmFkZHJlc3Nlc1swXSk7XG5cdFx0dmFyIGpvaW50QWNjb3VudCA9IG5ldyBBY2NvdW50KDEyMywgWydTYW0gRWxzYW1tYW4nLCAnS2FyZW4gQnVya2UnLCAnQXNobGluZyBCdXJrZSddLCBzYW0sIGthcmVuLmFkZHJlc3Nlc1swXSk7XG5cdFx0am9pbnRBY2NvdW50LmFkZEN1c3RvbWVyKGthcmVuLCAnam9pbnQnKTtcblx0XHRqb2ludEFjY291bnQuYWRkQ3VzdG9tZXIoYXNobGluZywgJ2pvaW50Jyk7XG5cblx0XHRzYW1zQWNjb3VudC5jcmVkaXQoMTAwKTsgLy8gU2FtIGhhcyAxMDBcblx0XHRzYW1zQWNjb3VudC5kZWJpdCg1MCk7IC8vIFNhbSBoYXMgNTBcblx0XHRqb2ludEFjY291bnQuY3JlZGl0KDIwMCk7IC8vIEpvaW50IGhhcyAyMDBcblx0XHRqb2ludEFjY291bnQudHJhbnNmZXJUbygxMDAsIHNhbXNBY2NvdW50KTsgLy8gSm9pbnQgaGFzIDEwMCwgU2FtIGhhcyAxNTBcblx0XHRqb2ludEFjY291bnQudHJhbnNmZXJGcm9tKDUwLCBzYW1zQWNjb3VudCk7IC8vIEpvaW50IGhhcyAxNTAsIFNhbSBoYXMgMTAwXG5cdFx0am9pbnRBY2NvdW50LmRlYml0KDI1KTsgLy8gSm9pbnQgaGFzIDEyNVxuXG5cdFx0dGhpcy5zYW0gPSBzYW07XG5cdFx0dGhpcy5rYXJlbiA9IGthcmVuO1xuXHRcdHRoaXMuYXNobGluZyA9IGFzaGxpbmc7XG5cdH1cblxuXHRAcmVtb3RlKHtvbjogJ3NlcnZlcid9KVxuXHRhc3luYyBzZXRTdGF0ZShyb2xlLCBzY29wZSwgc3RhdGU/KTogUHJvbWlzZTxhbnk+IHtcblx0XHR0aGlzLnNldFN0YXRlMihyb2xlLCBzY29wZSwgc3RhdGUpO1xuXHRcdHRoaXMuYXNobGluZyA9IHRoaXMuc2FtID0gdGhpcy5rYXJlbiA9IG51bGw7XG5cdH1cblxuXHRAcmVtb3RlKHtvbjogJ3NlcnZlcid9KVxuXHRhc3luYyBzZXRTdGF0ZTIocm9sZSwgc2NvcGUsIHN0YXRlPyk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc29sZS5sb2coYFJvbGUgaXM6ICR7cm9sZX1gKTtcblx0XHRjb25zb2xlLmxvZyhgU2V0dGluZyBzeW5jU3RhdGUuIE9yaWdpbmFsIHZhbHVlIGlzICR7SlNPTi5zdHJpbmdpZnkodGhpcy5zeW5jU3RhdGUpfWApO1xuXHRcdHRoaXMuc3luY1N0YXRlID0ge3Njb3BlLCBzdGF0ZX07XG5cdFx0Y29uc29sZS5sb2coJ0NvbnRyb2xsZXIgc3luYyBzdGF0ZSBzdWNjZXNzZnVsbHkgc2V0Jyk7XG5cdH1cblxuXHRAcmVtb3RlKHtcblx0XHRvbjogJ3NlcnZlcidcblx0fSlcblx0YXN5bmMgbWFpbkZ1bmMoLi4uYXJncyk6IFByb21pc2U8YW55PiB7XG5cdFx0YXdhaXQgZGVsYXkoMTAwMCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0QHJlbW90ZSh7XG5cdFx0b246ICdzZXJ2ZXInXG5cdH0pXG5cdGFzeW5jIG1haW5GdW5jMiguLi5hcmdzKTogUHJvbWlzZTxhbnk+IHtcblx0XHR0aGlzLnNhbSA9IG5ldyBDdXN0b21lckEoJ3lvJywgJ2l0cycsICdtZScpO1xuXHRcdHRoaXMuc2FtLmFkZEFkZHJlc3MoWyc1MDAgRWFzdCA4M2QnLCAnQXB0IDFFJ10sICdOZXcgWW9yaycsICdOWScsICcxMDAyOCcpO1xuXG5cdFx0dGhpcy5rYXJlbi5taWRkbGVOYW1lID0gJ2RvbnQgY2hhbmdlJztcblx0XHR0aGlzLmthcmVuLmFkZHJlc3Nlc1szXS50eXBlID0gJ3NvbWV0aGluZyc7XG5cdFx0dGhpcy5rYXJlbi5hZGRyZXNzZXNbMF0udHlwZSA9ICdub3RoaW5nJztcblx0XHRyZXR1cm47XG5cdH1cblxuXHRhc3luYyBwb3N0U2VydmVyQ2FsbChoYXNDaGFuZ2VzOiBib29sZWFuLCBjYWxsQ29udGV4dDogQ2FsbENvbnRleHQsIGNoYW5nZVN0cmluZzogQ2hhbmdlU3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcblx0XHR0aGlzLnJlbW90ZUNoYW5nZXMgPSBjaGFuZ2VTdHJpbmc7XG5cdH1cblxuXHRpbnNwZWN0TWVzc2FnZShtZXNzYWdlQ29weSkge1xuXHRcdHRoaXMuYWxsQ2hhbmdlcyA9IG1lc3NhZ2VDb3B5LmNoYW5nZXM7XG5cdH1cblxuXHRnaXZlU2FtQVNlY29uZEFjY291bnQoKSB7XG5cdFx0dmFyIGFkZHJlc3MgPSBuZXcgQWRkcmVzcyh0aGlzLnNhbSwgWydQbGFudGFuYSddKTtcblx0XHR2YXIgc2Ftc05ld0FjY291bnQgPSBuZXcgQWNjb3VudCgxMjM0LCBbJ1NhbSBFbHNhbW1hbiddLCB0aGlzLnNhbSwgYWRkcmVzcyk7XG5cdFx0c2Ftc05ld0FjY291bnQuYWRkQ3VzdG9tZXIodGhpcy5zYW0sICdzb2xlJyk7XG5cdH1cblxuXHRAcmVtb3RlKClcblx0YXN5bmMgcmVzZXQoKSB7XG5cdFx0dGhpcy5zYW0gPSBudWxsO1xuXHRcdHRoaXMua2FyZW4gPSBudWxsO1xuXHRcdHRoaXMuYXNobGluZyA9IG51bGw7XG5cdH1cbn0iXX0=