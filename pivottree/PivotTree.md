---
type: presentation
marp: true
paginate: true
footer: ''
topic: 
---

<!-- Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">

<!-- Semantic UI -->
<script
        src="https://code.jquery.com/jquery-3.1.1.min.js"
        integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
        crossorigin="anonymous"></script>
<script
    src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/libs/semanticui/semantic.min.js"></script>
<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/semantic-ui@2.5.0/dist/semantic.min.css">
<link
    rel="stylesheet"
    type="text/css",
    href="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/libs/semanticui/override.css">

<!-- Mermaid -->
<script
    src="https://cdn.jsdelivr.net/npm/mermaid@10.3.0/dist/mermaid.min.js"></script>
<link
    rel="stylesheet"
    type="text/css",
    href="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/libs/mermaid/mermaid.css">

<!-- Theme -->
<link
    rel="stylesheet"
    type="text/css",
    href="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/css/themes/base.css">
<link
    rel="stylesheet"
    type="text/css",
    href="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/css/themes/unipi.css">
<link
    rel="stylesheet"
    type="text/css",
    href="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/css/themes/colors.css">

<!-- Slide size -->
<link
    rel="stylesheet"
    type="text/css",
	href="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/css/scaling/px1280_720.css">

<link
    rel="stylesheet"
    type="text/css",
	href="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/css/scaling/sizing.css">

<style>
/* Affiliation */
span.description {
color: var(--basecomplementlight);
font-style: italic;
}
div.caption p {
color: var(--base) !important;
}
/* Factuals and counterfactuals */
img.image.factual {
border-bottom: 10px solid #5DC383 !important;
background: #5DC383!important;
border-radius: 5px;
}
img.image.counterfactual {
border-bottom: 10px solid #FF9079 !important;
background: #5DC383!important;
border-radius: 5px;
}

h1 {
background-image: none !important;
}

p.thanks {
font-size: 1.5em !important;
font-weight: bold;
background: var(--accents);
color: var(--basecomplement);
padding: 12px 25px 20px;
border-radius: 5px;
line-height: 1em;
}
</style>

<!-- paginate: skip -->

# Data-Agnostic Pivotal Instances Selection for Decision-Making Models

<div class="ui two column doubling stackable grid container bottom">
<div class="column">

**PivotTree**: *Case-based Trees for relational and non-relational data*

Alessio Cascione <span class="description">University of Pisa</span>
*Mattia Setzu* <span class="description">University of Pisa</span>
Riccardo Guidotti <span class="description">University of Pisa</span>


</div>
<div class="column">
<img class="ui image huge" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/papers/pivot_tree/3x/pivot_tree_xlarge@3x.png">
</div>
</div>

<div class="img_row">
<img class="ui tiny centered image" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/logos/xai/SVG/xai_logoText_color.svg">
<img class="ui tiny centered image" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/logos/mimosa/SVG/mimosa_on_white.svg">
<img class="ui small centered image" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/logos/fair/SVG/fair.svg">
<img class="ui small centered image" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/logos/piano/Logo%20variants/piano_shield_and_logotype_color.svg">
<img class="ui small centered image" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/logos/eu/eunextgen.svg">
<img class="ui small centered image" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/logos/mur/miur.svg">
<img class="ui small centered image" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/logos/italiadomani/SVG/italiadomani_nobackground.svg">
</div>
</div>
</div>

---

# Explainability and its many forms

- **Feature importance.** Defines impact: what is *important*? (Local)
- **Decision rules**. Describes: what *decides*? (Semi-global)
- **Counterfactuals.** Contrasts: what to *change*? (Local)

<div class="column img_row centered">
<img class="ui medium centered image" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/presentations/xai/feature%20importance.svg">
<img class="ui medium centered image" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/presentations/xai/rule.svg">
<img class="ui medium centered image" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/presentations/xai/counter.svg">
</div>


<!-- paginate: true -->

---
# Non-relational data: breaking the mold

<div class="ui two column doubling stackable grid container bottom">
<div class="column">

Non-relational data has an inherent difficulty in tackling the above tasks, often due to
- Complex relations among features
- Violated assumptions
- Sparsity

</div>
<div class="column">

<img class="ui large centered image" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/presentations/xai/saliency_map_img.png">

<div class="caption">

A saliency map requires a perturbation algorithm how to *jointly* perturb pixels, often under the assumption of their independence, thus creating a large amount of possibly out-of-distribution synthetic instances.

</div>
</div>
</div>

---

# Case-based explanations

<div class="ui two column doubling stackable grid container bottom">
<div class="column">

A.k.a. prototypes, pivots. Define a set of instances, which are explanations **on their own**, and can also be explained
- Importances
- Counterfactuals

By design they tackle sparsity and inter-instance relationships!

</div>
<div class="column">
<img class="ui large centered image" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/presentations/xai/find_cases.png">
<div class="caption">

The bird in the picture is classified as *Clay-colored sparrow* on the basis of its similarity with some prototypes.

</div>
</div>
</div>

---
# The case-based landscape

<div class="ui two column doubling stackable grid container bottom">
<div class="column">
<div class="ui segment base pros"> 

- By design
- Data-agnostic
- Factual explanations
- Local *or* global explanations

</div>
</div>
<div class="column">


<div class="ui segment base cons"> 

- No counterfactuals
- Local *and* global explanation
- No inter-case relationship

</div>
</div>
</div>

<!-- footer: "Prototype selection for interpretable classification. J. Bien et al.

Deep learning for interpretable image recognition. C. Chen et al.

Interpreting CNNs via Decision Trees. Q. Zhang et al.

Proximity Forest: an effective and scalable distance-based classifier for time series. Lucas et al.

Prototype selection for interpretable classification. Bien & Tibshirani.
" -->

---


# Pivot Tree

<div class="ui two column doubling stackable grid container bottom">
<div class="column">

Our proposal, **Pivot Tree** is a case-based model for explainable classification

<div class="ui segment base pros"> 

- Data-agnostic
- Factual *and* counterfactual explanations
- Local *and* global explanations
- Hierarchical case structure

</div>

</div>
<div class="column">

<img class="ui image huge centered" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/papers/pivot_tree/3x/pivot_tree_xlarge@3x.png">
<div class="caption">

A Pivot Tree: instances laid on a tree structure route predictions. Similarity to instances determines routing, and leaves are also associated with a classification label.

</div>


</div>
</div>

<!-- footer: "" -->

---
# Learning a Pivot Tree (PTC)

<div class="ui two column doubling stackable grid container bottom">
<div style="" class="column">

**Pivot Tree Classifier (PTC)**

<img class="ui image medium centered" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/papers/pivot_tree/4x/pipeline@4x.png">
</div>
<div class="column">

1. Compute a similarity matrix $S$, possibly embedding data
2. Induce a Decision Tree on $S$, filtering similarities to
	- **discriminative** pivots: maximizing entropy
	- **descriptive pivots**: maximizing class centrality
   

</div>
</div>

---
# Learning a Pivot Selector (PTS)

<div class="ui two column doubling stackable grid container bottom">
<div style="" class="column">

Pivots in the nodes constitue a dataset themselves!

1. Extract pivots from nodes
2. Train an interpretable model
   **on top** of Pivot Tree

</div>
<div class="column">

**Pivot Tree Selector (PTS)**

<img class="ui image large" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/papers/pivot_tree/4x/pipeline_alternate@4x.png">
</div>
</div>

---
# A qualitative result

**Cifar 10**

<div class="img_row centered">
<img style="margin-right: 150px;" class="ui image small" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/papers/pivot_tree/cat_27_img_test_instance.png">
<img class="ui image small factual" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/papers/pivot_tree/cat_8_img_neighs.png">
<img class="ui image small factual" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/papers/pivot_tree/cat_285_img_neighs.png">
<img class="ui image small counterfactual" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/papers/pivot_tree/cat_573_img_neighs.png">
<img class="ui image small counterfactual" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/papers/pivot_tree/cat_115_img_neighs.png">
</div>
<div class="caption">

An instance (left), and pivots extracted by Pivot Tree. The cat has <span style="color: #5DC383;">high similarity</span> to the first two, and <span style="color: #FF9079;">low</span> to the latter two.

</div>

<!-- footer: "" -->

---
# Experiments


<div class="ui three column doubling stackable grid container bottom">
<div class="column">

**Explainability**

- Fidelity
- Complexity
- Stability

</div>

<div class="column">

**Competitors**

- $\varepsilon$-ball
- $k$-NN

</div>

<div class="column">

**Datasets**

- 11 tabular
- 5 time series
- 3 image + 1 real world use case of oral cancer detection
- 5 text
</div>

</div>

<!-- footer: "" -->

---
# How faithful is Pivot Tree?

<style scoped>
table {
transform: scale(0.8);
}
</style>
<div class="ui two column doubling stackable grid container bottom">
<div class="column">

|                    | $mean\uparrow$ | $std\downarrow$ | $rank\downarrow$ |
| ------------------ | -------------- | --------------- | ---------------- |
| **PTS + DT**       | .62            | .22             | 3.1              |
| K-medoids          | .61            | .22             | 3.6              |
| $\varepsilon$-ball | .61            | .23             | 3.7              |
| **Pivot Tree**     | .58            | .27             | 3.9              |
| K-means            | .62            | .22             | 4.0              |
| Random per class   | .60            | .22             | 4.6              |
| Random             | .60            | .22             | 5.0              |


</div>
<div class="column">

On $f1$ score...
- Pivot Tree selector is the best performing model
- Pivot Tree works **better** as a pivot **selector than** a standalone **classifier**
- Models built directly on data lag behind: good data matters

</div>
</div>

<!-- footer: "" -->

---
# A real-world study: oral cancer detection

A real-world case study on an oral cancer detection dataset.

- 535 images
- 3 classes

|              | Pivot Tree | Decision Tree | $k$-NN | **CNN** |
| ------------ | ---------- | ------------- | ------ | ------- |
| $f1$         | **.834**   | .833          | .811   | .854    |
| $complexity$ | 9          | 47            | **5**  |         |

<!-- footer: "Publicly available at https://mlpi.ing.unipi.it/doctoralai/" -->


---

# How complex is Pivot Tree?

<div class="ui two column doubling stackable grid container bottom">
<div class="column">
<div class="img_row centered">
<img class="ui image large" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/papers/pivot_tree/simplicity_DT.png">
</div>
<div class="caption">

Scatter plot of $f1$ score and simplicity of Pivot Tree and its competitors, regularized to use a maximum of $20$ pivots.

</div>
</div>
<div class="column">

- When not regularized, Pivot Tree slightly worse than competitors
- More complex models (bottom) are less impacted from regularization

</div>
</div>

<!-- footer: "" -->

---
# How stable is Pivot Tree?


<div class="ui two column doubling stackable grid container bottom">
<div class="column">
<img class="ui image large" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/papers/pivot_tree/sensitivity_DT_c.png">
<div class="caption">

Scatter plot of $f1$ score of Pivot Tree as the maximum number of pivots increases. $C$ indicates the number of classes.

</div>
</div>
<div class="column">

Low variance but decreasing trend as regularization decreases: Occam's razor!

</div>
</div>

---
# Pivot Tree

<div class="ui two column doubling stackable grid container bottom">
<div class="column">

An explainable case-based decision tree, providing factual and counterfactual case-based explanations.

Future work:
- Proximity splits: to which pivots are instances more similar?
- More powerful downstream models

</div>
<div class="column">

<img class="ui image huge" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/papers/pivot_tree/3x/pivot_tree_xlarge@3x.png">


[github.com/msetzu/pivottree](https://github.com/msetzu/pivottree)

<p class="thanks">See you at the poster session!</p>

</div>
</div>

