# useTraceUpdate

A hook to trace updates to React function components

`useTraceUpdate` is a React Hook that logs to the console prop changes.

## Install

- `npm install use-trace-update` or
- `yarn add use-trace-update`

## Use

```JavaScript
import useTraceUpdate from 'use-trace-update';

const MyButton = (props: AllProps) => {
  useTraceUpdate(props)
  return <button />;
};
```
