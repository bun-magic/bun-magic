declare function stdout(content: string): Promise<number>;
declare function moveUp(count?: number): Promise<void>;
declare function moveDown(count?: number): Promise<void>;
declare function moveRight(count?: number): Promise<void>;
declare function moveLeft(count?: number): Promise<void>;
declare function clearLines(count?: number): Promise<void>;
declare function replaceLine(...messages: string[]): Promise<void>;
declare function clearLine(): Promise<void>;
declare function clearUp(count?: number): Promise<void>;
declare function hideCursor(): Promise<void>;
declare function showCursor(): Promise<void>;
declare function raw(on: boolean): Promise<void>;
declare function clearFrame(frame: string, wipe?: boolean): Promise<void>;
declare function stream(): {
    start: () => AsyncGenerator<Uint8Array, void, unknown>;
    stop: () => void;
};
export declare const CLI: {
    readonly stdout: typeof stdout;
    readonly moveUp: typeof moveUp;
    readonly moveDown: typeof moveDown;
    readonly moveRight: typeof moveRight;
    readonly moveLeft: typeof moveLeft;
    readonly clearLines: typeof clearLines;
    readonly clearLine: typeof clearLine;
    readonly replaceLine: typeof replaceLine;
    readonly clearUp: typeof clearUp;
    readonly hideCursor: typeof hideCursor;
    readonly showCursor: typeof showCursor;
    readonly clearFrame: typeof clearFrame;
    readonly raw: typeof raw;
    readonly stream: typeof stream;
};
export {};
