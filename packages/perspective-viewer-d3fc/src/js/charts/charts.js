/******************************************************************************
 *
 * Copyright (c) 2017, the Perspective Authors.
 *
 * This file is part of the Perspective library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import barChart from "./bar";
import columnChart from "./column";
import lineChart from "./line";
import areaChart from "./area";
import yScatter from "./y-scatter";
import xyScatter from "./xy-scatter";
import xyScatterCanvas from "./xy-scatter-canvas";
import heatmap from "./heatmap";

const chartClasses = [barChart, columnChart, lineChart, areaChart, yScatter, xyScatter, xyScatterCanvas, heatmap];

export default chartClasses;