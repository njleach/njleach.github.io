---
layout: post
title: The FaIR DECK
---

A figure showing the idealised CMIP6 DECK reference experiments carried out using the constrained FaIR probabilistic ensemble. <!--more-->The CMIP6 ensemble can be toggled on/off by clicking the legend item. Note that I've normalised the CMIP6 ensemble myself in this instance, so it may not line up perfectly with the literature, but it shouldn't be far off. <b>Full-page version [here]({{ site.base_url }}{% link _pages/FaIR-deck-experiments.md %})</b>.

<div class='figure-container'>
{% include FaIR_DECK_experiments_timeindex.html %}
</div>

### Derived metrics 

|metric \ quantile|       0.05 |       0.17 |      likely above |       0.5 |     likely below |     0.83 |     0.95 |
|---|---|---|---|---|---|---|---|
| <b>ECS</b> / &deg;C          |  1.98 |   2.38 |    2.77 |  3.15 |    3.63 |   4.35 |   5.71  |
| <b>TCR</b> / &deg;C          |  1.29 |   1.46 |    1.61 |  1.74 |    1.88 |   2.08 |   2.37  |
| <b>TCRE</b> / &deg;C TgC$$^{-1}$$           |  1.01 |   1.15 |    1.27 |  1.37 |    1.49 |   1.66 |   1.90  |
| <b>ZEC<sub>25</sub></b> / &deg;C        | -0.03 |  -0.00    |    0.03 |  0.06 |    0.09 |   0.15 |   0.26 |
| <b>ZEC<sub>50</sub></b> / &deg;C       | -0.10  |  -0.06 |   -0.02 |  0.03 |    0.09 |   0.19 |   0.38 |
| <b>ZEC<sub>90</sub></b> / &deg;C       | -0.17 |  -0.11 |   -0.04 |  0.02 |    0.11 |   0.26 |   0.55  |
| <b>CDR-hysteresis</b> / &deg;C |  0.37 |   0.54 |    0.74 |  0.95 |    1.22 |   1.67 |   2.52  |

### Metric descriptions

|metric|experiment|description|
|---|---|---|
|<b>ECS</b>|abrupt-4xCO\\(_2\\)|Equilibrium warming for a doubling of CO\\(_2\\) concentrations (derived analytically for FaIR)|
|<b>TCR</b>|1pctCO\\(_2\\)|Transient warming at the time of CO\\(_2\\) doubling|
|<b>TCRE</b>|1pctCO\\(_2\\)|Ratio of TCR to cumulative CO\\(_2\\) emissions at the time of CO\\(_2\\) doubling|
|<b>ZEC<sub>x</sub></b>|esm-1pct-brch-1000PgC (A1)|Difference between warming at time of cessation of CO\\(_2\\) emissions and x years after cessation|
|<b>CDR-hysteresis</b>|1pctCO\\(_2\\)-cdr|Difference between warming at the time of CO\\(_2\\) doubling when concentrations are rising and when concentrations are falling|