/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ResponderSyntheticEvent
 * @typechecks static-only
 */

'use strict';

var SyntheticEvent = require('SyntheticEvent');

/**
 * `touchHistory` isn't actually on the native event, but putting it in the
 * interface will ensure that it is cleaned up when pooled/destroyed. The
 * `ResponderEventPlugin` will populate it appropriately.
 */
var ResponderEventInterface = {
  touchHistory: function(nativeEvent) {
    return null; // Actually doesn't even look at the native event.
  }
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native event.
 * @extends {SyntheticEvent}
 */
function ResponderSyntheticEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
}

SyntheticEvent.augmentClass(ResponderSyntheticEvent, ResponderEventInterface);

module.exports = ResponderSyntheticEvent;
