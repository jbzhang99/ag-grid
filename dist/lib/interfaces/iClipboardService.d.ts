// Type definitions for ag-grid v14.2.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { Column } from "../entities/column";
export interface IClipboardService {
    pasteFromClipboard(): void;
    copyToClipboard(includeHeader?: boolean): void;
    copySelectedRowsToClipboard(includeHeader?: boolean, columnKeys?: (string | Column)[]): void;
    copySelectedRangeToClipboard(includeHeader?: boolean): void;
    copyRangeDown(): void;
}
