---
layout: post
title: Historical contributions to warming&#58; what, who, where?
---

Reasonably recently, I noticed a tweet (it's always twitter...) asking for an estimate of the contribution of agriculture to global warming. There were a few responses, but they had quite a wide spread and in general seemed inconclusive. I decided, quite some time after seeing the tweet, to see if I could give my own estimate of this using the probabilistic simple climate model ensemble I used in my previous post. As is the way with these "straightforward" projects, it naturally turned into something a bit more comprehensive than intended. This post is the result - my attempt to estimate what (specific forcing drivers), who (sectors) and where (countries) is causing anthropogenic global warming. <!--more-->

##### Three important caveats to start
Before I start, I think it's important to mention a few things to bear in mind when reading this post or drawing conclusions from it. Although I have attempted a "serious" analysis here, it does just represent one estimate that is dependent on the methodologies I've used. I'll try to note any assumptions etc. as I go along, but there are a few key points to emphasize right from the off:
- This is <b>NOT</b> in any way peer-reviewed, or even checked by anyone else (yet). It is analysis that I have carried out myself, and as such, could (and probably does) contain mistakes in any assumptions I make or computations I carry out. If you have any suggestions, corrections or comments, please let me know by commenting below or messaging me so I can make relevant changes!
- This analysis is carried out using a parameter ensemble within a <i>single</i> simple model. The model parameter ensemble is selected to match assessed ranges of radiative forcing from the 5th Assessment Report[<sup>1</sup>](#1), and constrained to be consistent with the current level and rate of global warming (including the key sources of uncertainty); but it may contain structural deficiencies that impact the results. It is likely that another simple climate model would produce different results -- though this being said I would expect them to be largely consistent. 
- It is possible (likely) that our understanding of some of the drivers of radiative forcing included in the model will be updated in the future, which may render some of the parameter selection and associated results presented here incorrect. This comment is most relevant to aerosol forcing, and some of the more minor forcing drivers which currently have large associated uncertainties such as stratospheric ozone.

### The aim of this analysis
Within this post, I'm going to attempt to quantitatively estimate how: a) different forcing agents; b) different sectors; & c) different countries have contributed to the current level of global warming. It's meant partly to inform discussions of what the key components of anthropogenic global warming are, partly as a bit of documentation for the forcings within FaIR, but also as an example of the type of analyses that are possible with FaIR. I hope that the results are interesting and useful.

Throughout this post, I'll discuss the methods fully, but the figures only a little bit in the text, largely leaving it up to you to explore them properly - they are fully interactive. If any of them aren't clear enough or are confusing, please let me know with a comment or message!

## Analysis and results

##### Broad method
Once again, I'll be using the probabilistic FaIR ensemble[<sup>2</sup>](#2) I used in [a previous post]({% post_url 2020-12-17-How-long-left? %}). I'm going to be using a detection-attribution style experiment to estimate the contribution of each component. This means:
- run a baseline simulation with all components included;
- re-run, but leave out a specific component;
- subtract the perturbed run from the baseline, the result is the attributed impact of that particular component.

I do this (rather than just running each component through by itself) as FaIR is weakly non-linear. The only non-linear components of FaIR are the carbon- and methane-cycles due to their temperature & uptake / concentration feedbacks. Although I don't think it would make a huge difference (you can check this eg. by summing anthropogenic forcing components and checking against the total), I expect it would make some difference. Hence all the results are framed as "what is the impact if a particular component didn't exist?" rather than "what is the impact of a particular component in isolation?". The question of additivity in FaIR does need some more exploring, something I'm aiming to do when I revise the paper as it was also noted in a seriously helpful review from Glen Peters!

##### Datasets used
I make use of five main datasets during this analysis:

Dataset | used for 
---|---
RCMIP protocol emissions[<sup>3</sup>](#3)| baseline emission scenario excluding CO\\(_2\\). SSP2-45 from 2015 onwards.
Global carbon project[<sup>4</sup>](#4)| baseline emission scenario for CO\\(_2\\).
PRIMAP-histTP v2.1[<sup>5,</sup>](#5)[<sup>6</sup>](#6)| Proportion of CO\\(_2\\), CH\\(_4\\), N\\(_2\\)O, HFCs, PFCs, NF\\(_3\\), & SF\\(_6\\) emissions per sector or country.
CEDS v_2020_09_11[<sup>7,</sup>](#7)[<sup>8</sup>](#8)| Proportion of aerosol precursor emissions per sector or country.
UNEP Ozone[<sup>9</sup>](#9)| Proportion of ODS emissions per sector or country.

### Baseline run
First, it's important to demonstrate that FaIR is able to reasonably reproduce observed global warming to date (otherwise there would be no reason to trust any attributed impacts...) Below is the FaIR baseline run I use throughout this analysis, compared to the recent HadCRUT5[<sup>10</sup>](#10) observational global temperature dataset. It appears to do a pretty reasonable job. Perhaps slightly too sensitive to volcanic eruptions, but in general pretty decent. This is unsurprising since this parameter set is more or less tuned to reproduce the current level & rate of warming, as described fully in [a previous post]({% post_url 2020-12-17-How-long-left? %}), but it's still good to check! <sub><sup>You may notice that I've decided to adopt the more usual 1850-1900 reference for this post, which makes very little difference compared to the 1861-1880 reference I've tended to use previously. I tend to use the 1861-1880 one simply because it's less influenced by volcanic eruptions, but in reality it doesn't affect analysis like this significantly so I'm using the conventional pre-industrial reference period here.</sup></sub>

<div class='figure-container' >
{% include attr_post_FaIR_baseline.html %}
</div>

### What
On with the attribution - first up is the <b>what</b>: how much are different types of emission contributing to global warming? There's been some neat explainers of this elsewhere, such as [this Bloomberg article](https://www.bloomberg.com/graphics/2015-whats-warming-the-world/). I'm hoping to provide a little more of a dive than they went into. 

This is probably the easiest part of the analysis from a methodological / data wrangling perspective as all it requires is setting appropriate forcing parameters in FaIR to zero, thereby removing components as desired from the effective radiative forcing the model uses to compute global temperature anomalies. I use the following forcing categories as my components:

Forcing component | description
--- | ---
CO\\(_2\\) | forcing due to increases in carbon dioxide concentration arising from anthropogenic emissions
CH\\(_4\\) | forcing due to increases in methane concentration arising from anthropogenic emissions
tropospheric O\\(_3\\)| forcing due to increases in tropospheric ozone concentration arising from chemical breakdown of CH\\(_4\\), CO, NMVOC by NOx
Montreal gases| forcing due to increases in concentration of CFCs, HCFCs, Halons, CH\\(_2\\)Cl\\(_2\\), CH\\(_3\\)CCl\\(_3\\), CHCl\\(_3\\), CCl\\(_4\\), CH\\(_3\\)Cl, CH\\(_3\\)Br
N\\(_2\\)O | forcing due to increases in nitrous oxide concentration arising from anthropogenic emissions
black carbon on snow| forcing due to albedo changes from black carbon darkening snow & ice
stratospheric H\\(_2\\))| forcing due to increase concentration of stratospheric water vapour arising from CH\\(_4\\) oxidation
contrails| forcing due to longwave absorption & shortwave reflection from condensation clouds formed behind aircraft
f-gases| forcing due to increases in concentration of PFCs, HFCs, NF\\(_3\\), SF\\(_6\\), SO\\(_2\\)F\\(_2\\), CF\\(_4\\)
stratospheric O\\(_3\\)| forcing due to depletion of stratospheric ozone
albedo change| forcing due to albedo changes arising from changes to land-use cover
aerosols| forcing due to emissions of aerosol precursors
anthropogenic| the sum of all categories above
natural| forcing due to emissions from volcanic eruptions & the solar cycle

To start off, let's compare the anthropogenic and natural components of warming (Bloomberg-style):

<div class='figure-container' >
{% include attr_post_FaIR_ant-vs-nat.html %}
</div>

We can see that at the present day, the anthropogenic influence on the global warming signal dwarfs any natural influence. Note that the sum of these two is approximately equal to the baseline simulation above (not exactly due to the non-linearities present in FaIR, but very nearly). 

Now let's split up the anthropogenic contribution into the categories given above (to select a particular category, double-click the legend entry. You can compare two particular categories in this way):

<div class='figure-container' >
{% include attr_post_FaIR_rf-timeseries.html %}
</div>

<b>You can find a full-page waterfall chart version of the boxplot [here]({{ site.base_url }}{% link _pages/components-of-global-warming.md %}).</b>

There are a couple of things I think it's worth noting here:
- The (very uncertain) contribution of aerosols is to currently mask about half a degree of warming.
- Carbon dixoide is the dominant component of global warming, at over twice the impact of the next largest (positive) component, methane.

However, possibly more relevant to current discussions around mitigation are not what the main components to historical warming are, but what the largest contributors to <i>current</i> warming are. By current warming, I'm specifically talking about the current rate of global warming, which is just as crucial as the current level for climate targets[<sup>11</sup>](#11). This is because the faster the rate of warming, the sooner we will reach such climate targets (given no mitigation). Hence for mitigation, a component that is warming very quickly is more important than one that has contributed more to historical warming but is no longer warming quickly. To calculate the current rate for each component throughout this post, I use a simple linear regression over the most recent decade (2010-2019):

<div class='figure-container' >
{% include attr_post_FaIR_rf-2010-19.html %}
</div>

The anthropogenic box is essentially the sum of all the other categories, excluding the natural one. This makes the contribution of CO\\(_2\\) even more apparent - it is contributing over 3x more to the rate than the next largest component. I had expected the aerosol contribution to be slightly larger before carrying out the computation, but I reckon if I continued along an SSP2-45 pathway past 2019, this would grow significantly into the future.

So that's the <b>what</b>. Now onto... 

### Who
Next, we'll look into <b>who</b> is responsible for global warming. By this, I mean how much have different key sectors contributed to current global warming. I use the sectors defined in the 2006 IPCC guidelines for national greenhouse gas inventories:

Sector | description
--- | ---
1 | Energy
2| Industrial processes and product use
3|Agriculture, forestry and other land use
4|Waste
5|Other

For a more complete description of these sectors and the types of emission contained within each, see [here](https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/0_Overview/V0_1_Overview.pdf).

The methodology here is a bit trickier, as rather than simply changing parameters, I need to change the input emissions to the model. Fortunately, both CEDS & PRIMAP-hist disaggregate their emissions data by sector. Rather than directly inputting these data into the model (which would alter the baseline) I instead calculate the proportion of emissions caused by a particular sector (per emission type per year), and remove these proportions from the baseline emission timeseries. Since PRIMAP-hist covers the period 1850-2017, I extrapolate back and forward by assuming the same proportion as 1850 and 2017 respectively. The UNEP data I use doesn't disaggregate by sector, but I assume all ODS emissions are attributed to sector 2 (their replacements, HFCs, are all put into sector 2 in PRIMAP hence this assumption). All CO\\(_2\\) emissions from LULUCF are attributed to sector 3, as is albedo changes due to land-use change. All emissions due to NO\\(_x\\) from aviation are attributed to sector 1. 

One assumption made in both this sector, and in the country-based analyses, is that when the emissions data is given for groups of emissions (eg. PRIMAP gives emissions of PFCs as an aggregated group), the proportion of emissions for all the emissions types within that group is equal to the proportion of emissions for that group (ie. the proportion of C\\(_2\\)F\\(_6\\) emissions for a particular sector/country is the same as the proportion of PFC emissions for that particular sector/country within the PRIMAP data).

This is the part of this post where I actually answer the question that brought me here: how much warming is the agricultural sector responsible for? The answer is more than I had expected. I find that about one third of the total anthropogenic contribution to global warming (since 1850-1900) is due to the agricultural sector. The historical contribution of agriculture to global warming was only surpassed by the energy sector in 2009! In some ways, this makes sense, since CO\\(_2\\) emissions from LULUCF have been happening on a large scale for a much longer period of time, but it still surprised me somewhat. The contributions of the other three sectors are fairly minor in comparison.

<div class='figure-container' >
{% include attr_post_FaIR_sector-timeseries.html %}
</div>

 Although the historical warming due to the energy sector isn't so much larger than agriculture, it's contribution to the rate is significantly higher than both agriculture and all the other sectors. We can see that although agriculture has contributed a lot to past warming, it's contribution to current warming is far less than the energy sector with an estimated rate of warming that is ~5x lower. The industrial process sector's contribution to the rate is comparable to agriculture's.

<div class='figure-container' >
{% include attr_post_FaIR_sector-2010-19.html %}
</div>

Now to allow for a bit of a deeper dive (though I won't go into any detail in the text), I've also disaggregated each sector into ensemble mean radiative forcing components (the same categories as used above). This allows you to explore which forcing categories contribute most to which sectors, and also vice versa:

<div class='figure-container' >
{% include attr_post_FaIR_sector-RFmean-timeseries.html %}
</div>

One example of something that this figure illustrates is why it appears as though the energy sector contributed virtually nothing to global warming until 1980: all of the radiative forcing due to emissions of greenhouse gases were almost exactly cancelled out by forcing from aerosol emissions.

Onto the final section:

### Where
In this section, I attempt to estimate the quantity of global warming attributable to individual countries. I do this for the 188 countries that are common to both the PRIMAP and CEDS datasets. This disaggregation is probably the least robust and I've had to make some assumptions when it comes to the UNEP data (which unlike the fantastic CEDS / PRIMAP datasets is very incomplete). However, it does produce some interesting results...

I don't attribute LULUCF CO\\(_2\\) emissions to countries in this analysis. These aren't included in the PRIMAP-hist dataset, and although there are some sources of these types of emission, they are so incomplete that any attempts I made seemed incredibly brittle and heavily dependent on interpolation etc. As such the attributed warming here is the <b>warming due to all emissions excluding LULUCF CO\\(_2\\)</b>. Another key feature of all these datasets are that (as per UNFCCC accounting), they are <b>territory-based</b> (or production-based) rather than consumption-based emissions.

This attribution was definitely the trickiest to sort out in terms of the emissions. Once again, I apply the country-attributed proportions from CEDS, PRIMAP and the UNEP data to my baseline emission input. However, along the way I make several assumptions, so let's get those out of the way first. I do this for all UN members states / UN observers as per [wikipedia](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes). Territories with the same sovereignty as per that table are combined under the alpha-3 code of the sovereign territory. Country proportions for NOx emissions from aviation (which contribute to contrail forcing) are assumed to be equal to that of total NOx emissions. The UNEP data gives aggregated data for the EU28 group, so I disaggregate this into the component countries, weighting each by its population. The UNEP data begins in 1986 and is very incomplete. To compensate for this, for each emission category within the UNEP data, I assume that each countries emissions are proportional to its 1986-1995 UNEP data mean multiplied by its PRIMAP sector 2 CO\\(_2\\) emissions timeseries (normalised by the 1986-1995 mean CO\\(_2\\) emissions). In other words, for the UNEP data emission types, I assume that the country emissions follow the shape of the PRIMAP-hist sector 2 CO\\(_2\\) country emissions, set relative to the 1986-1995 UNEP data country mean. For the remaining 4 emission types not included in any of the datasets (CH\\(_2\\)Cl\\(_2\\), CHCl\\(_3\\), SO\\(_2\\)F\\(_2\\) and CH\\(_3\\)Cl), I assume that the country proportions are the same as the sector 2 CO\\(_2\\) emission coutry proportions. These may seem like some quite major assumptions - because they are - but it's also worth remembering that the emissions of these gases covered by the UNEP dataset are only ~12 % of all anthropogenic warming so they are unlikely to throw the analysis completely off. Essentially, while I would expect that these assumptions don't have a major impact on the overall warming results, I'd take the country-specific radiative forcing due to Montreal gases and contrails in the final chart with a pinch of salt.

Right, now that that's over, on to the results! The first plot is the mean warming timeseries per country. It's very messy when all are shown, but you can select a particular country using the dropdown in the top left. However, though most of the country lines are all on top of each other, there are some standout ones - the USA line is well above the rest of the pack from the 50s onwards; and into the 2000s you start to see the China line shoot upwards. The countries in all the following plots are coloured by their contribution to historical warming in 2019 (red = larger contribution).

<div class='figure-container' >
{% include attr_post_FaIR_countries-timeseries.html %}
</div>

Next, onto box plots of the 2010-2019 mean warming attributed to each country. This tells a similar story to the timeseries (though perhaps is a little neater): historical warming is dominated by the USA, which lies over 3x higher than any other country, with China leading the rest of the pack. Something to note is that the warming attributed to China or India is significantly less certain than for the several other countries with comparable central estimates. We'll explore this more later on...

<div class='figure-container' >
{% include attr_post_FaIR_countries-2010-19.html %}
</div>

For the countries contributions to <i>current</i> warming (ie. their contribution to the present-day rate of warming), I've not simply taken a linear regression over the timeseries above. Much more so than for the sectoral estimates, the country estimates are highly affected by large swings in aerosol emissions or the emissions of short-lived climate pollutants (on ~decadal timescales). However, in terms of the long term goal of temperature stabilisation, although how the emissions of these short-lived species evolve will be important, the key to this goal is how the emissions of carbon dioxide evolve &#8594; to achieve this we need get net CO\\(_2\\) emissions to zero. I therefore use the (I would argue) more relevant quantity of the country contributions to the rate of warming due to their carbon dioxide emissions alone. To do this I re-run the country simulations, but this time I only remove the proportion of fossil carbon dioxide emissions attributed to each country, rather than removing the proportions for all emission types. 

<div class='figure-container' >
{% include attr_post_FaIR_countries-rate-2010-19.html %}
</div>

In this figure, the top two have switched places - China is contributing over twice that of the USA to the current rate of warming. This echoes the picture seen in the mean timeseries plot above. Here we also start to see some new countries entering the top 20: most notably Saudi Arabia and Turkey. One thing that I may as well mention is that is would be possible to more or less re-create this ranking just from the emission data: the rate of global warming is very closely related to the annual CO\\(_2\\) emission rate[<sup>11</sup>](#11) due to the apparent linear relationship between cumulative carbon emissions and global temperature response encapsulated by the Transient Climate response to cumulative Carbon Emissions[<sup>12</sup>](#12). As such, if I just wanted to estimate the ranking, I'd simply take the PRIMAP-hist data and rank the 2010-19 mean CO\\(_2\\) country emission rates. Note here that the y-axis is now measuring mK / decade. 

Although I'm attempting to steer clear of any of the politics surrounding mitigation (it's certainly not my area of expertise), I still thought an interesting plot would be to take the plot above - the per country contributions to the current rate of global warming - and normalise it by population (specifically mean population over 2010-19 from [UN DESA](https://population.un.org/wpp/Download/Files/1_Indicators%20(Standard)/EXCEL_FILES/1_Population/WPP2019_POP_F01_1_TOTAL_POPULATION_BOTH_SEXES.xlsx)). This gives my best estimate of how much the average person in each country is currently contributing to global warming through fossil CO\\(_2\\) emissions (note the y axis is now shown in mK / decade / million people):

<div class='figure-container' >
{% include attr_post_FaIR_countries-rate-pc-2010-19.html %}
</div>

Now we see some different territories enter the top ranking spots. By this measure, 6 of the top 10 per capita contributors to current global warming are regions usually considered within the Middle East. Ths is possibly unsurprising, since the economies of these countries have traditionally been heavily linked to production of oil. The top country in this measure, Trinidad and Togabo, was something of a surprise (for me, at least). However, when looking a little further oil and gas accounts for 40 % of its GDP and 80 % of its exports according to its [UNFCCC iNDC](https://www4.unfccc.int/sites/ndcstaging/PublishedDocuments/Trinidad%20and%20Tobago%20First/Trinidad%20and%20Tobago%20Final%20INDC.pdf), so perhaps less surprising given this fact. Coming in at #10 on the ranking is a by now familiar country: the USA. While accounting for population does move the USA down from the very top, it doesn't by much... 

One additional detail to this plot is the "global average" band sitting near the bottom of the chart. This is the global average per capita contribution to the rate of warming likely range (17-83 %), computed by summing all the country warming timeseries, linearly regressing against this sum over 2010-19, and then dividing by the mean global population 2010-19. This provides some nice perspective for the countries right at the top of the ranking...

The very final figure in this post is the "deeper dive" into what types of emissions are contributing to the warming attributed to each country. It's identical to the sectoral forcing disaggregation (but for countries rather than sectors). With this, we can see clearly why the warming contributions from China or India are much less certain than for others at similar levels: they have much larger aerosol emissions than those other countries, and since uncertainty in aerosol forcing dominates the uncertainty in total forcing, these larger aerosol emissions project strongly onto the uncertainty in attributed warming. 

<div class='figure-container' >
{% include attr_post_FaIR_countries-RFmean-timeseries.html %}
</div>

### Notes, thoughts and follow-ups

Not much more to say except that I hope this was an interesting piece of analysis, and a good example of the type of stuff that FaIR makes possible. The people that have done the real work towards this are those behind the fantastic PRIMAP-hist and CEDS emissions datasets, without these the vast majority of this analysis wouldn't have been possible. Essentially all I did was run their data through a model...

I was kind of interested in seeing if I could compute warming contributions for slightly more disaggregated sectors (eg. from transport). However, the base datasets I've used don't quite go into that detail and I can't really spend any more time on this, so this is as far as I'm going to go for now. Maybe in the future.

I'm hoping to create binder notebooks for these posts in the future to make the stuff I'm doing a little more transparent and accessible; I just need to get round to doing it...

It also seems that the plotly figures I'm currently using to display results don't work super well on mobile devices - so I'll see if I can improve this in some way.

If I've made any mistakes in the science or any of this doesn't make sense, please let me know and I'll do my best to correct or clarify the post.

### References

<a id="1"><sup>1</sup></a>
[Myhre, G., Shindell, D., Bréon, F.-M., Collins, W., Fuglestvedt, J., Huang, J., … Zhang, H. (2013). Anthropogenic and Natural Radiative Forcing. In T. F. Stocker, D. Qin, G.-K. Plattner, M. Tignor, S. K. Allen, J. Boschung, … P. M. Midgley (Eds.), Climate Change 2013: The Physical Science Basis. Contribution of Working Group I to the Fifth Assessment Report of the Intergovernmental Panel on Climate Change (pp. 659–740).](https://doi.org/10.1017/CBO9781107415324.018)

<a id="2"><sup>2</sup></a>
[Leach, N. J., Jenkins, S., Nicholls, Z., Smith, C. J., Lynch, J., Cain, M., … Allen, M. R. (2020). FaIRv2.0.0: a generalised impulse-response model for climate uncertainty and future scenario exploration. Geosci. Model Dev. Discuss., 2020, 1–48.](https://doi.org/10.5194/gmd-2020-390)

<a id="3"><sup>3</sup></a>
[Nicholls, Z. R. J., Meinshausen, M., Lewis, J., Gieseke, R., Dommenget, D., Dorheim, K., … Xie, Z. (2020). Reduced complexity model intercomparison project phase 1: Protocol, results and initial observations. Geoscientific Model Development Discussions, 1–33.](https://doi.org/10.5194/gmd-2019-375)

<a id="4"><sup>4</sup></a>
[Friedlingstein, P., O’Sullivan, M., Jones, M. W., Andrew, R. M., Hauck, J., Olsen, A., … Zaehle, S. (2020). Global Carbon Budget 2020. Earth System Science Data, 12(4), 3269–3340.](https://doi.org/10.5194/essd-12-3269-2020)

<a id="5"><sup>5</sup></a>
[Gütschow, Johannes; Jeffery, Louise; Gieseke, Robert; Günther, Annika (2019): The PRIMAP-hist national historical emissions time series (1850-2017). V. 2.1. GFZ Data Services.](https://doi.org/10.5880/PIK.2019.018)

<a id="6"><sup>6</sup></a>
[Gütschow, J., Jeffery, M. L., Gieseke, R., Gebel, R., Stevens, D., Krapp, M., & Rocha, M. (2016). The PRIMAP-hist national historical emissions time series. Earth System Science Data, 8(2), 571–603.](doi:10.5194/essd-8-571-2016)

<a id="7"><sup>7</sup></a>
Hoesly, R. M., Smith, S. J., Feng, L., Klimont, Z., Janssens-Maenhout, G., Pitkanen, T., … Zhang, Q. (2018). Historical (1750–2014) anthropogenic emissions of reactive gases and aerosols from the Community Emissions Data System (CEDS). Geoscientific Model Development, 11(1), 369–408. (https://doi.org/10.5194/gmd-11-369-2018)

<a id="8"><sup>8</sup></a>
[O'Rourke, Patrick R, Smith, Steven J, McDuffie, Erin E, Klimont, Zbigniew, Crippa, Monica, Mott, Andrea, … Hoesly, Rachel M. (2020). CEDS v_2020_09_11 Pre-Release Emission Data (Version v_2020_09_11) [Data set]. Zenodo.](http://doi.org/10.5281/zenodo.4025316)

<a id="9"><sup>9</sup></a>
[UN Environment Programme, Ozone Secretariat](https://ozone.unep.org/countries/data)

<a id="10"><sup>10</sup></a>
[Morice, C. P., Kennedy, J. J., Rayner, N. A., Winn, J. P., Hogan, E., Killick, R. E., … Simpson, I. R. (2020). An updated assessment of near‐surface temperature change from 1850: the HadCRUT5 dataset. Journal of Geophysical Research: Atmospheres.](https://doi.org/10.1029/2019JD032361)

<a id="11"><sup>11</sup></a>
[Leach, N. J., Millar, R. J., Haustein, K., Jenkins, S., Graham, E., & Allen, M. R. (2018). Current level and rate of warming determine emissions budgets under ambitious mitigation. Nature Geoscience, 11(8), 574–579.](https://doi.org/10.1038/s41561-018-0156-y)

<a id="12"><sup>12</sup></a>
[Allen, M. R., Frame, D. J., Huntingford, C., Jones, C. D., Lowe, J. A., Meinshausen, M., & Meinshausen, N. (2009). Warming caused by cumulative carbon emissions towards the trillionth tonne. Nature, 458(7242), 1163–1166.](https://doi.org/10.1038/nature08019)