(function () {
  var DomMix = {};

  // Calculate factorial function
  DomMix.Math = {
    factorial: function (n) {
      if (n === 0 || n === 1) {
        return 1;
      } else {
        return n * DomMix.factorial(n - 1);
      }
    }
  };

  // Scroll to the top of the page
  DomMix.windowHelpers = {
    scrollTo: {
      top: function () {
        window.scrollTo(0, 0);
      },
    },
  };

  // Custom console function with warning levels
  DomMix.console = function (text, warningLevel) {
    if (warningLevel === "warn") {
      console.warn(text);
    } else if (warningLevel === "error") {
      console.error(text);
    } else {
      console.log(text);
    }
  };

  // Make your library available globally if needed
  if (typeof window !== "undefined") {
    window.DomMix = DomMix;
  }

  // Export your library for Node.js/CommonJS if needed
  if (typeof module !== "undefined" && module.exports) {
    module.exports = DomMix;
  }
})();
