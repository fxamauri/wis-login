import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-types
export type withChildren<T = {}> = T & { children?: React.ReactNode };
