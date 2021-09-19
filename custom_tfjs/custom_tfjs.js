/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

// This file is autogenerated.


import {registerKernel} from '@tensorflow/tfjs-core/dist/base';
import '@tensorflow/tfjs-core/dist/base_side_effects';
export * from '@tensorflow/tfjs-core/dist/base';

//backend = webgl
export * from '@tensorflow/tfjs-backend-webgl/dist/base';
import {identityConfig as Identity_webgl} from '@tensorflow/tfjs-backend-webgl/dist/kernels/Identity';
registerKernel(Identity_webgl);
import {multiplyConfig as Multiply_webgl} from '@tensorflow/tfjs-backend-webgl/dist/kernels/Multiply';
registerKernel(Multiply_webgl);
import {addConfig as Add_webgl} from '@tensorflow/tfjs-backend-webgl/dist/kernels/Add';
registerKernel(Add_webgl);
import {subConfig as Sub_webgl} from '@tensorflow/tfjs-backend-webgl/dist/kernels/Sub';
registerKernel(Sub_webgl);
import {squareConfig as Square_webgl} from '@tensorflow/tfjs-backend-webgl/dist/kernels/Square';
registerKernel(Square_webgl);
import {meanConfig as Mean_webgl} from '@tensorflow/tfjs-backend-webgl/dist/kernels/Mean';
registerKernel(Mean_webgl);
import {reshapeConfig as Reshape_webgl} from '@tensorflow/tfjs-backend-webgl/dist/kernels/Reshape';
registerKernel(Reshape_webgl);
import {realDivConfig as RealDiv_webgl} from '@tensorflow/tfjs-backend-webgl/dist/kernels/RealDiv';
registerKernel(RealDiv_webgl);
import {castConfig as Cast_webgl} from '@tensorflow/tfjs-backend-webgl/dist/kernels/Cast';
registerKernel(Cast_webgl);
import {sumConfig as Sum_webgl} from '@tensorflow/tfjs-backend-webgl/dist/kernels/Sum';
registerKernel(Sum_webgl);