# CHANGELOG

> Package changelog.

<section class="release" id="v0.1.1">

## 0.1.1 (2026-02-08)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2026-01-30)

<section class="features">

### Features

-   [`7245f3c`](https://github.com/stdlib-js/stdlib/commit/7245f3c8cf9139b72f6f058e8c878b13e02ded9f) - add `math/base/special/nonfibonaccif` [(#3391)](https://github.com/stdlib-js/stdlib/pull/3391)

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`5f81198`](https://github.com/stdlib-js/stdlib/commit/5f8119831537ea1b9707d13c96cc3f5ec420748f) - update  parameter handling due to int32 type

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`d7b5f34`](https://github.com/stdlib-js/stdlib/commit/d7b5f340acab1d7bfd6723658cfd8d391abadb02): update signature to accept floats

    -   User code should behave similarly in the primary case of providing integer-valued input values. However, no longer will real-values truncate. Now, real-valued inputs will result in `NaN`, which is, arguably, better behavior, as real-to-integer truncation can be a source of silent bugs.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`4c81241`](https://github.com/stdlib-js/stdlib/commit/4c81241d68f47878320c735119a59297f9da2330) - **chore:** add structured package data for `math/base/special/nonfibonaccif` [(#8404)](https://github.com/stdlib-js/stdlib/pull/8404) _(by Manvith M)_
-   [`d7b5f34`](https://github.com/stdlib-js/stdlib/commit/d7b5f340acab1d7bfd6723658cfd8d391abadb02) - **refactor:** modify C implementation to accept `float` instead of `int32` in `math/base/special/nonfibonaccif` [(#7960)](https://github.com/stdlib-js/stdlib/pull/7960) _(by Gunj Joshi)_
-   [`a51fa22`](https://github.com/stdlib-js/stdlib/commit/a51fa22399f36b4d83ba0d189d297af4aa429354) - **docs:** minor clean-up _(by Philipp Burckhardt)_
-   [`dd6d9cf`](https://github.com/stdlib-js/stdlib/commit/dd6d9cff0105270f0664490f3c89b36d4df89032) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`5f81198`](https://github.com/stdlib-js/stdlib/commit/5f8119831537ea1b9707d13c96cc3f5ec420748f) - **fix:** update  parameter handling due to int32 type _(by Philipp Burckhardt)_
-   [`5f73301`](https://github.com/stdlib-js/stdlib/commit/5f73301a8509cc423a06b02140c4e316fd02ff49) - **docs:** minor clean-up _(by Philipp Burckhardt)_
-   [`a1e230f`](https://github.com/stdlib-js/stdlib/commit/a1e230f29297caa89880e9c194c615a0400fb7bc) - **chore:** clean up cppcheck-suppress comments _(by Karan Anand)_
-   [`e9f9513`](https://github.com/stdlib-js/stdlib/commit/e9f951387dd4387dc0a7b4acfadc59c5b2541736) - **bench:** update random value generation [(#6430)](https://github.com/stdlib-js/stdlib/pull/6430) _(by Harsh Yadav)_
-   [`7245f3c`](https://github.com/stdlib-js/stdlib/commit/7245f3c8cf9139b72f6f058e8c878b13e02ded9f) - **feat:** add `math/base/special/nonfibonaccif` [(#3391)](https://github.com/stdlib-js/stdlib/pull/3391) _(by Aayush Khanna, Athan Reines, Gunj Joshi, stdlib-bot)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 7 people contributed to this release. Thank you to the following contributors:

-   Aayush Khanna
-   Athan Reines
-   Gunj Joshi
-   Harsh Yadav
-   Karan Anand
-   Manvith M
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

