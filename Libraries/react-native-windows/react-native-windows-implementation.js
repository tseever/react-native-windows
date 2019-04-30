/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 * 
 * @providesModule react-native-windows-implementation
 * @flow
 */
'use strict';

var ReactWindows = {
  // Components
  get CalendarDatePickerWindows() { return require('CalendarDatePickerWindows'); },
  get DatePickerWindows() { return require('DatePickerWindows'); },
  get FlipViewWindows() { return require('FlipViewWindows'); },
  get PasswordBoxWindows() { return require('PasswordBoxWindows'); },
  get ProgressBarWindows() { return require('ProgressBarWindows'); },
  get ProgressRingWindows() { return require('ProgressRingWindows'); },
  get SplitViewWindows() { return require('SplitViewWindows'); },
  get TimePickerWindows() { return require('TimePickerWindows'); },

  get createFocusableComponent() { return require('FocusableWindows'); },
};

module.exports = ReactWindows;
