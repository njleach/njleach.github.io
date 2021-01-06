---
layout: post
title: How long left?
---
A recent [CarbonBrief analysis](https://www.carbonbrief.org/analysis-when-might-the-world-exceed-1-5c-and-2c-of-global-warming) estimated when two key global temperature targets (1.5 and 2.0 &deg;C) would be exceeded using an ensemble of climate models from CMIP6. Inspired by this, I thought I'd try and carry out something similar, but using a large probabilistic simple climate model ensemble rather than the complex CMIP6 model ensemble in the original article.<!--more--> I go on for a while about the model and ensemble, so if you're only interested in the [results](#results), skip the next couple of sections!

### The FaIRv2.0 model
I've used a recent update[<sup>1</sup>](#1) (v2.0) to the FaIR simple climate model for this analysis. I'll leave covering the specifics of the model to (possibly) another post, but in short FaIRv2.0 simluates the climate response to 44 different greenhouse gases and 7 types of aerosol emission, by stepping through input emissions &#8594; concentrations &#8594; effective radiative forcing &#8594; global mean surface temperature change. More on the model is available in the the [paper pre-print](https://doi.org/10.5194/gmd-2020-390), or this short thread I wrote:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Our preprint for an update to FaIR (v2.0.0) has been posted to GMD Discussions today, comments welcome! Brief thread below, but in one sentence: we&#39;ve tried to make FaIR even simpler and demonstrated a couple of use cases. THREAD 1/ <a href="https://t.co/jMRVYQEwkx">https://t.co/jMRVYQEwkx</a></p>&mdash; Nick Leach (@nickleach0) <a href="https://twitter.com/nickleach0/status/1331563458190569474?ref_src=twsrc%5Etfw">November 25, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

#### An observationally constrained ensemble
The FaIRv2.0 pre-print contains more or less everything required to replicate what I'm doing here, with one exception. I've updated the way in which I construct an observationally constrained parameter ensemble for use in FaIR. This change actually makes little practical difference to the results, but I feel is more robust from a statistical point of view. 

The starting point for this change is the FULL ensemble exhaustively described in the pre-print. This is a 1 million member ensemble, that aims to span all the physically plausible regions of parameter space, by either taking estimates of parameter distributions from the literature (largely the 5th Assessment Report[<sup>2</sup>](#2)); or by inferring parameter distributions from CMIP6 model ensembles[<sup>3,</sup>](#3)[<sup>4</sup>](#4). In this FULL ensemble, we don't consider any dependencies between parameters, aiming to simply span the entire possible range. The result is an extremely underconfident probabilistic ensemble. Just as an example of this, the 90% credible interval of the warming projected by the FULL ensemble under the SSP5-85 scenario (emissions data used throughout is from[<sup>5,</sup>](#5)[<sup>6</sup>](#6)) is 2.9 - 8.3 &deg;C. We therefore use information about the current state of the climate to constrain this ensemble and increase its usefulness. The specific information we use to do this is the Global Warming Index[<sup>7</sup>](#7).

The Global Warming Index (GWI) is a simple regression-based method (a "multi-fingerprinting" approach) of estimating the anthropogenic and natural contributions to global warming. It combines uncertainties from temperature observations, radiative forcing, climate response and internal variability to produce a distribution of the current level and rate of global warming. I've carried out the GWI computation as in the original paper, but I've updated both the forcing variations - to reflect the current literature - and the internal variability variations - to CMIP6 derived estimates. The computation spans 10,000 forcing, 18 climate response, 100 observational and 102 internal variability variations, resulting in 1.8 billion samples of the current level and rate of warming. Based on this calculation, I estimate the current (2014) level of global warming relative to 1861-1880 at (central [90% interval]) 1.07 [0.84 - 1.27] &deg;C, and rate of warming at 0.28 [0.20 - 0.40] &deg;C decade<sup>-1</sup>. I estimate the anthropogenic contribution to this level of warming (after all, separating the anthropogenic and natural contributions is one of the key problems the GWI addresses) at 1.04 [0.79 - 1.25] &deg;C, and to the rate at 0.24 [0.16 - 0.34] &deg;C decade<sup>-1</sup>. The natural contribution is larger than (possibly) expected, especially to the rate of warming, since the 2010-14 period lies over an increase in solar forcing between a trough and peak in its cycle.

In the pre-print, we simply took the (two-dimensional) 5-95% range of the level and rate estimated from these samples and used this as a pass/fail criterion to subsample the FULL ensemble (ie. all FULL members within the 5-95% range passed). However, this does not exploit all the information contained in the distribution resulting from the GWI calculation. To make better use of the distribution itself, for the analysis here I have set the probability of selecting a particular FULL ensemble member to be proportional to the likelihood of that member's level/rate of warming within the GWI distribution probability density function (estimated with a gaussian kernel). This is a much stricter constraint: the simple pass-fail criterion discarded roughly 75% of the FULL ensemble; the new GWI likelihood sampling procedure discards ~94%.

#### Setting the baseline level of warming
For many analyses and depictions of observed or modelled global warming, we measure the difference in global warming relative to some pre-industrial period (eg. 1850-1900 or 1861-1880). However, in order to estimate how long until a particular temperature target is exceeded from the present day, we want all of our model ensemble members to start from the current observed level of warming. Here I use a 5-dataset mean[<sup>8,</sup>](#8)[<sup>9,</sup>](#9)[<sup>10,</sup>](#10)[<sup>11,</sup>](#11)[<sup>12</sup>](#12) (which is also used in the GWI calculation) of global warming relative to 1861-1880, averaged over 2010-2019 to reduce the impact of natural variability, as my current level of observed warming. All of the ensemble members used here are set relative to this 2010-2019 level of 1.00 &deg;C (this is a very similar level of warming to that used as the baseline in the CarbonBrief article). The figure below shows the baselined constrained FaIR ensemble over a wide range of emission scenarios (SSP1-19, SSP1-26, SSP2-45, SSP3-70 and SSP5-85).

<div class='figure-container' >
{% include FaIR_baselined_temp_projections.html %}
</div>

The 5th, 17th, central, 83rd and 95th percentiles are shown for each scenario (and over history). You can hover over to see the precise numbers for each feature, and select a region to zoom in on with the cursor. The black dots show the 5-dataset mean observed warming timeseries used. When a particular single scenario is selected in the dropdown menu, the numbers on the right of the figure indicate the end of century (2081-2100 average) warming for each percentile shown.

Now that I have my model projections, let's use them to examine when 1.5 or 2.0 &deg;C are surpassed in each scenario...

## Results
One final piece of methodological detail to include before moving on to the results is that prior to setting the baseline level of warming, I take a 11-year rolling mean of each ensemble member. This removes the impact that the cyclic natural solar forcing might have on the threshold crossing times. Although this forcing is too small to have a real impact in the high-emission scnearios, it can push some ensemble members over the edge in the lower emission ones; this results in a threshold crossing time distribution with "wiggles".

So now that I've baselined my warming at a reasonable estimate of "the present", and removed the impact of solar forcing, I can finally compute when each ensemble member crosses each warming target in each scenario. The results are shown below in the combined box / ridge plot. You can select either warming target with the buttons in the top left. Hovering over in line with each scenario will display the key percentiles (5th, 17th, 33rd, central, 66th, 83rd and 95th) of the crossing time. Another important quantity displayed on hovering over is the proportion of ensemble members that actually exceed the threshold. This is shown as a percentage after the temperature target level on the annotation for the median crossing time. 

<div class='figure-container' >
{% include Target_crossing_FaIR.html %}
</div>

My results are broadly similar to those found in the CarbonBrief article. Within my ensemble, for the worst-case SSP5-85 scenario, 1.5 &deg;C is crossed in 2031 [2025 - 2040] and 2.0 &deg;C is crossed in 2045 [2035 - 2056]. For the modest mitigation SSP2-45 scenario, 1.5 &deg;C is passed in 2036 [2028 - 2048] and 2.0 &deg;C in 2060 [2043 - 2095]. In general, crossing times found using the FaIR probabilistic ensemble tend to be slightly further away than those calculated by CarbonBrief. I suspect this is largely a reflection of the distribution of Transient Climate Response (TCR) within the FaIR ensemble compared to the CMIP6 ensemble. The constraint imposed to construct the FaIR ensemble shifts the ensemble TCR towards cooler values than would be inferred directly from the CMIP6 ensemble.

Something that may seem a little odd is that the expected crossing time is furthest away from today for the middle SSP2-45 scenario, rather than one of the scenarios with more ambitious emissions mitigation. The reason behind this possibly counterintuitive result is selection bias. Considerably fewer than 100% of the ensemble actually exceed each temperature target (for SSP1-19, only 4% of members end up exceeding 2.0 &deg;C). However, as you might expect, the members that do end up exceeding each target tend to be those with some combination of high climate sensitivity and strong aerosol forcing, resulting in higher warming rates than the constrained ensemble as a whole.

#### Using alternative baselines
Here I have made a choice over what I take to be the "current" level of warming at which I baseline my model ensemble. There are several other options which may be equally justified (though I won't get into any discussion of why you might select one over another here...). I examine the impact of selecting different baselines by re-calculating the crossing time over five other baselines. This gives me a total of six baselines as follows:

baseline | description 
---|---
5-dataset 2010-19| as above, the mean of 5 datasets averaged over 2010-2019, relative to the 1861-1880 mean = 1.00 &deg;C
5-dataset lowess| LOWESS filter applied to the 5-dataset mean evaluated in 2019, relative to the 1861-1880 mean = 1.15 &deg;C
HadCRUT5 2009-18| 2009-2018 average of HadCRUT5[<sup>13</sup>](#13), relative to the 1861-1880 mean = 1.04 &deg;C
HadCRUT5 lowess| LOWESS filter applied to HadCRUT5 evaluated in 2018, relative to the 1861-1880 mean = 1.12
PA compatible| Paris agreement compatible definition of the 1.5 &deg;C target[<sup>14</sup>](#14): 0.9 &deg;C above 1986-2005 mean
SR1.5-1| definition of historical warming over 2006-2015 relative to 1850-1900 used in SR1.5[<sup>15</sup>](#15) Chapter 1 = 0.87 &deg;C
SR1.5-2| definition of global near-surface temperature over 2006-2015 relative to 1850-1900 used in SR1.5 Chapter 2 = 0.97 &deg;C

Below is a figure outlining the results of re-calculating the crossing time for the SSP2-45 scenario over the various baselines. For the 2.0 &deg;C, the discrepancies between the different baselines are small in comparison to the differences between SSPs in the figure above. However, they become more significant for the 1.5 &deg;C target, making a difference to the central estimate of up to 4 years. The changes in uncertainty between the baselines are introduced by averaging over different periods (eg. if you baseline relative to the single year 2019, the ensemble spreads out less than if you baseline relative to the 2010-19 decade, hence the crossing time distribution is more confident).

<div class='figure-container' >
{% include alternative_Target_crossing_FaIR.html %}
</div>

## Thoughts
This was an interesting, albeit slightly too time-consuming exercise. It's nice to see that the FaIR ensemble gives comparable results to the far more complex CMIP6 models used in the CarbonBrief analysis. In the future I'll likely update the GWI (and therefore the constrained ensemble) computation to use the HadCRUT5 dataset and associated observational uncertainty. I'd have thought the impact of this would be to slightly increase the amount of warming projected by the ensemble, since HadCRUT5 is a little warmer than the 5-dataset mean I've used thus far.

At the end of this type of analysis, I feel it's important to emphasize that while the 1.5 and 2.0 &deg;C targets are incredibly important due to their political significance - hence why I've used them in this analysis, they are not physical thresholds (or tipping points) beyond which the impacts of global warming suddenly get a lot worse. From a physical point of view, the impacts at 1.49 &deg;C warming are near identical to those at 1.51 &deg;C. For this reason, the mitigation goal is simply get emissions down as quickly as is possible to do equitably, and avoid much warming as is possible, regardless of whether we make or miss these specific temperature targets. 

### References
<a id="1"><sup>1</sup></a>
[Leach, N. J., Jenkins, S., Nicholls, Z., Smith, C. J., Lynch, J., Cain, M., … Allen, M. R. (2020). FaIRv2.0.0: a generalised impulse-response model for climate uncertainty and future scenario exploration. Geosci. Model Dev. Discuss., 2020, 1–48.](https://doi.org/10.5194/gmd-2020-390)

<a id="2"><sup>2</sup></a>
[Myhre, G., Shindell, D., Bréon, F.-M., Collins, W., Fuglestvedt, J., Huang, J., … Zhang, H. (2013). Anthropogenic and Natural Radiative Forcing. In T. F. Stocker, D. Qin, G.-K. Plattner, M. Tignor, S. K. Allen, J. Boschung, … P. M. Midgley (Eds.), Climate Change 2013: The Physical Science Basis. Contribution of Working Group I to the Fifth Assessment Report of the Intergovernmental Panel on Climate Change (pp. 659–740).](https://doi.org/10.1017/CBO9781107415324.018)

<a id="3"><sup>3</sup></a>
[Eyring, V., Bony, S., Meehl, G. A., Senior, C. A., Stevens, B., Stouffer, R. J., & Taylor, K. E. (2016). Overview of the Coupled Model Intercomparison Project Phase 6 (CMIP6) experimental design and organization. Geoscientific Model Development, 9(5), 1937–1958.](https://doi.org/10.5194/gmd-9-1937-2016)

<a id="4"><sup>4</sup></a>
[K. Arora, V., Katavouta, A., Williams, R. G., Jones, C. D., Brovkin, V., Friedlingstein, P., … Ziehn, T. (2020). Carbon-concentration and carbon-climate feedbacks in CMIP6 models and their comparison to CMIP5 models. Biogeosciences, 17(16), 4173–4222.](https://doi.org/10.5194/bg-17-4173-2020)

<a id="5"><sup>5</sup></a>
[Nicholls, Z. R. J., Meinshausen, M., Lewis, J., Gieseke, R., Dommenget, D., Dorheim, K., … Xie, Z. (2020). Reduced complexity model intercomparison project phase 1: Protocol, results and initial observations. Geoscientific Model Development Discussions, 1–33.](https://doi.org/10.5194/gmd-2019-375)

<a id="6"><sup>6</sup></a>
[Friedlingstein, P., Jones, M. W., O’Sullivan, M., Andrew, R. M., Hauck, J., Peters, G. P., … Zaehle, S. (2019). Global carbon budget 2019. Earth System Science Data, 11(4), 1783–1838.](https://doi.org/10.5194/essd-11-1783-2019)

<a id="7"><sup>7</sup></a>
[Haustein, K., Allen, M. R., Forster, P. M., Otto, F. E. L., Mitchell, D. M., Matthews, H. D., & Frame, D. J. (2017). A real-time Global Warming Index. Scientific Reports, 7(1), 15417.](https://doi.org/10.1038/s41598-017-14828-5)

<a id="8"><sup>8</sup></a>
[Morice, C. P., Kennedy, J. J., Rayner, N. A., Jones, P. D., P., M. C., J., K. J., … D., J. P. (2011). Quantifying uncertainties in global and regional temperature change using an ensemble of observational estimates: The HadCRUT4 data set. Journal of Geophysical Research: Atmospheres, 117(D8).](https://doi.org/10.1029/2011JD017187)

<a id="9"><sup>9</sup></a>
[Vose, R. S., Arndt, D., Banzon, V. F., Easterling, D. R., Gleason, B., Huang, B., … Wuertz, D. B. (2012). NOAA’s Merged Land–Ocean Surface Temperature Analysis. Bulletin of the American Meteorological Society, 93(11), 1677–1685.](https://doi.org/10.1175/BAMS-D-11-00241.1)

<a id="10"><sup>10</sup></a>
[Lenssen, N. J. L., Schmidt, G. A., Hansen, J. E., Menne, M. J., Persin, A., Ruedy, R., & Zyss, D. (2019). Improvements in the uncertainty model in the Goddard Institute for Space Studies Surface Temperature (GISTEMP) analysis. Journal of Geophysical Research: Atmospheres, 2018JD029522.](https://doi.org/10.1029/2018JD029522)

<a id="11"><sup>11</sup></a>
[Rohde, R. A., & Hausfather, Z. (2020). The Berkeley Earth Land/Ocean Temperature Record. Earth System Science Data, 12(4), 3469–3479.](https://doi.org/10.5194/essd-12-3469-2020)

<a id="12"><sup>12</sup></a>
[Cowtan, K., & Way, R. G. (2014). Coverage bias in the HadCRUT4 temperature series and its impact on recent temperature trends. Quarterly Journal of the Royal Meteorological Society, 140(683), 1935–1944.](https://doi.org/10.1002/qj.2297)

<a id="13"><sup>13</sup></a>
[Morice, C. P., Kennedy, J. J., Rayner, N. A., Winn, J. P., Hogan, E., Killick, R. E., … Simpson, I. R. (2020). An updated assessment of near‐surface temperature change from 1850: the HadCRUT5 dataset. Journal of Geophysical Research: Atmospheres.](https://doi.org/10.1029/2019JD032361)

<a id="14"><sup>14</sup></a>
[Tokarska, K. B., Schleussner, C.-F., Rogelj, J., Stolpe, M. B., Matthews, H. D., Pfleiderer, P., & Gillett, N. P. (2019). Recommended temperature metrics for carbon budget estimates, model evaluation and climate policy. Nature Geoscience, 12(12), 964–971.](https://doi.org/10.1038/s41561-019-0493-5)

<a id="15"><sup>15</sup></a>
[IPCC. (2018). Global warming of 1.5°C. An IPCC Special Report on the impacts of global warming of 1.5°C above pre-industrial levels and related global greenhouse gas emission pathways, in the context of strengthening the global response to the threat of climate change, (V. Masson-Delmotte, P. Zhai, H. O. Pörtner, D. Roberts, J. Skea, P. R. Shukla, … T. Waterfield, eds.).](https://www.ipcc.ch/sr15/)