import React from 'react';

const Loader = () => {
    return (
      <div
        className="flex items-center justify-center"
        style={{
          "--cloud-color": "#4387f4",
          "--arrows-color": "#80b1ff",
          "--time-animation": "1s",
        }}
      >
        <svg
          id="cloud"
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
        >
          {/* Cloud Background */}
          <rect
            width="100"
            height="100"
            rx="20"
            ry="20"
            fill="var(--cloud-color)"
          />

          {/* Arrow Rotation */}
          <g
            style={{
              transformOrigin: "50% 72.8938%",
              fill: "var(--arrows-color)",
              filter: "drop-shadow(0 0 8px black)",
              animation: "rotation var(--time-animation) linear infinite",
            }}
          >
            <rect x="40" y="40" width="20" height="20" />
          </g>

          {/* Circles Moving */}
          <g id="shapes">
            <g>
              <g>
                <circle
                  r="15"
                  style={{
                    animation:
                      "cloud calc(var(--time-animation) * 2) linear infinite",
                  }}
                ></circle>
                <circle
                  r="15"
                  style={{
                    animation:
                      "cloud calc(var(--time-animation) * 2) linear infinite",
                    animationDelay: "calc((var(--time-animation) * 2) / -3)",
                  }}
                ></circle>
                <circle
                  r="15"
                  style={{
                    animation:
                      "cloud calc(var(--time-animation) * 2) linear infinite",
                    animationDelay: "calc((var(--time-animation) * 2) / -1.5)",
                  }}
                ></circle>
              </g>
            </g>
          </g>

          {/* Lines */}
          <g id="lines">
            <g>
              <line
                x1="40"
                y1="80"
                x2="60"
                y2="80"
                stroke="white"
                strokeWidth="5"
                style={{
                  transformOrigin: "50% 50%",
                  rotate: "-65deg",
                  animation:
                    "lines calc(var(--time-animation) / 1.33) linear infinite",
                }}
              ></line>
            </g>
          </g>
        </svg>

        {/* Inline Keyframes */}
        <style>{`
        @keyframes rotation {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(180deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes lines {
          0% { transform: translateY(-10px); }
          100% { transform: translateY(8px); }
        }

        @keyframes cloud {
          0% { cx: 20; cy: 60; r: 15; }
          50% { cx: 50; cy: 45; r: 20; }
          100% { cx: 80; cy: 60; r: 15; }
        }
      `}</style>
      </div>
    );
};

export default Loader;