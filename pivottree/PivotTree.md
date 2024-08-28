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
.description {
color: var(--unipigrey);
font-style: italic;
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

*Case-based Trees for relational and non-relational data*

Alessio Cascione <span class="description">University of Pisa</span>
*Mattia Setzu* <span class="description">University of Pisa</span>
Riccardo Guidotti <span class="description">University of Pisa</span>


</div>
<div class="column">
<img class="ui image large" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/papers/pivot_tree/3x/pivot_tree_xlarge@3x.png">
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

- Feature importance: Define a set of features **impacting** the task
- Decision rules: Define a set of constraint **defining** a behavior
- Counterfactuals: Define a set of constraints **defining** a behavior

<div class="column img_row centered">
<img class="ui medium centered image" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/presentations/xai/rule.svg">
<img class="ui medium centered image" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/presentations/xai/counter.svg">
<img class="ui medium centered image" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/presentations/xai/feature%20importance.svg">
</div>

<div class="caption">

Explanations types: rules, counterfactual rules, and feature importance.

</div>

<!-- paginate: true -->

---

# Explainability and its many questions

- Feature importance: What is important?
- Decision rules: What decides?
- Counterfactuals: What to change?

<div class="column img_row centered">
<img class="ui medium centered image" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/presentations/xai/rule.svg">
<img class="ui medium centered image" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/presentations/xai/counter.svg">
<img class="ui medium centered image" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/presentations/xai/feature%20importance.svg">
</div>

<div class="caption">

Explanations types: rules, counterfactual rules, and feature importance.

</div>

<!-- paginate: true -->

---

# Explainability and its many scopes

- Feature importance: Local
- Decision rules: Local/Semi-global
- Counterfactuals: Local

<div class="column img_row centered">
<img class="ui medium centered image" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/presentations/xai/rule.svg">
<img class="ui medium centered image" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/presentations/xai/counter.svg">
<img class="ui medium centered image" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/presentations/xai/feature%20importance.svg">
</div>

<div class="caption">

Explanations types: rules, counterfactual rules, and feature importance.

</div>

---

# An XAI roadblock: non-relational data

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

Define a set of instances, which can...
- Indicate which instances are important
- Define neighborhoods
- Provide counterfactuals

By design they tackle sparsity, inter-instance relationships, and
<span class="highlight">push interpretation to the user!</span>

</div>
<div class="column">
<img class="ui large centered image" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/presentations/xai/protopnet_architecture.png">
<div class="caption">

A case-based model: the bird in the picture is classified as *Clay-colored sparrow* on the basis of its relationship with other prototypes: the model predicts by leveraging instances.

</div>
</div>
</div>

---

# Case-based explanations

<div class="ui two column doubling stackable grid container bottom">
<div class="column">

- Often universal, and applicable to any data type
- Inherently understandable, since we often rely on case-based reasoning ourselves
- Applicable at different scopes, both local and global


</div>
<div class="column">
<img class="ui large centered image" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/presentations/xai/find_cases.png">
<div class="caption">

Cases lend themselves to explanation too: here, feature importance of the retrieved cases.

</div>
</div>
</div>

<!-- footer: "Prototype selection for interpretable classification. J. Bien et al.

Deep learning for interpretable image recognition. C. Chen et al.

Interpreting CNNs via Decision Trees. Q. Zhang et al.
" -->

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

- Explainable by design
- Data-agnostic
- Factual explanations
- Counterfactuals
- Local and global explanations
- Hierarchical case structure

</div>

</div>
<div class="column">

<img class="ui image large" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/papers/pivot_tree/3x/pivot_tree_xlarge@3x.png">
<div class="caption">

A Pivot Tree: instances laid on a tree structure route predictions. Similarity to instances determines routing, and leaves are also associated with a classification label.

</div>


</div>
</div>

<!-- footer: "Data-Agnostic Pivotal Instances Selection for Decision-Making Models. Cascione et al." -->

---

# Pivot Tree

<div class="ui two column doubling stackable grid container bottom">
<div style="" class="column">

**Learning a Pivot Tree**
- Select a set of pivots $P$ with $\pi(X)$
- Learn a tree $f(\pi(X))$ on $P = \pi(X)$

</div>
<div class="column">

<img class="ui image large" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/papers/pivot_tree/3x/pivot_tree_xlarge@3x.png">
<div class="caption">

A Pivot Tree: instances laid on a tree structure route predictions. Similarity to instances determines routing, and leaves are also associated with a classification label.

</div>

</div>
</div>

<!-- footer: "Data-Agnostic Pivotal Instances Selection for Decision-Making Models. Cascione et al." -->

---


# Pivot Tree: selecting pivots

<div class="ui two column doubling stackable grid container bottom">
<div class="column">

How do we choose *pivots*? We don't. We compute a similarity matrix $S$: <span class="highlight">learning pivots is data-driven!</span>

Provided a similarity metric $s: \mathcal{X} \times \mathcal{X} \rightarrow \mathbb{R}$ is given, constructing $S$ is data-agnostic!

</div>

<div class="column">

<img class="ui image large" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/papers/pivot_tree/heatmap_with_images_euclid.png">
<div class="caption">

A similarity matrix induced on Pivot Tree's training data (oral cancer detection).

</div>

</div>
</div>

<!-- footer: "Data-Agnostic Pivotal Instances Selection for Decision-Making Models. Cascione et al." -->

---
# Pivot Tree: inducing a tree

<style scoped>
marp-pre {
transform: scale(0.75);
}
</style>

<div class="ui two column doubling stackable grid container bottom">
<div class="column w60">

With a (new) feature matrix $S$, inducing a Pivot Tree can be reduced to any of the existing state-of-the-art tree-induction algorithms, e.g., CART, C.5, etc.

</div>
<div class="column w35">

<img class="ui image large" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/papers/pivot_tree/3x/pivot_tree_xlarge@3x.png">
<div class="caption">

An induced Pivot Tree.

</div>

</div>
</div>

```python
def induce_split(similarities, labels):
  splits_values = candidate_splits_per_feature(similarities)
  splits = partition(labels, splits)
  impurities = entropy(partitions)

  return partitions[argmin(impurities)]
```


<!-- footer: "Data-Agnostic Pivotal Instances Selection for Decision-Making Models. Cascione et al." -->

---

# Pivot... anything

Pivots selected by Pivot Tree constitute a set $P$ of data... that we can later re-use for learning another downstream model!

- $k$-nearest neighbor... defined on $P$
- decision tree... induced on $P$
- ...

---

# Pivot Tree

<div class="ui two column doubling stackable grid container bottom">
<div class="column">
<div class="ui segment base pros"> 

- Explainable by design
- Data-agnostic
- Factual explanations
- Counterfactuals
- Local and global explanations
- Hierarchical case structure
- Relatively low complexity

</div>
</div>
<div class="column">

<img class="ui image huge" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/papers/pivot_tree/3x/pivot_tree_xlarge@3x.png">
<div class="caption">

An induced Pivot Tree.

</div>

</div>
</div>

<!-- footer: "Data-Agnostic Pivotal Instances Selection for Decision-Making Models. Cascione et al." -->

---

# Experiments


<div class="ui three column doubling stackable grid container bottom">
<div class="column">

**Explainability**

- How faithful is Pivot Tree?
- How complex is Pivot Tree?
- How stable is Pivot Tree?

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
- 3 image
- 5 text

</div>

</div>

<!-- footer: "" -->

---

# How faithful is Pivot Tree?

Downstream model: CART decision tree.

**F1-score**

|                   | Random  | Random per class | K-means Pivots | K-means Pivots | $\varepsilon$-ball | Pivot Tree S | Pivot Tree C |
| ----------------- | ------- | ---------------- | -------------- | -------------- | ------------------ | ------------ | ------------ |
| $mean \uparrow$   | .60     | .60              | .**62**        | .*61*          | .*61*              | .**62**      | .58          |
| $std \downarrow$  | .**22** | .**22**          | .**22**        | .**22**        | .*23*              | .**22**      | .27          |
| $rank \downarrow$ | 5.0     | 4.6              | 4.0            | *3.6*          | 3.7                | **3.1**      | 3.9          |

<!-- footer: "" -->

---

# How faithful is Pivot Tree?

Downstream model: $k$-NN.

**F1-score**

|                   | Random | Random per class | K-means Pivots | K-means Pivots | $\varepsilon$-ball | Pivot Tree S | Pivot Tree C |
| ----------------- | ------ | ---------------- | -------------- | -------------- | ------------------ | ------------ | ------------ |
| $mean \uparrow$   | .72    | .72              | .*73*          | .*73*          | .**74**            | .*73*        | *.73*        |
| $std \downarrow$  | .*19*  | .*19*            | .**18**        | .*19*          | .*19*              | .*19*        | *.19*        |
| $rank \downarrow$ | 4.8    | 4.1              | *3.0*          | 3.1            | **2.2**            | 3.5          | 3.5          |

<!-- footer: "" -->

---

# How complex is Pivot Tree?

<div class="img_row centered">
<img class="ui image large" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/papers/pivot_tree/simplicity_DT.png">
<img class="ui image large" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/papers/pivot_tree/simplicity_KNN.png">
</div>
<div class="caption">

Scatter plot of $f1$ score and simplicity of Pivot Tree and its competitors, on a decision tree (left) and $k$-NN (right) model.

</div>

---

# How stable is Pivot Tree?

<div class="img_row centered">
<img class="ui image large" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/papers/pivot_tree/sensitivity_DT_c.png">
<img class="ui image large" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/papers/pivot_tree/sensitivity_KNN_c.png">
</div>
<div class="caption">

Scatter plot of $f1$ score of Pivot Tree as the maximum number of pivots increases.

</div>

---

# A real-world study: oral cancer detection

A real-world case study on an oral cancer detection dataset.

- 535 images
- 3 classes
- [Publicly available](https://mlpi.ing.unipi.it/doctoralai/)

|              | Pivot Tree | Decision Tree | $k$-NN |     | **CNN** |
| ------------ | ---------- | ------------- | ------ | --- | ------- |
| $f1$         | **.834**   | .833          | .811   |     | .854    |
| $complexity$ | 9          | 47            | **5**  |     |         |


<!-- footer: "Interpretable Machine Learning for Oral Lesion Diagnosis through Prototypical Instances Identification. Cascione et al." -->

---

# Qualitative results

**Cifar 10**

<div class="img_row centered">
<img style="margin-right: 150px;" class="ui image small" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/papers/pivot_tree/cat_27_img_test_instance.png">
<img class="ui image small factual" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/papers/pivot_tree/cat_8_img_neighs.png">
<img class="ui image small factual" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/papers/pivot_tree/cat_285_img_neighs.png">
<img class="ui image small counterfactual" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/papers/pivot_tree/cat_573_img_neighs.png">
<img class="ui image small counterfactual" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/papers/pivot_tree/cat_115_img_neighs.png">
</div>
<div class="caption">

An instance (left), and pivots extracted by Pivot Tree. The cat has high similarity to the first two, and low to the latter two.

</div>

<!-- footer: "" -->

---

# Qualitative results

**Cifar 10**

<div class="img_row centered">
<img style="margin-right: 150px;" class="ui image small" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/papers/pivot_tree/bird_447_img_test_instance.png">
<img class="ui image small factual" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/papers/pivot_tree/bird_447_img_test_instance.png">
<img class="ui image small factual" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/papers/pivot_tree/bird_410_img_neighs.png">
<img class="ui image small factual" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/papers/pivot_tree/bird_441_img_neighs.png">
<img class="ui image small factual" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/papers/pivot_tree/bird_501_img_neighs.png">
<img class="ui image small factual" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/papers/pivot_tree/bird_977_img_neighs.png">
</div>
<div class="caption">

An instance (left), and pivots extracted by Pivot Tree. The bird has high similarity with all the pivots.

</div>

<!-- footer: "" -->

---


# Pivot Tree

<div class="ui two column doubling stackable grid container bottom">
<div class="column">

An explainable by-design case-based algorithm.

<div class="ui segment base pros"> 

- Explainable by design
- Data-agnostic
- Factual explanations
- Counterfactuals
- Local and global explanations
- Hierarchical case structure
- Relatively low complexity

</div>

</div>
<div class="column">

<img class="ui image huge" src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/imgs/papers/pivot_tree/3x/pivot_tree_xlarge@3x.png">


[github.com/msetzu/pivottree](https://github.com/msetzu/pivottree)

<p class="thanks">See you at the poster session!</p>

</div>
</div>

<!-- footer: "Data-Agnostic Pivotal Instances Selection for Decision-Making Models. Cascione et al." -->