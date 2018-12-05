/*
         * Snow effect done in HTML 5
         *
         * The MIT License (MIT)
         *
         * Copyright (c) 2015 TimeWaster - sebi@timewaster.de
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in all
         * copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
         * SOFTWARE.
         */
        window.onload = function() {
            
                        /* --- config start --- */
            
                        var snowCanvasId        = "snowCanvas", // id of the canvas to use
                            framerate           = 40,           // which fps rate to use, this is not followed exactly
                            flakeNumberModifier = 1.0,          // change this to change the number of flakes
                            fallSpeedModifier   = 0.5;          // falling speed
            
                        /* ---- config end ---- */
            
                        var canvas       = document.getElementById(snowCanvasId),
                            context      = canvas.getContext("2d"),
                            width        = canvas.width,
                            height       = canvas.height,
                            numFlakes    = Math.min(width, 300) * height / 400 * flakeNumberModifier,
                            flakes       = [],
                            TWO_PI       = Math.PI * 2,
                            radHeight    = 40;
                            flake        = document.createElement("CANVAS"),
                            flakeContext = flake.getContext("2d");
            
                        // create flake grafic
                        flake.width = 8;
                        flake.height = 8;
                        flakeContext.fillStyle = "#fff";
                        flakeContext.beginPath();
                        flakeContext.arc(4, 4, 4, 0, TWO_PI);
                        flakeContext.fill();
            
                        // init snowflakes
                        for(var x = 0; x <numFlakes; x++) {
                           flakes[x] = getRandomFlake(true);
                        }
            
                        // start tick at specified fps
                        window.setInterval(tick, Math.floor(1000 / framerate));
            
                        // main routine
                        function tick() {
                            var posX = 0,
                                imageData;
            
                            // reset canvas for next frame
                            context.clearRect(0, 0, width, height);
            
                            for(var x = 0; x < numFlakes; x++) {
                                // calculate changes to snowflake
                                posX = flakes[x].x + Math.sin(flakes[x].yMod + flakes[x].y / radHeight * (5 - flakes[x].size)) * flakes[x].waveSize * (1 - flakes[x].size);
                                flakes[x].y += flakes[x].size * fallSpeedModifier; // bigger flakes are nearer to screen, thus they fall faster to create 3d effect
            
                                // if snowflake is out of bounds, reset
                                if(flakes[x].y > height + 5) {
                                    flakes[x] = getRandomFlake();
                                }
            
                                // draw snowflake
                                context.globalAlpha = (flakes[x].size - 1) / 3;
                                context.drawImage(flake, posX, flakes[x].y, flakes[x].size, flakes[x].size);
                            }
            
                            // repeat 300px wide strip with snowflakes to fill whole canvas
                            if(width > 300) {
                                context.globalAlpha = 1;
                                context.drawImage(canvas, 300, 0);
                                if(width > 600) context.drawImage(canvas, 600, 0);
                                if(width > 1200) context.drawImage(canvas, 1200, 0);
                                if(width > 2400) context.drawImage(canvas, 2400, 0);
                            }
                        }
            
                        // randomize flake data
                        function getRandomFlake(init) {
                            return {
                                x: range(10, 310),
                                y: init ? range(-5, height + 5) : -5,
                                size: Math.max(range(1, 4), 2),
                                yMod: range(0, 150),
                                waveSize: range(1, 4)
                            };
                        }
            
                        // get a random number inside a range
                        function range(start, end) {
                            return Math.random() * (end - start) + start;
                        }
                    };