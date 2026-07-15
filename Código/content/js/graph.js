/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 54.0, "minX": 0.0, "maxY": 644.0, "series": [{"data": [[0.0, 54.0], [0.1, 55.0], [0.2, 56.0], [0.3, 56.0], [0.4, 56.0], [0.5, 56.0], [0.6, 56.0], [0.7, 57.0], [0.8, 57.0], [0.9, 57.0], [1.0, 57.0], [1.1, 57.0], [1.2, 57.0], [1.3, 57.0], [1.4, 57.0], [1.5, 57.0], [1.6, 57.0], [1.7, 58.0], [1.8, 58.0], [1.9, 58.0], [2.0, 58.0], [2.1, 58.0], [2.2, 58.0], [2.3, 58.0], [2.4, 58.0], [2.5, 58.0], [2.6, 58.0], [2.7, 58.0], [2.8, 58.0], [2.9, 58.0], [3.0, 58.0], [3.1, 58.0], [3.2, 58.0], [3.3, 58.0], [3.4, 58.0], [3.5, 58.0], [3.6, 58.0], [3.7, 59.0], [3.8, 59.0], [3.9, 59.0], [4.0, 59.0], [4.1, 59.0], [4.2, 59.0], [4.3, 59.0], [4.4, 59.0], [4.5, 59.0], [4.6, 59.0], [4.7, 59.0], [4.8, 59.0], [4.9, 59.0], [5.0, 59.0], [5.1, 59.0], [5.2, 59.0], [5.3, 59.0], [5.4, 59.0], [5.5, 59.0], [5.6, 59.0], [5.7, 59.0], [5.8, 59.0], [5.9, 59.0], [6.0, 59.0], [6.1, 59.0], [6.2, 59.0], [6.3, 59.0], [6.4, 59.0], [6.5, 59.0], [6.6, 59.0], [6.7, 59.0], [6.8, 59.0], [6.9, 59.0], [7.0, 59.0], [7.1, 59.0], [7.2, 59.0], [7.3, 59.0], [7.4, 59.0], [7.5, 59.0], [7.6, 60.0], [7.7, 60.0], [7.8, 60.0], [7.9, 60.0], [8.0, 60.0], [8.1, 60.0], [8.2, 60.0], [8.3, 60.0], [8.4, 60.0], [8.5, 60.0], [8.6, 60.0], [8.7, 60.0], [8.8, 60.0], [8.9, 60.0], [9.0, 60.0], [9.1, 60.0], [9.2, 60.0], [9.3, 60.0], [9.4, 60.0], [9.5, 60.0], [9.6, 60.0], [9.7, 60.0], [9.8, 60.0], [9.9, 60.0], [10.0, 60.0], [10.1, 60.0], [10.2, 60.0], [10.3, 60.0], [10.4, 60.0], [10.5, 60.0], [10.6, 60.0], [10.7, 60.0], [10.8, 60.0], [10.9, 60.0], [11.0, 60.0], [11.1, 60.0], [11.2, 60.0], [11.3, 60.0], [11.4, 60.0], [11.5, 60.0], [11.6, 60.0], [11.7, 60.0], [11.8, 60.0], [11.9, 60.0], [12.0, 60.0], [12.1, 60.0], [12.2, 60.0], [12.3, 60.0], [12.4, 60.0], [12.5, 60.0], [12.6, 60.0], [12.7, 60.0], [12.8, 60.0], [12.9, 60.0], [13.0, 60.0], [13.1, 61.0], [13.2, 61.0], [13.3, 61.0], [13.4, 61.0], [13.5, 61.0], [13.6, 61.0], [13.7, 61.0], [13.8, 61.0], [13.9, 61.0], [14.0, 61.0], [14.1, 61.0], [14.2, 61.0], [14.3, 61.0], [14.4, 61.0], [14.5, 61.0], [14.6, 61.0], [14.7, 61.0], [14.8, 61.0], [14.9, 61.0], [15.0, 61.0], [15.1, 61.0], [15.2, 61.0], [15.3, 61.0], [15.4, 61.0], [15.5, 61.0], [15.6, 61.0], [15.7, 61.0], [15.8, 61.0], [15.9, 61.0], [16.0, 61.0], [16.1, 61.0], [16.2, 61.0], [16.3, 61.0], [16.4, 61.0], [16.5, 61.0], [16.6, 61.0], [16.7, 61.0], [16.8, 61.0], [16.9, 61.0], [17.0, 61.0], [17.1, 61.0], [17.2, 61.0], [17.3, 61.0], [17.4, 61.0], [17.5, 61.0], [17.6, 61.0], [17.7, 61.0], [17.8, 61.0], [17.9, 61.0], [18.0, 61.0], [18.1, 61.0], [18.2, 61.0], [18.3, 61.0], [18.4, 61.0], [18.5, 61.0], [18.6, 62.0], [18.7, 62.0], [18.8, 62.0], [18.9, 62.0], [19.0, 62.0], [19.1, 62.0], [19.2, 62.0], [19.3, 62.0], [19.4, 62.0], [19.5, 62.0], [19.6, 62.0], [19.7, 62.0], [19.8, 62.0], [19.9, 62.0], [20.0, 62.0], [20.1, 62.0], [20.2, 62.0], [20.3, 62.0], [20.4, 62.0], [20.5, 62.0], [20.6, 62.0], [20.7, 62.0], [20.8, 62.0], [20.9, 62.0], [21.0, 62.0], [21.1, 62.0], [21.2, 62.0], [21.3, 62.0], [21.4, 62.0], [21.5, 62.0], [21.6, 62.0], [21.7, 62.0], [21.8, 62.0], [21.9, 62.0], [22.0, 62.0], [22.1, 62.0], [22.2, 62.0], [22.3, 62.0], [22.4, 62.0], [22.5, 62.0], [22.6, 62.0], [22.7, 62.0], [22.8, 62.0], [22.9, 62.0], [23.0, 62.0], [23.1, 62.0], [23.2, 62.0], [23.3, 62.0], [23.4, 62.0], [23.5, 62.0], [23.6, 62.0], [23.7, 62.0], [23.8, 62.0], [23.9, 62.0], [24.0, 62.0], [24.1, 62.0], [24.2, 62.0], [24.3, 62.0], [24.4, 63.0], [24.5, 63.0], [24.6, 63.0], [24.7, 63.0], [24.8, 63.0], [24.9, 63.0], [25.0, 63.0], [25.1, 63.0], [25.2, 63.0], [25.3, 63.0], [25.4, 63.0], [25.5, 63.0], [25.6, 63.0], [25.7, 63.0], [25.8, 63.0], [25.9, 63.0], [26.0, 63.0], [26.1, 63.0], [26.2, 63.0], [26.3, 63.0], [26.4, 63.0], [26.5, 63.0], [26.6, 63.0], [26.7, 63.0], [26.8, 63.0], [26.9, 63.0], [27.0, 63.0], [27.1, 63.0], [27.2, 63.0], [27.3, 63.0], [27.4, 63.0], [27.5, 63.0], [27.6, 63.0], [27.7, 63.0], [27.8, 63.0], [27.9, 63.0], [28.0, 63.0], [28.1, 63.0], [28.2, 63.0], [28.3, 63.0], [28.4, 63.0], [28.5, 63.0], [28.6, 63.0], [28.7, 63.0], [28.8, 63.0], [28.9, 63.0], [29.0, 63.0], [29.1, 63.0], [29.2, 63.0], [29.3, 63.0], [29.4, 63.0], [29.5, 63.0], [29.6, 63.0], [29.7, 63.0], [29.8, 63.0], [29.9, 63.0], [30.0, 63.0], [30.1, 63.0], [30.2, 63.0], [30.3, 63.0], [30.4, 63.0], [30.5, 63.0], [30.6, 63.0], [30.7, 63.0], [30.8, 63.0], [30.9, 63.0], [31.0, 63.0], [31.1, 63.0], [31.2, 63.0], [31.3, 63.0], [31.4, 63.0], [31.5, 64.0], [31.6, 64.0], [31.7, 64.0], [31.8, 64.0], [31.9, 64.0], [32.0, 64.0], [32.1, 64.0], [32.2, 64.0], [32.3, 64.0], [32.4, 64.0], [32.5, 64.0], [32.6, 64.0], [32.7, 64.0], [32.8, 64.0], [32.9, 64.0], [33.0, 64.0], [33.1, 64.0], [33.2, 64.0], [33.3, 64.0], [33.4, 64.0], [33.5, 64.0], [33.6, 64.0], [33.7, 64.0], [33.8, 64.0], [33.9, 64.0], [34.0, 64.0], [34.1, 64.0], [34.2, 64.0], [34.3, 64.0], [34.4, 64.0], [34.5, 64.0], [34.6, 64.0], [34.7, 64.0], [34.8, 64.0], [34.9, 64.0], [35.0, 64.0], [35.1, 64.0], [35.2, 64.0], [35.3, 64.0], [35.4, 64.0], [35.5, 64.0], [35.6, 64.0], [35.7, 64.0], [35.8, 64.0], [35.9, 64.0], [36.0, 64.0], [36.1, 64.0], [36.2, 64.0], [36.3, 64.0], [36.4, 64.0], [36.5, 64.0], [36.6, 64.0], [36.7, 64.0], [36.8, 64.0], [36.9, 64.0], [37.0, 64.0], [37.1, 64.0], [37.2, 64.0], [37.3, 64.0], [37.4, 64.0], [37.5, 64.0], [37.6, 64.0], [37.7, 64.0], [37.8, 64.0], [37.9, 64.0], [38.0, 64.0], [38.1, 64.0], [38.2, 64.0], [38.3, 64.0], [38.4, 64.0], [38.5, 64.0], [38.6, 64.0], [38.7, 64.0], [38.8, 64.0], [38.9, 64.0], [39.0, 64.0], [39.1, 64.0], [39.2, 64.0], [39.3, 64.0], [39.4, 64.0], [39.5, 64.0], [39.6, 65.0], [39.7, 65.0], [39.8, 65.0], [39.9, 65.0], [40.0, 65.0], [40.1, 65.0], [40.2, 65.0], [40.3, 65.0], [40.4, 65.0], [40.5, 65.0], [40.6, 65.0], [40.7, 65.0], [40.8, 65.0], [40.9, 65.0], [41.0, 65.0], [41.1, 65.0], [41.2, 65.0], [41.3, 65.0], [41.4, 65.0], [41.5, 65.0], [41.6, 65.0], [41.7, 65.0], [41.8, 65.0], [41.9, 65.0], [42.0, 65.0], [42.1, 65.0], [42.2, 65.0], [42.3, 65.0], [42.4, 65.0], [42.5, 65.0], [42.6, 65.0], [42.7, 65.0], [42.8, 65.0], [42.9, 65.0], [43.0, 65.0], [43.1, 65.0], [43.2, 65.0], [43.3, 65.0], [43.4, 65.0], [43.5, 65.0], [43.6, 65.0], [43.7, 65.0], [43.8, 65.0], [43.9, 65.0], [44.0, 65.0], [44.1, 65.0], [44.2, 65.0], [44.3, 65.0], [44.4, 65.0], [44.5, 65.0], [44.6, 65.0], [44.7, 65.0], [44.8, 65.0], [44.9, 65.0], [45.0, 65.0], [45.1, 65.0], [45.2, 65.0], [45.3, 65.0], [45.4, 65.0], [45.5, 65.0], [45.6, 65.0], [45.7, 65.0], [45.8, 65.0], [45.9, 65.0], [46.0, 65.0], [46.1, 65.0], [46.2, 65.0], [46.3, 65.0], [46.4, 65.0], [46.5, 65.0], [46.6, 65.0], [46.7, 65.0], [46.8, 65.0], [46.9, 65.0], [47.0, 66.0], [47.1, 66.0], [47.2, 66.0], [47.3, 66.0], [47.4, 66.0], [47.5, 66.0], [47.6, 66.0], [47.7, 66.0], [47.8, 66.0], [47.9, 66.0], [48.0, 66.0], [48.1, 66.0], [48.2, 66.0], [48.3, 66.0], [48.4, 66.0], [48.5, 66.0], [48.6, 66.0], [48.7, 66.0], [48.8, 66.0], [48.9, 66.0], [49.0, 66.0], [49.1, 66.0], [49.2, 66.0], [49.3, 66.0], [49.4, 66.0], [49.5, 66.0], [49.6, 66.0], [49.7, 66.0], [49.8, 66.0], [49.9, 66.0], [50.0, 66.0], [50.1, 66.0], [50.2, 66.0], [50.3, 66.0], [50.4, 66.0], [50.5, 66.0], [50.6, 66.0], [50.7, 66.0], [50.8, 66.0], [50.9, 66.0], [51.0, 66.0], [51.1, 66.0], [51.2, 66.0], [51.3, 66.0], [51.4, 66.0], [51.5, 66.0], [51.6, 66.0], [51.7, 66.0], [51.8, 66.0], [51.9, 66.0], [52.0, 66.0], [52.1, 66.0], [52.2, 66.0], [52.3, 66.0], [52.4, 66.0], [52.5, 66.0], [52.6, 66.0], [52.7, 66.0], [52.8, 66.0], [52.9, 66.0], [53.0, 66.0], [53.1, 66.0], [53.2, 66.0], [53.3, 66.0], [53.4, 67.0], [53.5, 67.0], [53.6, 67.0], [53.7, 67.0], [53.8, 67.0], [53.9, 67.0], [54.0, 67.0], [54.1, 67.0], [54.2, 67.0], [54.3, 67.0], [54.4, 67.0], [54.5, 67.0], [54.6, 67.0], [54.7, 67.0], [54.8, 67.0], [54.9, 67.0], [55.0, 67.0], [55.1, 67.0], [55.2, 67.0], [55.3, 67.0], [55.4, 67.0], [55.5, 67.0], [55.6, 67.0], [55.7, 67.0], [55.8, 67.0], [55.9, 67.0], [56.0, 67.0], [56.1, 67.0], [56.2, 67.0], [56.3, 67.0], [56.4, 67.0], [56.5, 67.0], [56.6, 67.0], [56.7, 67.0], [56.8, 67.0], [56.9, 67.0], [57.0, 67.0], [57.1, 67.0], [57.2, 67.0], [57.3, 67.0], [57.4, 67.0], [57.5, 67.0], [57.6, 67.0], [57.7, 67.0], [57.8, 67.0], [57.9, 67.0], [58.0, 67.0], [58.1, 67.0], [58.2, 67.0], [58.3, 67.0], [58.4, 67.0], [58.5, 67.0], [58.6, 67.0], [58.7, 67.0], [58.8, 67.0], [58.9, 67.0], [59.0, 67.0], [59.1, 67.0], [59.2, 67.0], [59.3, 67.0], [59.4, 67.0], [59.5, 67.0], [59.6, 68.0], [59.7, 68.0], [59.8, 68.0], [59.9, 68.0], [60.0, 68.0], [60.1, 68.0], [60.2, 68.0], [60.3, 68.0], [60.4, 68.0], [60.5, 68.0], [60.6, 68.0], [60.7, 68.0], [60.8, 68.0], [60.9, 68.0], [61.0, 68.0], [61.1, 68.0], [61.2, 68.0], [61.3, 68.0], [61.4, 68.0], [61.5, 68.0], [61.6, 68.0], [61.7, 68.0], [61.8, 68.0], [61.9, 68.0], [62.0, 68.0], [62.1, 68.0], [62.2, 68.0], [62.3, 68.0], [62.4, 68.0], [62.5, 68.0], [62.6, 68.0], [62.7, 68.0], [62.8, 68.0], [62.9, 68.0], [63.0, 68.0], [63.1, 68.0], [63.2, 68.0], [63.3, 68.0], [63.4, 68.0], [63.5, 68.0], [63.6, 68.0], [63.7, 68.0], [63.8, 68.0], [63.9, 68.0], [64.0, 68.0], [64.1, 68.0], [64.2, 68.0], [64.3, 68.0], [64.4, 68.0], [64.5, 68.0], [64.6, 68.0], [64.7, 68.0], [64.8, 68.0], [64.9, 68.0], [65.0, 68.0], [65.1, 68.0], [65.2, 68.0], [65.3, 68.0], [65.4, 68.0], [65.5, 69.0], [65.6, 69.0], [65.7, 69.0], [65.8, 69.0], [65.9, 69.0], [66.0, 69.0], [66.1, 69.0], [66.2, 69.0], [66.3, 69.0], [66.4, 69.0], [66.5, 69.0], [66.6, 69.0], [66.7, 69.0], [66.8, 69.0], [66.9, 69.0], [67.0, 69.0], [67.1, 69.0], [67.2, 69.0], [67.3, 69.0], [67.4, 69.0], [67.5, 69.0], [67.6, 69.0], [67.7, 69.0], [67.8, 69.0], [67.9, 69.0], [68.0, 69.0], [68.1, 69.0], [68.2, 69.0], [68.3, 69.0], [68.4, 69.0], [68.5, 69.0], [68.6, 69.0], [68.7, 69.0], [68.8, 69.0], [68.9, 69.0], [69.0, 69.0], [69.1, 69.0], [69.2, 69.0], [69.3, 69.0], [69.4, 69.0], [69.5, 69.0], [69.6, 69.0], [69.7, 69.0], [69.8, 69.0], [69.9, 69.0], [70.0, 69.0], [70.1, 69.0], [70.2, 69.0], [70.3, 69.0], [70.4, 70.0], [70.5, 70.0], [70.6, 70.0], [70.7, 70.0], [70.8, 70.0], [70.9, 70.0], [71.0, 70.0], [71.1, 70.0], [71.2, 70.0], [71.3, 70.0], [71.4, 70.0], [71.5, 70.0], [71.6, 70.0], [71.7, 70.0], [71.8, 70.0], [71.9, 70.0], [72.0, 70.0], [72.1, 70.0], [72.2, 70.0], [72.3, 70.0], [72.4, 70.0], [72.5, 70.0], [72.6, 70.0], [72.7, 70.0], [72.8, 70.0], [72.9, 70.0], [73.0, 70.0], [73.1, 70.0], [73.2, 70.0], [73.3, 70.0], [73.4, 70.0], [73.5, 70.0], [73.6, 70.0], [73.7, 70.0], [73.8, 70.0], [73.9, 70.0], [74.0, 70.0], [74.1, 70.0], [74.2, 70.0], [74.3, 70.0], [74.4, 70.0], [74.5, 71.0], [74.6, 71.0], [74.7, 71.0], [74.8, 71.0], [74.9, 71.0], [75.0, 71.0], [75.1, 71.0], [75.2, 71.0], [75.3, 71.0], [75.4, 71.0], [75.5, 71.0], [75.6, 71.0], [75.7, 71.0], [75.8, 71.0], [75.9, 71.0], [76.0, 71.0], [76.1, 71.0], [76.2, 71.0], [76.3, 71.0], [76.4, 71.0], [76.5, 71.0], [76.6, 71.0], [76.7, 71.0], [76.8, 71.0], [76.9, 71.0], [77.0, 71.0], [77.1, 71.0], [77.2, 71.0], [77.3, 71.0], [77.4, 71.0], [77.5, 71.0], [77.6, 71.0], [77.7, 71.0], [77.8, 71.0], [77.9, 71.0], [78.0, 71.0], [78.1, 71.0], [78.2, 71.0], [78.3, 71.0], [78.4, 72.0], [78.5, 72.0], [78.6, 72.0], [78.7, 72.0], [78.8, 72.0], [78.9, 72.0], [79.0, 72.0], [79.1, 72.0], [79.2, 72.0], [79.3, 72.0], [79.4, 72.0], [79.5, 72.0], [79.6, 72.0], [79.7, 72.0], [79.8, 72.0], [79.9, 72.0], [80.0, 72.0], [80.1, 72.0], [80.2, 72.0], [80.3, 72.0], [80.4, 72.0], [80.5, 72.0], [80.6, 72.0], [80.7, 72.0], [80.8, 72.0], [80.9, 72.0], [81.0, 72.0], [81.1, 72.0], [81.2, 72.0], [81.3, 72.0], [81.4, 72.0], [81.5, 72.0], [81.6, 72.0], [81.7, 73.0], [81.8, 73.0], [81.9, 73.0], [82.0, 73.0], [82.1, 73.0], [82.2, 73.0], [82.3, 73.0], [82.4, 73.0], [82.5, 73.0], [82.6, 73.0], [82.7, 73.0], [82.8, 73.0], [82.9, 73.0], [83.0, 73.0], [83.1, 73.0], [83.2, 73.0], [83.3, 73.0], [83.4, 73.0], [83.5, 73.0], [83.6, 73.0], [83.7, 73.0], [83.8, 73.0], [83.9, 73.0], [84.0, 73.0], [84.1, 73.0], [84.2, 74.0], [84.3, 74.0], [84.4, 74.0], [84.5, 74.0], [84.6, 74.0], [84.7, 74.0], [84.8, 74.0], [84.9, 74.0], [85.0, 74.0], [85.1, 74.0], [85.2, 74.0], [85.3, 74.0], [85.4, 74.0], [85.5, 74.0], [85.6, 74.0], [85.7, 74.0], [85.8, 74.0], [85.9, 74.0], [86.0, 74.0], [86.1, 74.0], [86.2, 75.0], [86.3, 75.0], [86.4, 75.0], [86.5, 75.0], [86.6, 75.0], [86.7, 75.0], [86.8, 75.0], [86.9, 75.0], [87.0, 75.0], [87.1, 75.0], [87.2, 75.0], [87.3, 75.0], [87.4, 75.0], [87.5, 75.0], [87.6, 75.0], [87.7, 75.0], [87.8, 76.0], [87.9, 76.0], [88.0, 76.0], [88.1, 76.0], [88.2, 76.0], [88.3, 76.0], [88.4, 76.0], [88.5, 76.0], [88.6, 76.0], [88.7, 76.0], [88.8, 76.0], [88.9, 76.0], [89.0, 76.0], [89.1, 76.0], [89.2, 77.0], [89.3, 77.0], [89.4, 77.0], [89.5, 77.0], [89.6, 77.0], [89.7, 77.0], [89.8, 77.0], [89.9, 77.0], [90.0, 77.0], [90.1, 77.0], [90.2, 77.0], [90.3, 77.0], [90.4, 78.0], [90.5, 78.0], [90.6, 78.0], [90.7, 78.0], [90.8, 78.0], [90.9, 78.0], [91.0, 78.0], [91.1, 78.0], [91.2, 78.0], [91.3, 78.0], [91.4, 78.0], [91.5, 79.0], [91.6, 79.0], [91.7, 79.0], [91.8, 79.0], [91.9, 79.0], [92.0, 79.0], [92.1, 79.0], [92.2, 79.0], [92.3, 79.0], [92.4, 79.0], [92.5, 80.0], [92.6, 80.0], [92.7, 80.0], [92.8, 80.0], [92.9, 80.0], [93.0, 80.0], [93.1, 80.0], [93.2, 80.0], [93.3, 80.0], [93.4, 81.0], [93.5, 81.0], [93.6, 81.0], [93.7, 81.0], [93.8, 81.0], [93.9, 81.0], [94.0, 81.0], [94.1, 81.0], [94.2, 81.0], [94.3, 82.0], [94.4, 82.0], [94.5, 82.0], [94.6, 82.0], [94.7, 82.0], [94.8, 82.0], [94.9, 82.0], [95.0, 83.0], [95.1, 83.0], [95.2, 83.0], [95.3, 83.0], [95.4, 83.0], [95.5, 83.0], [95.6, 83.0], [95.7, 84.0], [95.8, 84.0], [95.9, 84.0], [96.0, 84.0], [96.1, 84.0], [96.2, 84.0], [96.3, 85.0], [96.4, 85.0], [96.5, 85.0], [96.6, 85.0], [96.7, 85.0], [96.8, 86.0], [96.9, 86.0], [97.0, 86.0], [97.1, 86.0], [97.2, 86.0], [97.3, 87.0], [97.4, 87.0], [97.5, 87.0], [97.6, 88.0], [97.7, 88.0], [97.8, 88.0], [97.9, 89.0], [98.0, 89.0], [98.1, 89.0], [98.2, 90.0], [98.3, 90.0], [98.4, 91.0], [98.5, 91.0], [98.6, 92.0], [98.7, 92.0], [98.8, 93.0], [98.9, 93.0], [99.0, 94.0], [99.1, 95.0], [99.2, 96.0], [99.3, 98.0], [99.4, 99.0], [99.5, 102.0], [99.6, 113.0], [99.7, 130.0], [99.8, 139.0], [99.9, 153.0], [100.0, 644.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 99415.0, "series": [{"data": [[0.0, 99415.0], [300.0, 8.0], [600.0, 3.0], [100.0, 564.0], [200.0, 7.0], [400.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 600.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 3.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 99997.0, "series": [{"data": [[0.0, 99997.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 48.82447586543138, "minX": 1.784076E12, "maxY": 98.88994252873566, "series": [{"data": [[1.78407612E12, 48.82447586543138], [1.784076E12, 93.13293786599733], [1.78407606E12, 98.88994252873566]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78407612E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 64.66887417218545, "minX": 1.0, "maxY": 140.0, "series": [{"data": [[2.0, 71.15384615384615], [3.0, 67.65714285714283], [4.0, 68.80952380952382], [5.0, 67.74074074074073], [6.0, 69.71428571428572], [7.0, 68.00000000000001], [8.0, 67.99999999999999], [9.0, 67.63888888888891], [10.0, 71.16666666666667], [11.0, 66.89062499999999], [12.0, 66.48214285714283], [13.0, 67.56603773584905], [14.0, 66.6296296296296], [15.0, 66.10679611650484], [16.0, 67.04255319148938], [17.0, 65.88524590163932], [18.0, 66.58620689655173], [19.0, 67.48611111111109], [20.0, 67.15624999999999], [21.0, 67.96774193548387], [22.0, 67.07317073170732], [23.0, 67.22222222222223], [24.0, 68.8961038961039], [25.0, 67.70000000000002], [26.0, 65.33333333333336], [27.0, 65.99999999999997], [28.0, 65.42982456140348], [29.0, 140.0], [30.0, 67.20833333333333], [31.0, 66.0842105263158], [32.0, 67.02857142857142], [33.0, 70.42857142857143], [34.0, 71.125], [35.0, 69.12698412698414], [36.0, 66.44444444444441], [37.0, 68.3972602739726], [38.0, 67.65116279069765], [39.0, 65.26666666666667], [40.0, 66.5], [41.0, 69.79381443298966], [42.0, 67.50847457627121], [43.0, 66.42], [44.0, 67.94285714285714], [45.0, 71.24074074074076], [46.0, 67.80597014925371], [47.0, 67.66279069767445], [48.0, 65.93506493506494], [49.0, 64.84210526315793], [50.0, 67.38983050847457], [51.0, 67.2720588235294], [52.0, 67.94354838709678], [53.0, 67.0566037735849], [54.0, 66.76190476190474], [55.0, 72.29838709677418], [56.0, 66.82291666666667], [57.0, 66.91752577319588], [58.0, 66.22838137472286], [59.0, 69.45794392523362], [60.0, 65.39272727272724], [61.0, 70.25806451612904], [62.0, 65.94033412887825], [63.0, 69.18811881188121], [64.0, 67.13725490196077], [65.0, 65.67796610169492], [66.0, 67.55797101449276], [67.0, 66.47590361445785], [68.0, 67.8811475409836], [69.0, 65.00934579439252], [70.0, 66.4], [71.0, 68.67973856209147], [72.0, 65.77105831533473], [73.0, 65.74390243902437], [74.0, 67.1133720930233], [75.0, 65.20869565217392], [76.0, 71.63963963963964], [77.0, 66.60273972602744], [78.0, 64.9942196531792], [79.0, 66.77966101694915], [80.0, 71.48999999999998], [81.0, 66.25878594249197], [82.0, 70.73267326732669], [83.0, 66.13322091062389], [84.0, 71.23636363636365], [85.0, 68.47413793103452], [86.0, 69.87378640776697], [87.0, 64.8510638297872], [88.0, 65.45864661654137], [89.0, 67.64285714285715], [90.0, 67.92873051224949], [91.0, 64.66887417218545], [92.0, 65.80050825921215], [93.0, 67.58787878787868], [94.0, 71.40952380952385], [95.0, 67.59719789842373], [96.0, 65.8962058438725], [97.0, 66.56249999999996], [98.0, 65.43987341772154], [99.0, 66.33641618497114], [100.0, 67.95527031330329], [1.0, 67.07692307692307]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[95.32227999999981, 67.77173000000039]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 8956.033333333333, "minX": 1.784076E12, "maxY": 3163320.0, "series": [{"data": [[1.78407612E12, 186435.9], [1.784076E12, 1195244.1], [1.78407606E12, 3163320.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78407612E12, 8956.033333333333], [1.784076E12, 57417.3], [1.78407606E12, 151960.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78407612E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 66.13334958556815, "minX": 1.784076E12, "maxY": 67.86633620689592, "series": [{"data": [[1.78407612E12, 66.13334958556815], [1.784076E12, 67.77690318655428], [1.78407606E12, 67.86633620689592]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78407612E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 66.09141882008794, "minX": 1.784076E12, "maxY": 67.84103448275783, "series": [{"data": [[1.78407612E12, 66.09141882008794], [1.784076E12, 67.7506654498447], [1.78407606E12, 67.84103448275783]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78407612E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.784076E12, "maxY": 0.2553426116054454, "series": [{"data": [[1.78407612E12, 0.0], [1.784076E12, 0.2553426116054454], [1.78407606E12, 0.09695402298850567]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78407612E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 54.0, "minX": 1.784076E12, "maxY": 644.0, "series": [{"data": [[1.78407612E12, 94.0], [1.784076E12, 424.0], [1.78407606E12, 644.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78407612E12, 72.0], [1.784076E12, 78.0], [1.78407606E12, 76.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78407612E12, 81.9699999999998], [1.784076E12, 91.0], [1.78407606E12, 88.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78407612E12, 75.0], [1.784076E12, 83.0], [1.78407606E12, 81.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.78407612E12, 55.0], [1.784076E12, 54.0], [1.78407606E12, 54.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78407612E12, 65.0], [1.784076E12, 66.0], [1.78407606E12, 66.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78407612E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 64.0, "minX": 8.0, "maxY": 71.0, "series": [{"data": [[581.0, 65.0], [621.0, 67.0], [696.0, 66.0], [704.0, 66.0], [778.0, 65.0], [825.0, 66.0], [855.0, 66.0], [912.0, 66.0], [957.0, 71.0], [980.0, 66.0], [975.0, 66.0], [1006.0, 66.0], [1018.0, 69.0], [1015.0, 65.0], [1083.0, 68.0], [1058.0, 66.0], [1034.0, 66.0], [1051.0, 71.0], [1074.0, 67.0], [1084.0, 67.0], [1049.0, 66.0], [1086.0, 66.0], [1043.0, 66.0], [1138.0, 65.0], [1137.0, 66.0], [1116.0, 67.0], [1133.0, 66.0], [1102.0, 66.0], [1125.0, 66.0], [1123.0, 65.0], [1148.0, 66.0], [1202.0, 66.0], [1152.0, 67.0], [1186.0, 65.0], [1187.0, 65.0], [1195.0, 67.0], [1197.0, 66.0], [1191.0, 65.0], [1171.0, 66.0], [1174.0, 66.0], [1176.0, 65.0], [1173.0, 68.0], [1172.0, 66.0], [1170.0, 67.0], [1180.0, 66.0], [1182.0, 67.0], [1163.0, 65.0], [1158.0, 65.0], [1159.0, 67.0], [1156.0, 67.0], [1154.0, 65.0], [1200.0, 66.0], [1166.0, 66.0], [1215.0, 66.0], [1204.0, 66.0], [1211.0, 66.0], [1214.0, 66.0], [1208.0, 66.0], [1203.0, 65.0], [1224.0, 66.0], [1223.0, 65.0], [1251.0, 65.0], [1225.0, 64.0], [1237.0, 67.0], [1234.0, 66.0], [1255.0, 65.0], [1228.0, 65.0], [1275.0, 67.0], [1221.0, 66.0], [1216.0, 66.0], [1219.0, 65.0], [1303.0, 65.0], [8.0, 68.0], [22.0, 65.0], [40.0, 66.0], [83.0, 66.0], [91.0, 65.0], [152.0, 65.0], [190.0, 65.0], [217.0, 66.0], [303.0, 65.0], [290.0, 65.0], [362.0, 68.0], [399.0, 65.0], [466.0, 67.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1303.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 64.0, "minX": 8.0, "maxY": 71.0, "series": [{"data": [[581.0, 65.0], [621.0, 67.0], [696.0, 66.0], [704.0, 66.0], [778.0, 65.0], [825.0, 66.0], [855.0, 66.0], [912.0, 66.0], [957.0, 71.0], [980.0, 66.0], [975.0, 66.0], [1006.0, 66.0], [1018.0, 69.0], [1015.0, 65.0], [1083.0, 68.0], [1058.0, 66.0], [1034.0, 66.0], [1051.0, 70.0], [1074.0, 67.0], [1084.0, 67.0], [1049.0, 66.0], [1086.0, 66.0], [1043.0, 66.0], [1138.0, 65.0], [1137.0, 66.0], [1116.0, 67.0], [1133.0, 66.0], [1102.0, 66.0], [1125.0, 66.0], [1123.0, 65.0], [1148.0, 66.0], [1202.0, 66.0], [1152.0, 67.0], [1186.0, 65.0], [1187.0, 65.0], [1195.0, 67.0], [1197.0, 66.0], [1191.0, 65.0], [1171.0, 66.0], [1174.0, 66.0], [1176.0, 65.0], [1173.0, 68.0], [1172.0, 66.0], [1170.0, 67.0], [1180.0, 66.0], [1182.0, 67.0], [1163.0, 65.0], [1158.0, 65.0], [1159.0, 67.0], [1156.0, 67.0], [1154.0, 65.0], [1200.0, 66.0], [1166.0, 66.0], [1215.0, 66.0], [1204.0, 66.0], [1211.0, 66.0], [1214.0, 66.0], [1208.0, 66.0], [1203.0, 65.0], [1224.0, 65.0], [1223.0, 65.0], [1251.0, 65.0], [1225.0, 64.0], [1237.0, 67.0], [1234.0, 66.0], [1255.0, 65.0], [1228.0, 65.0], [1275.0, 67.0], [1221.0, 66.0], [1216.0, 66.0], [1219.0, 65.0], [1303.0, 65.0], [8.0, 68.0], [22.0, 65.0], [40.0, 66.0], [83.0, 66.0], [91.0, 65.0], [152.0, 65.0], [190.0, 65.0], [217.0, 66.0], [303.0, 65.0], [290.0, 65.0], [362.0, 67.0], [399.0, 65.0], [466.0, 67.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1303.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 67.16666666666667, "minX": 1.784076E12, "maxY": 1159.5333333333333, "series": [{"data": [[1.78407612E12, 67.16666666666667], [1.784076E12, 439.96666666666664], [1.78407606E12, 1159.5333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78407612E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 68.36666666666666, "minX": 1.784076E12, "maxY": 1160.0, "series": [{"data": [[1.78407612E12, 68.36666666666666], [1.784076E12, 438.3], [1.78407606E12, 1160.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78407612E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 68.36666666666666, "minX": 1.784076E12, "maxY": 1160.0, "series": [{"data": [[1.78407612E12, 68.36666666666666], [1.784076E12, 438.3], [1.78407606E12, 1160.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78407612E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 68.36666666666666, "minX": 1.784076E12, "maxY": 1160.0, "series": [{"data": [[1.78407612E12, 68.36666666666666], [1.784076E12, 438.3], [1.78407606E12, 1160.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78407612E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

