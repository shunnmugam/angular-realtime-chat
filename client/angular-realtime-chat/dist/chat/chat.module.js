import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';
var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule
                    ], exports: [
                        MainComponent
                    ],
                    declarations: [MainComponent, SearchPipe]
                },] },
    ];
    return ChatModule;
}());
export { ChatModule };
//# sourceMappingURL=chat.module.js.map