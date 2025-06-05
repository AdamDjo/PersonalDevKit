/// <reference types="vite-plugin-svgr/client" />
import '@tanstack/react-table';

declare global {
    declare module '*.scss' {
        const content: Record<string, string>;
        export default content;
    }
}

declare module '@tanstack/react-table' {
    interface ColumnMeta {
        textAlign?: 'left' | 'center' | 'right';
    }
}

export {};
