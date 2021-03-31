import { CreateControllerFn } from 'yoshi-flow-editor';

const createController: CreateControllerFn = async () => {
  // For more info about controller structure,
  // check the docs: https://bo.wix.com/pages/yoshi/docs/editor-flow/structure-api/component#controller
  return {
    async pageReady() {
      // Here you can pass props to the Widget
    },
  };
};

export default createController;
