import React from 'react';
import { FlexPlugin } from 'flex-plugin';

import CannedResponses from './components/CannedResponses';

const PLUGIN_NAME = 'SignaltvPlugin';

export default class SignaltvPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  async init(flex, manager) {
    flex.MessageInput.Content.add(<CannedResponses key="canned-responses" />);
  }
}
