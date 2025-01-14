/*
 * Copyright 2016 The Closure Compiler Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * @fileoverview Specifies objects that the compiler does NOT polyfill.
 * NOTE: this file should never be injected, since all the implementations
 * are null.
 */

'require util/polyfill';

// Proxy is not really possible to polyfill, because pre-es6 JS doesn't provide
// all of the hooks necessary to build it.
$jscomp.polyfill('Proxy', null, 'es6', 'es6');

// TODO(b/137574743): Since we added transpilation support for the `.raw`
// property on the first argument to a tagged template literal call a few years
// ago, we could write a polyfill for this now.
$jscomp.polyfill('String.raw', null, 'es6', 'es6');

// Polyfilling this in infeasible, since it would require including a large
// table of unicode information in the polyfill.
$jscomp.polyfill('String.prototype.normalize', null, 'es6', 'es6');
