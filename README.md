<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# iterContinuedFraction

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluate the terms of a continued fraction.

<section class="intro">

A **generalized continued fraction** has the form

<!-- <equation class="equation" label="eq:continued_fraction" align="center" raw="x = b_0 + \frac{a_1}{b_1+\frac{a_2}{b_2+\frac{a_3}{b_3+\frac{a_4}{b_4+\ldots}}}}" alt="Continued fraction"> -->

```math
x = b_0 + \frac{a_1}{b_1+\frac{a_2}{b_2+\frac{a_3}{b_3+\frac{a_4}{b_4+\ldots}}}}
```

<!-- <div class="equation" align="center" data-raw-text="x = b_0 + \frac{a_1}{b_1+\frac{a_2}{b_2+\frac{a_3}{b_3+\frac{a_4}{b_4+\ldots}}}}" data-equation="eq:continued_fraction">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@d3cef42cbeb8499623814933ed4d906a345cec32/lib/node_modules/@stdlib/math/iter/utils/continued-fraction/docs/img/equation_continued_fraction.svg" alt="Continued fraction">
    <br>
</div> -->

<!-- </equation> -->

If `a_i = 1` for all `i`, the above expression reduces to a **simple continued fraction**.

<!-- <equation class="equation" label="eq:simple_continued_fraction" align="center" raw="x = b_0 + \frac{1}{b_1+\frac{1}{b_2+\frac{1}{b_3+\frac{1}{b_4+\ldots}}}}" alt="Simple continued fraction"> -->

```math
x = b_0 + \frac{1}{b_1+\frac{1}{b_2+\frac{1}{b_3+\frac{1}{b_4+\ldots}}}}
```

<!-- <div class="equation" align="center" data-raw-text="x = b_0 + \frac{1}{b_1+\frac{1}{b_2+\frac{1}{b_3+\frac{1}{b_4+\ldots}}}}" data-equation="eq:simple_continued_fraction">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@d3cef42cbeb8499623814933ed4d906a345cec32/lib/node_modules/@stdlib/math/iter/utils/continued-fraction/docs/img/equation_simple_continued_fraction.svg" alt="Simple continued fraction">
    <br>
</div> -->

<!-- </equation> -->

where the values `b_i` are called the **coefficients** or **terms** of the continued fraction.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import iterContinuedFraction from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-iter-utils-continued-fraction@v0.2.3-deno/mod.js';
```

#### iterContinuedFraction( iterator\[, options] )

Evaluates the terms of a continued fraction.

```javascript
import array2iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-iterator@deno/mod.js';

var arr = array2iterator( [ 3, 4, 12, 4 ] );

var v = iterContinuedFraction( arr );
// returns ~3.245
```

The function supports the following `options`:

-   **iter**: maximum number of iterations. Default: `1e308`.
-   **tol**: tolerance at which to terminate further evaluation of the continued fraction. Default: [floating-point epsilon][@stdlib/constants/float64/eps].

To explicitly cap the maximum number of iterations, set the `iter` option.

```javascript
import array2iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-iterator@deno/mod.js';

var arr = array2iterator( [ 3, 4, 12, 4 ] );

var opts = {
    'iter': 2
};
var v = iterContinuedFraction( arr, opts );
// returns 3.25
```

The function terminates continued fraction evaluation once the difference between continued fraction approximations is sufficiently small. The default tolerance is [floating-point epsilon][@stdlib/constants/float64/eps] (`~2.22e-16`). Once an update to a continued fraction approximation is less than or equal to this tolerance, the function terminates evaluation. To adjust the tolerance (e.g., to return a rough approximation), set the `tol` option.

```javascript
import iterContinuedFractionSeq from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-iter-sequences-continued-fraction@deno/mod.js';

var opts = {
    'tol': 1.0e-7
};
var it = iterContinuedFractionSeq( 3.141592653589793, opts );
// returns <Object>

var v = iterContinuedFraction( it );
// returns ~3.14159292
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an iterated value is non-numeric (including `NaN`), the function returns `NaN`. If non-numeric iterated values are possible, you are advised to provide an [`iterator`][mdn-iterator-protocol] which type checks and handles non-numeric values accordingly.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import iterContinuedFractionSeq from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-iter-sequences-continued-fraction@deno/mod.js';
import PI from 'https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pi@deno/mod.js';
import iterContinuedFraction from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-iter-utils-continued-fraction@v0.2.3-deno/mod.js';

// Create an iterator for returning the list of continued fraction terms:
var it = iterContinuedFractionSeq( PI );

// Reconstitute the original value:
var v = iterContinuedFraction( it );
// returns <number>

console.log( 'Value: %d.', v );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-iter/sequences/continued-fraction`][@stdlib/math/iter/sequences/continued-fraction]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a list of all continued fraction terms which can be obtained given the precision of a provided number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-iter-utils-continued-fraction.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-iter-utils-continued-fraction

[test-image]: https://github.com/stdlib-js/math-iter-utils-continued-fraction/actions/workflows/test.yml/badge.svg?branch=v0.2.3
[test-url]: https://github.com/stdlib-js/math-iter-utils-continued-fraction/actions/workflows/test.yml?query=branch:v0.2.3

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-iter-utils-continued-fraction/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-iter-utils-continued-fraction?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-iter-utils-continued-fraction.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-iter-utils-continued-fraction/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-iter-utils-continued-fraction/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-iter-utils-continued-fraction/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-iter-utils-continued-fraction/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-iter-utils-continued-fraction/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-iter-utils-continued-fraction/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-iter-utils-continued-fraction/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-iter-utils-continued-fraction/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-iter-utils-continued-fraction/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

[@stdlib/constants/float64/eps]: https://github.com/stdlib-js/constants-float64-eps/tree/deno

<!-- <related-links> -->

[@stdlib/math/iter/sequences/continued-fraction]: https://github.com/stdlib-js/math-iter-sequences-continued-fraction/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
