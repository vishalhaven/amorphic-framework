"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Change = 'change';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUeXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQWFhLFFBQUEsTUFBTSxHQUFHLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3VwZXJ0eXBlfSBmcm9tICdAaGF2ZW50ZWNoL3N1cGVydHlwZSc7XG5pbXBvcnQge1JlcXVlc3QsIFJlc3BvbnNlfSBmcm9tICdleHByZXNzJztcbmV4cG9ydCB0eXBlIEhUVFBPYmpzID0ge3JlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZX07XG5cbmV4cG9ydCB0eXBlIFN1YnNjcmlwdGlvbiA9IHtcbiAgICByb2xlOiBzdHJpbmc7XG4gICAgbG9nOiB7XG4gICAgICAgIGFycmF5OiBBcnJheUdyb3VwO1xuICAgICAgICBhcnJheURpcnR5OiBBcnJheUdyb3VwO1xuICAgICAgICBjaGFuZ2U6IENoYW5nZUdyb3VwO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IENoYW5nZSA9ICdjaGFuZ2UnO1xuZXhwb3J0IHR5cGUgQXJyYXlUeXBlcyA9ICdhcnJheScgfCAnYXJyYXlEaXJ0eSc7XG5leHBvcnQgdHlwZSBFcnJvclR5cGUgPSAnZXJyb3InIHwgJ3JldHJ5JyB8ICdyZXNwb25zZSc7XG5cbmV4cG9ydCB0eXBlIENhbGxDb250ZXh0ID0geyByZXRyaWVzOiBudW1iZXI7IHN0YXJ0VGltZTogRGF0ZSB9O1xuXG5leHBvcnQgdHlwZSBQcm9jZXNzQ2FsbFBheWxvYWQgPSB7XG4gICAgc2Vtb3R1czogU2Vtb3R1cztcbiAgICByZW1vdGVDYWxsOiBSZW1vdGVDYWxsO1xuICAgIGNhbGxDb250ZXh0OiBDYWxsQ29udGV4dDtcbiAgICBzZXNzaW9uOiBTZXNzaW9uO1xuICAgIHN1YnNjcmlwdGlvbklkOiBhbnk7XG4gICAgcmVtb3RlQ2FsbElkOiBhbnk7XG4gICAgcmVzdG9yZVNlc3Npb25DYWxsYmFjaz86IEZ1bmN0aW9uO1xuICAgIEhUVFBPYmpzPzogSFRUUE9ianM7XG59XG5cbi8qKlxuICogIGlkIGlzIHRoZSBpZCBvZiB0aGUgb2JqZWN0ICsgJy8nICsgcHJvcGVydHkuXG4gKiAgRXg6IHRoZXJlIGFyZSAxIFNjaG9vbCB0byBNYW55IFN0dWRlbnRzXG4gKlxuICogIFNjaG9vbCB7XG4gKiAgICAgIHN0dWRlbnRzOiBBcnJheTxTdHVkZW50cz5cbiAqICB9XG4gKlxuICogIEluIHRoaXMgY2FzZSwgb25lIGVudHJ5IHdpdGhpbiB0aGlzIEFycmF5R3JvdXAgbWF5IGJlICdzZXJ2ZXItU2Nob29sLTEvc3R1ZGVudHMnOiBbXCJzZXJ2ZXItU3R1ZGVudC0zXCIsIFwic2VydmVyLVN0dWRlbnQtNVwiXVxuICpcbiAqICBJZiB0aGF0J3MgYWxsIHRoZSBjaGFuZ2VzIHRoZW4gdGhlIEFycmF5R3JvdXAgd291bGQgYmUgeydzZXJ2ZXItU2Nob29sLTEvc3R1ZGVudHMnOiBbXCJzZXJ2ZXItU3R1ZGVudC0zXCIsIFwic2VydmVyLVN0dWRlbnQtNVwiXX1cbiAqL1xuZXhwb3J0IHR5cGUgQXJyYXlHcm91cCA9IHsgW2lkOiBzdHJpbmddOiBBcnJheUNoYW5nZXMgfTtcblxuLyoqXG4gKiBBbiBhcnJheSBvZiBJZCByZWZlcmVuY2VzIHRvIFN1cGVydHlwZSBPYmplY3RzIG9yIHByaW1pdGl2ZSB2YWx1ZXNcbiAqL1xudHlwZSBBcnJheUNoYW5nZXMgPSBBcnJheTxhbnk+O1xuZXhwb3J0IHR5cGUgQ2hhbmdlR3JvdXAgPSB7IFtvYmpJZDogc3RyaW5nXTogUHJvcENoYW5nZXMgfTtcbnR5cGUgUHJvcENoYW5nZXMgPSB7IFtwcm9wOiBzdHJpbmddOiBDaGFuZ2VzIH07XG5cbi8vIENoYW5nZXNbMF0gaXMgb2xkVmFsdWUsIENoYW5nZXNbMV0gaXMgbmV3VmFsdWVcbnR5cGUgb2xkVmFsID0gYW55O1xudHlwZSBuZXdWYWwgPSBhbnk7XG50eXBlIENoYW5nZXMgPSBbb2xkVmFsLCBuZXdWYWxdW107XG5cbmV4cG9ydCB0eXBlIFN1YnNjcmlwdGlvbnMgPSB7IFtrZXk6IHN0cmluZ106IFN1YnNjcmlwdGlvbiB9O1xuXG5leHBvcnQgdHlwZSBSZW1vdGVDYWxsID0ge1xuICAgIHJlbW90ZUNhbGxJZDogYW55O1xuICAgIGlkOiBhbnk7XG4gICAgY2hhbmdlczogc3RyaW5nOyAvLyBUaGUgc3RyaW5nIGlzIG9mIHR5cGUgQ2hhbmdlR3JvdXBcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgc2VxdWVuY2U6IGFueTtcbiAgICB0eXBlOiBhbnk7XG4gICAgc3luYzogYW55O1xuICAgIHZhbHVlOiBhbnk7XG59XG5cbmV4cG9ydCB0eXBlIFNlc3Npb24gPSB7XG4gICAgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9ucztcbiAgICBzZW5kTWVzc2FnZTogU2VuZE1lc3NhZ2U7XG4gICAgc2VuZE1lc3NhZ2VFbmFibGVkOiBib29sZWFuO1xuICAgIHJlbW90ZUNhbGxzOiBBcnJheTxhbnk+O1xuICAgIHBlbmRpbmdSZW1vdGVDYWxsczogYW55O1xuICAgIG5leHRQZW5kaW5nUmVtb3RlQ2FsbElkOiBudW1iZXI7XG4gICAgbmV4dFNhdmVTZXNzaW9uSWQ6IG51bWJlcjtcbiAgICBzYXZlZFNlc3Npb25JZDogbnVtYmVyO1xuICAgIG5leHRTdWJzY3JpcHRpb25JZDogbnVtYmVyO1xuICAgIG9iamVjdHM6IGFueTtcbiAgICBuZXh0T2JqSWQ6IG51bWJlcjtcbiAgICBkaXNwZW5zZU5leHRJZDogbnVsbDsgLy8gbm90IHVzZWQgYW55d2hlcmVcbn1cblxuXG5leHBvcnQgdHlwZSBTZXNzaW9ucyA9IHsgW3Nlc3Npb25JZDogbnVtYmVyXTogU2Vzc2lvbiB9O1xuXG5leHBvcnQgdHlwZSBTZW5kTWVzc2FnZSA9IChtZXNzYWdlOiBhbnkpID0+IHZvaWQ7XG5cbmV4cG9ydCB0eXBlIFNhdmVkU2Vzc2lvbiA9IHtcbiAgICByZXZpc2lvbjogbnVtYmVyO1xuICAgIGRhdGE6IHN0cmluZzsgLy8gU2VyaWFsaXplZCBTZXNzaW9uIGRhdGFcbiAgICBjYWxsQ291bnQ6IG51bWJlcjtcbiAgICByZWZlcmVuY2VkOiBudW1iZXI7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlbW90ZWFibGVDbGFzcyBleHRlbmRzIFN1cGVydHlwZSB7XG4gICAgc3luY1N0YXRlczogQXJyYXk8c3RyaW5nPjtcbiAgICBfX3RvQ2xpZW50X186IGJvb2xlYW47XG4gICAgX190b1NlcnZlcl9fOiBib29sZWFuO1xufVxuXG5leHBvcnQgdHlwZSBDaGFuZ2VTdHJpbmcgPSB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xudHlwZSBQcmVTZXJ2ZXJDYWxsQ2hhbmdlcyA9IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9O1xuXG5leHBvcnQgdHlwZSBDb250cm9sbGVyU3luY1N0YXRlID0ge1xuICAgIHNjb3BlOiAnKycgfCAnKicgfCAnLSdcbiAgICBzdGF0ZTogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNlbW90dXNDb250cm9sbGVyIHtcbiAgICBfX3RlbXBsYXRlX186IGFueTtcbiAgICBzeW5jU3RhdGU/OiBDb250cm9sbGVyU3luY1N0YXRlXG5cbiAgICAvKipcbiAgICAgKiBAc2VydmVyXG4gICAgICpcbiAgICAgKiBDYWxsYmFjayBhZnRlciBhIHN1Y2Nlc3NmdWwgcmVtb3RlIGZ1bmN0aW9uIGNhbGwgKGp1c3QgdGhlIGFwcGxpY2F0aW9uIG9mIGNoYW5nZXMgYW5kIHRoZSBleGVjdXRpb24gb2YgdGhlIGZ1bmN0aW9uIGNhbGwpXG4gICAgICogTm90ZSB0aGF0IHRoaXMgZG9lc24ndCBtZWFuIHdlIGNhbid0IGVycm9yIG91dCBvbiB0aGlzIG9yIHN1YnNlcXVlbnQgc3RlcHMgb2YgYSByZW1vdGUgY2FsbC5cbiAgICAgKlxuICAgICAqIFdlIGNhbiB1dGlsaXplIHRoaXMgZnVuY3Rpb24gYXMgYSBnZW5lcmljIGZ1bmN0aW9uIGhhbmRsZXIgdG8gcnVuIGFmdGVyIHdlIGhhdmUgc3VjY2Vzc2Z1bGx5IGNhbGxlZCBhIHJlbW90ZSBmdW5jdGlvbi5cbiAgICAgKiBPbmUgc3VjaCB1c2UgbWF5IGJlIHRvIHNlZSB0aGUgY2hhbmdlcyB0aGF0IHdlcmUgYXBwbGllZCBmcm9tIHRoZSBjbGllbnRcbiAgICAgKlxuICAgICAqIE5PVEUgVEhBVCBUSEUgQ0hBTkdFU1RSSU5HIERPRVMgTk9UIElOQ0xVREUgQ0hBTkdFUyBET05FIFdJVEhJTiBUSEUgUkVNT1RFIEZVTkNUSU9OIENBTEwgSVRTRUxGLCBPTkxZIENIQU5HRVMgRlJPTSBUSEUgQ0xJRU5UXG4gICAgICpcbiAgICAgKiBTZWUgcmVtb3RlIGNhbGwgZG9jdW1lbnRhdGlvbiB0byBrbm93IHdoZXJlIHRoaXMgZXhlY3V0ZXMgaW4gdGhlIGxpZmVjeWNsZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBoYXNDaGFuZ2VzIC0gV2hldGhlciBvciBub3Qgd2UgaGF2ZSBhcHBsaWVkIGNsaWVudCBjaGFuZ2VzIG9udG8gdGhlIHNlcnZlcidzIG9iamVjdCBncmFwaFxuICAgICAqIEBwYXJhbSB7Q2FsbENvbnRleHR9IGNhbGxDb250ZXh0IC0gQ29udGV4dCAobnVtYmVyIG9mIHJldHJpZXMgZXRjKVxuICAgICAqIEBwYXJhbSB7Y2hhbmdlU3RyaW5nfSBjaGFuZ2VTdHJpbmcgLSBPYmplY3Qgb2YgQ2hhbmdlcyAtIEtleSBpcyBbQ2xhc3NOYW1lXS5bcHJvcGVydHlOYW1lXSwgVmFsdWUgaXMgW2NoYW5nZWRWYWx1ZV0gZXhhbXBsZTogeydDdXN0b21lci5taWRkbGVuYW1lJzogJ0thcmVuJ30sIFNlZSBhYm92ZSBub3RlXG4gICAgICogQHBhcmFtIEhUVFBPYmpzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICAgKiBAbWVtYmVyb2YgQ29udHJvbGxlclxuICAgICAqL1xuICAgIHBvc3RTZXJ2ZXJDYWxsPyhoYXNDaGFuZ2VzOiBib29sZWFuLCBjYWxsQ29udGV4dDogQ2FsbENvbnRleHQsIGNoYW5nZVN0cmluZzogQ2hhbmdlU3RyaW5nLCBIVFRQT2Jqcz86IEhUVFBPYmpzKTogUHJvbWlzZTxhbnk+O1xuXG4gICAgLyoqXG4gICAgICogQHNlcnZlclxuICAgICAqXG4gICAgICogQ2FsbGJhY2sgdG8gaGFuZGxlIGVycm9ycyBvbiBhIHJlbW90ZSBjYWxsLlxuICAgICAqXG4gICAgICogRXhlY3V0ZXMgYWZ0ZXIgZXZlcnkgb3RoZXIgc3RlcCBpbiB0aGUgcmVtb3RlIGNhbGwgcGlwZWxpbmUgKHNlZSByZW1vdGUgY2FsbCBkb2N1bWVudGF0aW9uKVxuICAgICAqIGJ1dCBiZWZvcmUgcmV0cnlpbmcgdGhlIGNhbGwgKG9yIHBhY2thZ2luZyByZXNwb25zZSBhbmQgc2VuZGluZyBiYWNrIHRvIGNsaWVudClcbiAgICAgKlxuICAgICAqIE5PVEUgVEhBVCBUSEUgQ0hBTkdFU1RSSU5HIERPRVMgTk9UIElOQ0xVREUgQ0hBTkdFUyBET05FIFdJVEhJTiBUSEUgUkVNT1RFIEZVTkNUSU9OIENBTEwgSVRTRUxGLCBPTkxZIENIQU5HRVMgRlJPTSBUSEUgQ0xJRU5UXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Vycm9yVHlwZX0gZXJyb3JUeXBlIC0gRXJyb3IgdHlwZSBhc3NvY2lhdGVkIChlcnJvciwgcmV0cnksIHJlc3BvbnNlKVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByZW1vdGVDYWxsSWQgLSBJZCBmb3IgcmVtb3RlIGNhbGxcbiAgICAgKiBAcGFyYW0ge2V4dGVuZHMgU3VwZXJ0eXBlfSByZW1vdGVPYmogLSBJbnN0YW5jZSBmb3Igd2hpY2ggdGhlIHJlbW90ZSBvYmplY3QgZnVuY3Rpb24gaXMgY2FsbGVkIGZvciAtIEBUT0RPOiByZXZpc2l0IHdoZW4gd2UgY3JlYXRlIGEgcHJvcGVyIHJlbW90ZWFibGUgdHlwZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmdW5jdGlvbk5hbWUgLSBOYW1lIG9mIGZ1bmN0aW9uIGJlaW5nIGNhbGxlZFxuICAgICAqIEBwYXJhbSB7Q2FsbENvbnRleHR9IGNhbGxDb250ZXh0IC0gQ29udGV4dCAobnVtYmVyIG9mIHJldHJpZXMgZXRjKVxuICAgICAqIEBwYXJhbSB7Q2hhbmdlU3RyaW5nfSBjaGFuZ2VTdHJpbmcgLSBPYmplY3Qgb2YgQ2hhbmdlcyAtIEtleSBpcyBbQ2xhc3NOYW1lXS5bcHJvcGVydHlOYW1lXSwgVmFsdWUgaXMgW2NoYW5nZWRWYWx1ZV0gZXhhbXBsZTogeydDdXN0b21lci5taWRkbGVuYW1lJzogJ0thcmVuJ30sIFNlZSBhYm92ZSBub3RlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICAgKiBAbWVtYmVyb2YgQ29udHJvbGxlclxuICAgICAqL1xuICAgIHBvc3RTZXJ2ZXJFcnJvckhhbmRsZXI/KGVycm9yVHlwZTogRXJyb3JUeXBlLCByZW1vdGVDYWxsSWQ6IG51bWJlciwgcmVtb3RlT2JqOiBTdXBlcnR5cGUsIGZ1bmN0aW9uTmFtZTogc3RyaW5nLCBjYWxsQ29udGV4dDogQ2FsbENvbnRleHQsIGNoYW5nZVN0cmluZzogQ2hhbmdlU3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcblxuICAgIC8qKlxuICAgICAqIEBzZXJ2ZXJcbiAgICAgKlxuICAgICAqIENhbGxiYWNrIGJlZm9yZSBhIHJlbW90ZSBmdW5jdGlvbiBjYWxsICgxc3Qgc3RlcCBvZiBhIHJlbW90ZSBjYWxsKVxuICAgICAqXG4gICAgICogV2UgY2FuIHV0aWxpemUgdGhpcyBmdW5jdGlvbiBhcyBhIGdlbmVyaWMgZnVuY3Rpb24gaGFuZGxlciB0byBydW4gYmVmb3JlIHdlIGNhbGwgYVxuICAgICAqIHJlbW90ZSBmdW5jdGlvbiBvciBiZWZvcmUgd2UgYXBwbHkgY2hhbmdlcyBmcm9tIHRoZSBjbGllbnQgdG8gdGhlIHNlcnZlclxuICAgICAqXG4gICAgICogV2UgY2FuIGFsc28gdXRpbGl6ZSB0aGlzIGZ1bmN0aW9uIHRvIGRvIGFueSBjb250ZXh0LXNwZWNpZmljIHByZXAgd29yayAvIGxvYWRpbmdcbiAgICAgKiBpZiB0aGlzIGEgc3Vic2VxdWVudCB0cnkgb2YgdGhpcyBmdW5jdGlvbiBkdWUgdG8gYW4gdXBkYXRlIGNvbmZsaWN0LlxuICAgICAqXG4gICAgICogU2VlIHJlbW90ZSBjYWxsIGRvY3VtZW50YXRpb24gdG8ga25vdyB3aGVyZSB0aGlzIGV4ZWN1dGVzIGluIHRoZSBsaWZlY3ljbGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaGFzQ2hhbmdlcyAtIFdoZXRoZXIgb3Igbm90IHdlIGhhdmUgYXBwbGllZCBjbGllbnQgY2hhbmdlcyBvbnRvIHRoZSBzZXJ2ZXIncyBvYmplY3QgZ3JhcGhcbiAgICAgKiBAcGFyYW0ge1ByZVNlcnZlckNhbGxDaGFuZ2VzfSBjaGFuZ2VzIC0gRGljdGlvbmFyeSBvZiBPYmplY3RzIHRoYXQgaGF2ZSBiZWVuIGNoYW5nZWQgZnJvbSB0aGUgY2xpZW50XG4gICAgICogQHBhcmFtIHtDYWxsQ29udGV4dH0gY2FsbENvbnRleHQgLSBDb250ZXh0IChudW1iZXIgb2YgcmV0cmllcyBldGMpXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VVcGRhdGVdIC0gT3B0aW9uYWwgcGFyYW1ldGVyIHBhc3NlZCBpbi4gVHJ1ZSBpZiB0aGlzIGlzIGEgcmV0cnkgb2YgdGhlIGNhbGwgYmFzZWQgb24gYW4gdXBkYXRlIGNvbmZsaWN0LiBGYWxzZSAvIHVuZGVmaW5lZCBvdGhlcndpc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZnVuY3Rpb25OYW1lXG4gICAgICogQHBhcmFtIHJlbW90ZUNhbGxcbiAgICAgKiBAcGFyYW0gaXNQdWJsaWNcbiAgICAgKiBAcGFyYW0gSFRUUE9ianNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICAgKiBAbWVtYmVyb2YgQ29udHJvbGxlclxuICAgICAqL1xuICAgIHByZVNlcnZlckNhbGw/KGhhc0NoYW5nZXM6IGJvb2xlYW4sIGNoYW5nZXM6IFByZVNlcnZlckNhbGxDaGFuZ2VzLCBjYWxsQ29udGV4dDogQ2FsbENvbnRleHQsIGZvcmNlVXBkYXRlOiB1bmRlZmluZWQgfCBib29sZWFuLCBmdW5jdGlvbk5hbWU6IHN0cmluZywgcmVtb3RlQ2FsbDogUmVtb3RlQ2FsbCwgaXNQdWJsaWM6IGJvb2xlYW4sIEhUVFBPYmpzPzogSFRUUE9ianMgKTogUHJvbWlzZTx2b2lkPjtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgYSBoYW5kbGVyIHRoYXQgd2lsbCBvbmx5IGJlIHVzZWQgZm9yIHRlc3RpbmcgYW5kIGRlYnVnZ2luZyBwdXJwb3Nlc1xuICAgICAqXG4gICAgICogV2hlbiB0aGlzIGlzIHVzZWQsIGFsbG93cyB1cyB0byBpbnNwZWN0IHRoZSBtZXNzYWdlIGJvZHkgYmVmb3JlIHdlIHNlbmQgaXQgb3V0IGluICdwYWNrYWdlQ2hhbmdlcydcbiAgICAgKlxuICAgICAqIERPIE5PVCBVU0UgVEhJUyBJTiBQUk9EVUNUSU9OIENPREVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBtZXNzYWdlXG4gICAgICovXG4gICAgaW5zcGVjdE1lc3NhZ2U/KG1lc3NhZ2UpOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2Vtb3R1cyB7XG4gICAgc2V0U3luY1N0YXRlOiAoc3RyKSA9PiB2b2lkO1xuICAgIHN5bmNTdGF0ZTogc3RyaW5nO1xuICAgIGdldFN5bmNTdGF0ZTogKCkgPT4gYW55O1xuICAgIG1heENhbGxUaW1lOiBudW1iZXI7XG4gICAgX19kaWN0aW9uYXJ5X186IGFueTtcbiAgICBtZW1TZXNzaW9uOiB7IHNlbW90dXM6IHsgY2FsbFN0YXJ0VGltZTogbnVtYmVyIH0gfTtcbiAgICBfaW5qZWN0SW50b1RlbXBsYXRlOiAodGVtcGxhdGUpID0+IHZvaWQ7XG4gICAgc2VyaWFsaXplQW5kR2FyYmFnZUNvbGxlY3Q6ICgpID0+IGFueTtcbiAgICBnZXRNZXNzYWdlOiAoc2Vzc2lvbklkLCBmb3JjZU1lc3NhZ2UpID0+IGFueTtcbiAgICBjbGVhclBlbmRpbmdDYWxsczogKHNlc3Npb25JZCkgPT4gdm9pZDtcbiAgICBnZXRDaGFuZ2VHcm91cDogKHR5cGUsIHN1YnNjcmlwdGlvbklkKSA9PiBDaGFuZ2VHcm91cDtcbiAgICBkZWxldGVDaGFuZ2VHcm91cDogKHR5cGU6IGFueSwgc3Vic2NyaXB0aW9uSWQ6IGFueSkgPT4gdm9pZDtcbiAgICBnZXRDaGFuZ2VTdGF0dXM6ICgpID0+IHN0cmluZztcbiAgICBfc3Rhc2hPYmplY3Q6IChvYmosIHRlbXBsYXRlKSA9PiBib29sZWFuO1xuICAgIHNlc3Npb25pemU6IChvYmosIHJlZmVyZW5jaW5nT2JqKSA9PiAodW5kZWZpbmVkIHwgYW55KTtcbiAgICBfc2V0dXBGdW5jdGlvbjogKHByb3BlcnR5TmFtZSwgcHJvcGVydHlWYWx1ZSwgcm9sZSwgdmFsaWRhdGUsIHNlcnZlclZhbGlkYXRpb24sIGlzUHVibGljOiBib29sZWFuLCB0ZW1wbGF0ZSkgPT4gKGFueSk7XG4gICAgX3NldHVwUHJvcGVydHk6IChwcm9wZXJ0eU5hbWUsIGRlZmluZVByb3BlcnR5LCBvYmplY3RQcm9wZXJ0aWVzLCBkZWZpbmVQcm9wZXJ0aWVzKSA9PiB2b2lkO1xuICAgIHdpdGhvdXRDaGFuZ2VUcmFja2luZzogKGNiKSA9PiB2b2lkO1xuICAgIF9jaGFuZ2VkVmFsdWU6IChvYmosIHByb3AsIHZhbHVlKSA9PiB2b2lkO1xuICAgIF9yZWZlcmVuY2VkQXJyYXk6IChvYmosIHByb3AsIGFycmF5UmVmLCBzZXNzaW9uSWQ/KSA9PiB2b2lkO1xuICAgIF9jb252ZXJ0QXJyYXlSZWZlcmVuY2VzVG9DaGFuZ2VzOiAoKSA9PiB2b2lkO1xuICAgIE1hcmtDaGFuZ2VkQXJyYXlSZWZlcmVuY2VzOiAoKSA9PiB2b2lkO1xuICAgIF9jb252ZXJ0VmFsdWU6ICh2YWx1ZSkgPT4gKGFueVtdIHwgbnVsbCk7XG4gICAgZ2V0T2JqZWN0OiAob2JqSWQsIHRlbXBsYXRlKSA9PiAoYW55IHwgbnVsbCk7XG4gICAgX2FwcGx5Q2hhbmdlczogKGNoYW5nZXMsIGZvcmNlLCBzdWJzY3JpcHRpb25JZCwgY2FsbENvbnRleHQpID0+IChudW1iZXIpO1xuICAgIF9hcHBseU9iamVjdENoYW5nZXM6IChjaGFuZ2VzLCByb2xsYmFjaywgb2JqLCBmb3JjZSkgPT4gKGJvb2xlYW4pO1xuICAgIF92YWxpZGF0ZVNlcnZlckluY29taW5nUHJvcGVydHk6IChvYmosIHByb3AsIGRlZmluZVByb3BlcnR5LCBuZXdWYWx1ZSkgPT4gKGJvb2xlYW4pO1xuICAgIF9hcHBseVByb3BlcnR5Q2hhbmdlOiAoY2hhbmdlcywgcm9sbGJhY2ssIG9iaiwgcHJvcCwgaXgsIG9sZFZhbHVlLCBuZXdWYWx1ZSwgZm9yY2UpID0+IChib29sZWFuKTtcbiAgICBfcm9sbGJhY2s6IChyb2xsYmFjaykgPT4gdm9pZDtcbiAgICBfcm9sbGJhY2tDaGFuZ2VzOiAoKSA9PiB2b2lkO1xuICAgIF9jcmVhdGVFbXB0eU9iamVjdDogKHRlbXBsYXRlLCBvYmpJZCwgZGVmaW5lUHJvcGVydHksIGlzVHJhbnNpZW50KSA9PiBhbnk7XG4gICAgaW5qZWN0OiAodGVtcGxhdGUsIGluamVjdG9yKSA9PiB2b2lkO1xuICAgIF9xdWV1ZVJlbW90ZUNhbGw6IChvYmpJZCwgZnVuY3Rpb25OYW1lLCBkZWZlcnJlZCwgYXJncykgPT4gdm9pZDtcbiAgICBfcHJvY2Vzc1F1ZXVlOiAoKSA9PiB2b2lkO1xuICAgIF90b1RyYW5zcG9ydDogKG9iaikgPT4gYW55O1xuICAgIF9mcm9tVHJhbnNwb3J0OiAob2JqKSA9PiBhbnk7XG4gICAgX2V4dHJhY3RBcmd1bWVudHM6IChyZW1vdGVDYWxsKSA9PiBhbnk7XG4gICAgX3RyaW1BcnJheTogKGFycmF5KSA9PiB2b2lkO1xuICAgIF9kZWxldGVDaGFuZ2VHcm91cHM6ICh0eXBlKSA9PiB2b2lkO1xuICAgIF9nZXRTdWJzY3JpcHRpb25zOiAoc2Vzc2lvbklkPykgPT4gU3Vic2NyaXB0aW9ucyB8IG51bGw7XG4gICAgX2dldFN1YnNjcmlwdGlvbjogKHN1YnNjcmlwdGlvbklkPykgPT4gU3Vic2NyaXB0aW9uO1xuICAgIGNsZWFuUHJpdmF0ZVZhbHVlczogKHByb3AsIGxvZ1ZhbHVlLCBkZWZpbmVQcm9wZXJ0eSkgPT4gKHN0cmluZyB8IGFueSk7XG4gICAgUmVtb3RlYWJsZTogKEJhc2UpID0+ICgpID0+IGFueTtcbiAgICBCaW5kYWJsZTogKEJhc2UpID0+ICgpID0+IGFueTtcbiAgICBQZXJzaXN0YWJsZTogKEJhc2UpID0+ICgpID0+IGFueTtcbiAgICBiaW5kRGVjb3JhdG9yczogKG9iamVjdFRlbXBsYXRlPykgPT4gdm9pZDtcbiAgICBwcm9jZXNzTWVzc2FnZTogKHJlbW90ZUNhbGwsIHN1YnNjcmlwdGlvbklkLCByZXN0b3JlU2Vzc2lvbkNhbGxiYWNrLCByZXE/OiBSZXF1ZXN0LCByZXM/OiBSZXNwb25zZSkgPT4gKHVuZGVmaW5lZCB8IGFueSk7XG4gICAgZW5hYmxlU2VuZE1lc3NhZ2U6ICh2YWx1ZSwgbWVzc2FnZUNhbGxiYWNrLCBzZXNzaW9uSWQpID0+IHZvaWQ7XG4gICAgc3luY1Nlc3Npb246IChzZXNzaW9uSWQpID0+IHZvaWQ7XG4gICAgcmVzdG9yZVNlc3Npb246IChzZXNzaW9uSWQsIHNhdmVkU2Vzc2lvbjogU2F2ZWRTZXNzaW9uLCBzZW5kTWVzc2FnZTogU2VuZE1lc3NhZ2UpID0+IGJvb2xlYW47XG4gICAgc2F2ZVNlc3Npb246IChzZXNzaW9uSWQpID0+IFNhdmVkU2Vzc2lvbjtcbiAgICBzZXRNaW5pbXVtU2VxdWVuY2U6IChuZXh0T2JqSWQpID0+IHZvaWQ7XG4gICAgZGVsZXRlU2Vzc2lvbjogKHNlc3Npb25JZCkgPT4gdm9pZDtcbiAgICBjcmVhdGVTZXNzaW9uOiAocm9sZTogYW55LCBzZW5kTWVzc2FnZTogU2VuZE1lc3NhZ2UsIHNlc3Npb25JZDogYW55KSA9PiBhbnk7XG4gICAgbG9nOiAobGV2ZWwsIGRhdGEpID0+IHZvaWQ7XG4gICAgbmV4dE9iaklkOiBudW1iZXI7XG4gICAgbWF4Q2xpZW50U2VxdWVuY2U6IG51bWJlcjtcbiAgICBsb2dMZXZlbDogbnVtYmVyO1xuICAgIF9fY29uZmxpY3RNb2RlX186IHN0cmluZztcbiAgICBfX2NoYW5nZVRyYWNraW5nX186IGJvb2xlYW47XG4gICAgX3VzZUdldHRlcnNTZXR0ZXJzOiBib29sZWFuO1xuICAgIGxvZ2dlcjogYW55O1xuICAgIHJvbGU6IGFueTtcbiAgICBjdXJyZW50U2Vzc2lvbjogYW55O1xuICAgIHNlc3Npb25zPzogU2Vzc2lvbnM7XG4gICAgbmV4dFN1YnNjcmlwdGlvbklkOiBudW1iZXI7XG4gICAgbmV4dFNlc3Npb25JZDogbnVtYmVyO1xuICAgIGNvbnRyb2xsZXI6IElTZW1vdHVzQ29udHJvbGxlcjtcbiAgICBjaGFuZ2VTdHJpbmc6IHN0cmluZztcblxuXG4gICAgX2dldFNlc3Npb24oX3NpZD86IGFueSk6IFNlc3Npb247XG5cbiAgICBzdWJzY3JpYmUocm9sZTogYW55KTogbnVtYmVyO1xuXG4gICAgc2V0U2Vzc2lvbihzZXNzaW9uSWQ6IGFueSk6IHZvaWQ7XG5cbiAgICBnZXRDaGFuZ2VzKHN1YnNjcmlwdGlvbklkPzogYW55KTogQ2hhbmdlR3JvdXA7XG5cbiAgICBfZGVsZXRlQ2hhbmdlcygpOiB2b2lkO1xuXG4gICAgZ2V0UGVuZGluZ0NhbGxDb3VudChzZXNzaW9uSWQ6IGFueSk6IGFueTtcbn1cbiJdfQ==