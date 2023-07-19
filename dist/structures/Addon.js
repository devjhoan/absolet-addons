"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Addon {
    constructor(addon) {
        this.name = addon.name;
        this.author = addon.author;
        this.version = addon.version;
        this.commands = (addon === null || addon === void 0 ? void 0 : addon.commands) || [];
        this.events = (addon === null || addon === void 0 ? void 0 : addon.events) || [];
    }
}
exports.default = Addon;
