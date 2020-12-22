---
layout: post
title: Climate modelling in Excel...
---
You can download the implementation of the FaIRv2.0 model in Excel described in this post [here]({{ site.url }}/download/FaIRv2.0.0-alpha.zip "NOTE: I've only tested this workbook on my virtual Windows machine. Though it has worked for several others on both macOS and Windows machines, it has also been known to break, for reasons that are unclear to me... debugging Excel is a pain.").

This is a brief post that introduces an Excel version of the FaIRv2.0 model[<sup>1</sup>](#1) that I've created. I go through some of the key features, suggest some experiments that you can do, and provide recipes for how to carry out a few different types of analyses with the model.<!--more--> Much of the information here is also available in the README file contained alongside the workbook in the `.zip` file. Something to make clear right from the start is that while I have tried to ensure everything is correct, including testing the model in as many configurations I can think of, there could still be mistakes. For this reason, for scientific or policy-relevant research, I'd strongly recommend using the "official" [python model version](https://github.com/OMS-NetZero/FAIR) where possible. 

## Introduction to FaIRv2.0 in Excel

There are several resources available with more information on the model itself, including the paper pre-print reference at the bottom, or in [this other post]({{ site.baseurl }}/2020/12/17/How-long-left.html). For this reason, I'm not going to go into the model specifics here. However, it's worth mentioning that the Excel version of the model here is the *full* FaIRv2.0.0 model. It can replicate any experiment possible with the python version (though large ensemble experiments could be considered impossible practically due to the time they would take to run...). It includes all the forcing agents included in the python version: CO\\(_2\\), other GHGs, aerosols etc. From here onwards, I'll refer to the FaIRv2.0.0 Excel version simply as the "model".

### Model Structure

The model workbook is divided into four categories of worksheet: <span style="color:rgb(174,170,170)">output</span>, <span style="color:rgb(255,230,153)">model setup</span>, <span style="color:rgb(198,224,180)">model input</span> and <span style="color:rgb(180,198,231)">calculation</span>. These do more or less exactly what you'd expect... There are also a number of hidden sheets containing underlying data, but these sheets are what you need to actually run the model. 

## Model setup

##### Configuration

This is where you set-up how you want the model to be run:
- **Runmode**: choose whether you want the model to run in concentration-driven or emission-driven mode. A mixed mode is not possible.
- **Baseline scenario**: select the desired baseline scenario (data from [<sup>2,</sup>](#2)[<sup>3</sup>](#3)). Any user defined input emissions or concentrations will be added to the top of the baseline selected here. The "None" scenario is defined as zero emissions, or constant pre-industrial concentrations depending on the selected runmode.
- **Selected agents**: choose what GHGs / aerosol emissions you want to be included in the model run. "1" = included in run, "0" = not included in run. The worksheets will dynamically adjust to the agents selected here.
- **Selected indirect forcings**: choose which indirect forcings you want to include.
- **External forcings**: choose any external forcings to provide exogenously. For example, if you don't want the model to compute CO\\(_2\\) forcing internally, you can deselect it in the "Selected agents" option, and select it here. Note that these external forcings only work for scenarios where they exist - for the idealised esm/1pctCO2/abrupt-4xCO2 experiments selecting external forcings will break the model.

##### Parameters

- **gas_params**: set the gas cycle / forcing parameters for all species here. After changing parameters, to reset the table back to the defaults, select and cell in the table, and then navigate to "Query" &#8594; "Refresh" in the menu bar.
- **response_params**: set the parameters for the thermal response & SESLR model here. A thermal response parameter calculation tool is provided to compute response parameters for user-specified ECS / TCR combinations, based on mean inferred CMIP6 response timescales.

##### Specifying input emissions or concentrations

- **emms_in**: here you can specify emissions to be added *on top* of the selected baseline scenario emissions. It is only possible to input user-specified emissions for agents selected in the model configuration.
- **conc_in**: here you can specify concentrations to be added *on top* of the selected baseline scenario concentrations. It is only possible to input user-specified concentrations for agents selected in the model configuration.
- **forc_in**: here you can specify additional external forcing to be included *on top* of any selected external forcings for the selected baseline scenario.

##### Calculation tabs
- **C**: where concentrations are computed (if emissions-driven) or where user-inputs are added to the selected baseline scenario (if concentration-driven).
- **ERF**: where effective radiative forcing is computed from concentrations & externally prescribed forcings.
- **T**: where the surface temperature response (relative to the start time) is computed from ERF.
- **THC**: where total earth-system heat-content is computed based on the 0D energy-balance model.
- **SLR**: where the sea-level rise (relative to the start time) is computed. Semi-empirical sea-level rise model based on Kopp et al[<sup>4</sup>](#4).

## Model output

The calculation tabs contain the "raw" model output. If you wish to do further data analysis in Excel or another programme, copy the data directly from these tabs as desired. For instance, if you want to compute the difference in temperature attributable to a specific emission perturbation, you'll need to run the baseline, save the output, then run again with the perturbation, save the output, and finally difference the two outputs. However, the "reporting" tab contains a variety of key model outputs and charts that users may find sufficient. Some notes on the options provided are below:

##### Output options
- agent to chart: choose any of the agents selected to display their emissions / cumulative emissions / concentrations / ERF in the charts.
- baseline start & baseline end: choose the start / end period for the surface temperature response chart.
- chart year start & chart year end: choose the start / end times for the timeseries displayed on the charts. Sometimes Excel makes weird choices over axes limits, so on changing these you may need to manually set the chart axes ranges.
- observational temperature dataset: choose one of several observational surface temperature datasets[<sup>5,</sup>](#5)[<sup>6,</sup>](#6)[<sup>7,</sup>](#7)[<sup>8,</sup>](#8)[<sup>9</sup>](#9).
- observational sea level rise dataset: choose one of two observational sea level rise datasets[<sup>4,</sup>](#4)[<sup>10</sup>](#10).

##### Model diagnostics
Most of these are self-explanatory. A few definitions used:
- "end of century" : 2081-2100 mean
- warming rate over last two decades : difference between 2010-2019 and 2000-2009 mean modelled temperature

## Some experiment "recipes"

Probably the best way to get familiar with the model is to actually use it yourself - so to end this post I'm just providing some "recipes" for how to carry out various different types of experiment.

##### Standard emissions-driven SSP2-45 experiment (all forcings included)
- model config
    - Runmode : 0
    - Baseline scenario : ssp245
    - Selected agents : all &#8594; 1
    - Selected indirect forcings : all &#8594; 1
    - External forcings : `Anthropogenic|Albedo change` & `Natural` &#8594; 1, all else &#8594; 0
- gas_params : default
- response_params : default
- emms_in, concs_in, forc_in : all cells &#8594; empty

##### Emissions-driven SSP2-45 experiment with 100 GtC CO\\(_2\\) perturbation in 2015 (all forcings included)
as above with
- emms_in : `2015 \ carbon_dioxide` &#8594; 100

##### abrupt-4xCO2 experiment
- model config
    - Runmode : 1
    - Baseline scenario : abrupt-4xCO2
    - Selected agents : all &#8594; 0 except `carbon_dioxide`
    - Selected indirect forcings : all &#8594; 0
    - External forcings : all &#8594; 0
- gas_params : default except `PI_conc \ carbon_dioxide` &#8594; 284
- response_params : default
- emms_in, concs_in, forc_in : all cells &#8594; empty

##### 1pctCO2-cdr experiment
- model config
    - Runmode : 1
    - Baseline scenario : None
    - Selected agents : all &#8594; 0 except `carbon_dioxide`
    - Selected indirect forcings : all &#8594; 0
    - External forcings : all &#8594; 0
- gas_params : default except `PI_conc \ carbon_dioxide` &#8594; 284
- response_params : default
- emms_in, forc_in : all cells &#8594; empty
- concs_in : 
    - `1850-1989 \ carbon_dioxide` &#8594; `284*(1.01^(@Time_index-1850)-1)`
    - `1990-2130 \ carbon_dioxide` &#8594; `284*(1.01^(140+1990-@Time_index)-1)`

## Thoughts
That's that for this short intro to FaIRv2.0 in Excel. Although not nearly as flexible or powerful as the python version, for carrying out simple experiments quickly, I still rely on it quite a bit! It can also be used as a teaching tool to explain many key concepts in climate science, such as: equilibrium climate sensitivity, transient climate response, realised warming fraction, transient climate response to cumulative carbon emissions, global warming potentials etc...

Feel free to email me / comment if you have any questions or notice any mistakes or issues in the model!

### References
<a id="1"><sup>1</sup></a>
[Leach, N. J., Jenkins, S., Nicholls, Z., Smith, C. J., Lynch, J., Cain, M., … Allen, M. R. (2020). FaIRv2.0.0: a generalised impulse-response model for climate uncertainty and future scenario exploration. Geosci. Model Dev. Discuss., 2020, 1–48.](https://doi.org/10.5194/gmd-2020-390)

<a id="2"><sup>2</sup></a>
[Nicholls, Z. R. J., Meinshausen, M., Lewis, J., Gieseke, R., Dommenget, D., Dorheim, K., … Xie, Z. (2020). Reduced complexity model intercomparison project phase 1: Protocol, results and initial observations. Geoscientific Model Development Discussions, 1–33.](https://doi.org/10.5194/gmd-2019-375)

<a id="3"><sup>3</sup></a>
[Friedlingstein, P., Jones, M. W., O’Sullivan, M., Andrew, R. M., Hauck, J., Peters, G. P., … Zaehle, S. (2019). Global carbon budget 2019. Earth System Science Data, 11(4), 1783–1838.](https://doi.org/10.5194/essd-11-1783-2019)

<a id="4"><sup>4</sup></a>
[Kopp, R. E., Kemp, A. C., Bittermann, K., Horton, B. P., Donnelly, J. P., Gehrels, W. R., … Rahmstorf, S. (2016). Temperature-driven global sea-level variability in the Common Era. Proceedings of the National Academy of Sciences, 113(11), E1434 LP-E1441.](https://doi.org/10.1073/pnas.1517056113)

<a id="5"><sup>5</sup></a>
[Morice, C. P., Kennedy, J. J., Rayner, N. A., Jones, P. D., P., M. C., J., K. J., … D., J. P. (2011). Quantifying uncertainties in global and regional temperature change using an ensemble of observational estimates: The HadCRUT4 data set. Journal of Geophysical Research: Atmospheres, 117(D8).](https://doi.org/10.1029/2011JD017187)

<a id="6"><sup>6</sup></a>
[Vose, R. S., Arndt, D., Banzon, V. F., Easterling, D. R., Gleason, B., Huang, B., … Wuertz, D. B. (2012). NOAA’s Merged Land–Ocean Surface Temperature Analysis. Bulletin of the American Meteorological Society, 93(11), 1677–1685.](https://doi.org/10.1175/BAMS-D-11-00241.1)

<a id="7"><sup>7</sup></a>
[Lenssen, N. J. L., Schmidt, G. A., Hansen, J. E., Menne, M. J., Persin, A., Ruedy, R., & Zyss, D. (2019). Improvements in the uncertainty model in the Goddard Institute for Space Studies Surface Temperature (GISTEMP) analysis. Journal of Geophysical Research: Atmospheres, 2018JD029522.](https://doi.org/10.1029/2018JD029522)

<a id="8"><sup>8</sup></a>
[Rohde, R. A., & Hausfather, Z. (2020). The Berkeley Earth Land/Ocean Temperature Record. Earth System Science Data, 12(4), 3469–3479.](https://doi.org/10.5194/essd-12-3469-2020)

<a id="9"><sup>9</sup></a>
[Cowtan, K., & Way, R. G. (2014). Coverage bias in the HadCRUT4 temperature series and its impact on recent temperature trends. Quarterly Journal of the Royal Meteorological Society, 140(683), 1935–1944.](https://doi.org/10.1002/qj.2297)

<a id="10"><sup>10</sup></a>
[Frederikse, T., Landerer, F., Caron, L., Adhikari, S., Parkes, D., Humphrey, V. W., … Wu, Y.-H. (2020). The causes of sea-level rise since 1900. Nature, 584(7821), 393–397.](https://doi.org/10.1038/s41586-020-2591-3)