declare module '@wix/wix-experiments/dist/src/laboratory-testkit';
declare module '@wix/wix-base-ui';
declare module '*.st.css' {
  const stylesheet: import('@stylable/runtime').RuntimeStylesheet;
  export = stylesheet;
}
