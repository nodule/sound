module.exports = {
  name: "alert",
  ns: "sound",
  description: "Play a sound alert",
  phrases: {
    active: "Playing sound alert {{input.sound}}"
  },
  ports: {
    input: {
      sound: {
        title: "Sound",
        type: "string",
        "enum": ["bottle",
          "glass",
          "funk",
          "morse",
          "purr",
          "tink",
          "submarine"
        ],
        "default": "bottle"
      },
      volume: {
        title: "Volume",
        type: "number",
        "default": 0.5,
        format: "range",
        step: 0.1,
        minimum: 0,
        maximum: 1
      }
    },
    output: {
      volume: {
        type: "number",
        title: "Volume"
      }
    }
  },
  dependencies: {
    npm: {
      alert: require('alert')
    }
  },
  fn: function alert(input, $, output, state, done, cb, on, alert) {
    var r = function() {
      alert.volume($.volume);
      alert($.sound);
      output.volume = $.get('volume');
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}