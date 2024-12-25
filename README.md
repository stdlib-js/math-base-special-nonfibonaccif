<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# Non-Fibonacci

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the nth [non-Fibonacci][fibonacci-number] single-precision floating-point number.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The nth [non-Fibonacci number][fibonacci-number] is given by

<!-- <equation class="equation" label="eq:nonfibonaccif_number" align="center" raw="f(n) = \left \lfloor{ n + 1 + \log_\varphi \biggl( \sqrt{5}( n + 1 + \log_\varphi(\sqrt{5}(n+1))) - 5 + \tfrac{3}{n+1} \biggr) - 2 } \right \rfloor" alt="Formula to compute the nth non-Fibonacci number."> -->

```math
f(n) = \left \lfloor{ n + 1 + \log_\varphi \biggl( \sqrt{5}( n + 1 + \log_\varphi(\sqrt{5}(n+1))) - 5 + \tfrac{3}{n+1} \biggr) - 2 } \right \rfloor
```

<!-- <div class="equation" align="center" data-raw-text="f(n) = \left \lfloor{ n + 1 + \log_\varphi \biggl( \sqrt{5}( n + 1 + \log_\varphi(\sqrt{5}(n+1))) - 5 + \tfrac{3}{n+1} \biggr) - 2 } \right \rfloor" data-equation="eq:nonfibonaccif_number">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/nonfibonaccif/docs/img/equation_nonfibonacci_number.svg" alt="Formula to compute the nth non-Fibonacci number.">
    <br>
</div> -->

<!-- </equation> -->

where `φ` is the [golden ratio][golden-ratio].

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-nonfibonaccif
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var nonfibonaccif = require( '@stdlib/math-base-special-nonfibonaccif' );
```

#### nonfibonaccif( n )

Computes the nth [non-Fibonacci][fibonacci-number] single-precision floating-point number.

```javascript
var v = nonfibonaccif( 1 );
// returns 4

v = nonfibonaccif( 2 );
// returns 6

v = nonfibonaccif( 3 );
// returns 7
```

If provided either a non-integer or `n < 1`, the function returns `NaN`. 

```javascript
var v = nonfibonaccif( -1 );
// returns NaN

v = nonfibonaccif( 3.14 );
// returns NaN
```

If provided `NaN`, the function returns `NaN`.

```javascript
var v = nonfibonaccif( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var nonfibonaccif = require( '@stdlib/math-base-special-nonfibonaccif' );

var i;
for ( i = 1; i < 100; i++ ) {
    console.log( 'nonfibonaccif(%d) = %d', i, nonfibonaccif( i ) );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/nonfibonaccif.h"
```

#### stdlib_base_nonfibonaccif( x )

Computes the nth non-Fibonacci single-precision floating-point number.

```c
float out = stdlib_base_nonfibonaccif( 1 );
// returns 4.0f

out = stdlib_base_nonfibonaccif( 2 );
// returns 6.0f
```

The function accepts the following arguments:

-   **x**: `[in] int32_t` input value.

```c
float stdlib_base_nonfibonaccif( const int32_t x );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/nonfibonaccif.h"
#include <stdio.h>

int main( void ) {
    int i;
    
    for ( i = 1; i < 12; i++ ) {
        printf( "x: %i => result: %f", i , stdlib_base_nonfibonaccif( i ) );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

* * *

<section class="references">

## References

-   Gould, H.W. 1965. "Non-Fibonacci Numbers." _Fibonacci Quarterly_, no. 3: 177–83. [&lt;http://www.fq.math.ca/Scanned/3-3/gould.pdf>][@gould:1965a].
-   Farhi, Bakir. 2011. "An explicit formula generating the non-Fibonacci numbers." _arXiv_ abs/1105.1127 \[Math.NT] (May): 1–5. [&lt;https://arxiv.org/abs/1105.1127>][@farhi:2011a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-nonfibonaccif.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-nonfibonaccif

[test-image]: https://github.com/stdlib-js/math-base-special-nonfibonaccif/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-nonfibonaccif/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-nonfibonaccif/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-nonfibonaccif?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-nonfibonaccif.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-nonfibonaccif/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-nonfibonaccif/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-nonfibonaccif/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-nonfibonaccif/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-nonfibonaccif/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-nonfibonaccif/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-nonfibonaccif/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-nonfibonaccif/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-nonfibonaccif/main/LICENSE

[fibonacci-number]: https://en.wikipedia.org/wiki/Fibonacci_number

[golden-ratio]: https://en.wikipedia.org/wiki/Golden_ratio

[@gould:1965a]: http://www.fq.math.ca/Scanned/3-3/gould.pdf

[@farhi:2011a]: https://arxiv.org/abs/1105.1127

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->