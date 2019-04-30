/**
 * @license
 * MIT License
 *
 * Copyright (c) 2019 Alexis Munsayac
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
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2019
 */
export { default as Def } from './types/data-structures/def';

export { default as Compose } from './types/composition/compose';
export { default as Either } from './types/composition/either';

export { default as Nullable } from './types/annotations/nullable';
export { default as Class } from './types/class/class';
export { default as Super } from './types/class/super';
export { default as Extends } from './types/class/extends';
export { default as Except } from './types/annotations/except';

export { default as Iterable } from './types/extra/iterable';
export { default as Thenable } from './types/extra/thenable';
export { default as NonNull } from './types/extra/nonnull';
export { default as AsyncIterable } from './types/extra/async-iterable';
export { default as Any } from './types/extra/any';

export { default as Like } from './types/objects/like';
export { default as Exact } from './types/objects/exact';

export { default as Types } from './types/primitives';

export { default as Interface } from './types/typecheck-interface';
