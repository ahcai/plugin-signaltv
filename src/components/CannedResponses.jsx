import React from 'react';
import { Actions, useFlexSelector } from '@twilio/flex-ui';
import { Box } from '@twilio-paste/core/Box';
import { Button } from '@twilio-paste/core/Button';
import { Label } from '@twilio-paste/core/label';
import { Stack } from '@twilio-paste/core/stack';

import ThemeProvider from './ThemeProvider';

export default function CannedResponses() {
  const conversationSid = useFlexSelector((state) => state.flex.chat.messageList.activeChatChannel);

  const onClick = (event) => {
    Actions.invokeAction('SendMessage', {
      conversationSid,
      body: event.target.innerText
    });
  }


  return (
    <ThemeProvider>
      <Box textAlign="center" marginBottom="space40">
        <Label htmlFor="response">Select a response</Label>
        <Stack orientation="vertical" spacing="space30">
          <Button variant="secondary" onClick={onClick}>Hi, thanks for joining SignalTV!</Button>
          <Button variant="secondary" onClick={onClick}>Hi, how can I help you today?</Button>
          <Button variant="secondary" onClick={onClick}>Hi, would you like to leave any feedback?</Button>
        </Stack>
      </Box>
    </ThemeProvider>
  );
};
