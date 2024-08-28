---
type: presentation
marp: true
paginate: true
footer: ''
topic: 
---

<!-- Semantic UI -->
<script
	src="https://code.jquery.com/jquery-3.1.1.min.js"
	integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
	crossorigin="anonymous"></script>
<script src="./imports/semanticui/semantic.min.js"></script>

<link rel="stylesheet" type="text/css", href="../presentations/imports/semanticui/semantic.min.css">
<link rel="stylesheet" type="text/css", href="./imports/semanticui/override.css">

<!-- Mermaid -->
<script src="https://cdn.jsdelivr.net/npm/mermaid@10.3.0/dist/mermaid.min.js"></script>

<link rel="stylesheet" type="text/css" href="./imports/mermaid/mermaid.css">

# Gentree
*Everything you didn't know you needed for decision trees*
*Now on sale at WUCAI 2024*

---

# Decision Trees

<div class="ui two column doubling stackable grid container bottom">
<div class="column">

- Omnipresent in (tabular) classification tasks
- Enable logic-like reasoning
- Easy and usually fast to learn, almost hyperparameter-free

</div>
<div class="column">

![vae](media/img/tree.png)

</div>
</div>

---

# From bravo to eccellente...

<div class="ui two column doubling stackable grid container bottom">
<div class="column">

*Greedy Trees*
Hands-down dominant.

- greedy partitioning
- suboptimal solutions
- fast
- CART, C5, etc.

</div>
<div class="column">

*Optimal Trees*
Never heard of them.

- theoretically optimal
- *slow* :(
- Optimal trees, branch-and-bound trees

</div>
</div>

---


# From bravo to eccellente...

<div class="ui two column doubling stackable grid container bottom">
<div class="column">

*Greedy Trees*
Hands-down dominant.
- greedy partitioning
- suboptimal solutions
- *fast*
- CART, C5, etc.

**Limitation: greedy**

</div>
<div class="column">

*Optimal Trees*
- theoretically optimal
- *slow* :(
- Optimal trees, branch-and-bound trees

**Limitation: even though optimal, the theory has limitations**

</div>
</div>


---

# ... passing through bravissimo

<div class="ui three column doubling stackable grid container bottom">
<div class="column">

*Greedy Trees*

**Limitation: greedy**

</div>

<div class="column">

*Opti-like Trees*
- still suboptimal...
- but optimized
- guess what? Sometimes they're genetic!

</div>

<div class="column">

*Optimal Trees*

**Limitation: even though optimal, the theory has limitations**

</div>
</div>


<br/>
<br/>
<br/>

[Genesim: genetic extraction of a single, interpretable model](https://arxiv.org/abs/1611.05722)

---

# ... passing through bravissimo

<div class="ui three column doubling stackable grid container bottom">
<div class="column">

*Greedy Trees*

Limitation: greedy

</div>

<div class="column">

**Marrying the two families**
- more accurate than greedy
- faster than optimal

</div>

<div class="column">

*Optimal Trees*

Limitation: even though optimal, the theory has limitations

</div>
</div>

<br/>
<br/>
<br/>
<br/>

---

# Paradigm shift: candidate search in a continuous space

Ingredient 1: Variational Autoencoders.

<div class="ui two column doubling stackable grid container bottom">
<div class="column">

- Encoder: data in...
- Decoder: data out.
- Sampling: where the data (latently) lives.

</div>
<div class="column">

![vae](media/img/vaewide.png)

</div>
</div>

---

# Paradigm shift: tree space percolation

Ingredient 2: Tree space percolation.

<div class="ui two column doubling stackable grid container bottom">
<div class="column">

- Searching a latent space is exceedingly difficult (read: intractable)!
- Should condition on a tree, but we don't have it :(
- F**k it, we optimizing

</div>
<div class="column">

![vae](media/img/sampling.png)

</div>
</div>

---

# The represent-and-sample pipeline

I love it, I wish I could have worked on it directly.

```python
base_models = induce_models(...)
space = induce_space(base_models)
seed_model = induce_model()
model = optimize(seed_model, data)
```

People also do it for logic programs and other discrete models!

---


# Gentree

<div class="ui three column doubling stackable grid container bottom">
<div class="column">

![vae](media/img/treegeneration.png)

Trees $T$ induced from the dataset.

</div>
<div class="column">

</div>
<div class="column">


</div>
</div>

---

# Gentree

<div class="ui three column doubling stackable grid container bottom">
<div class="column">

![vae](media/img/treegeneration.png)

Trees $T$ induced from the dataset.

</div>
<div class="column">

![vae](media/img/sampling.png)

Tree-VAE learns a space $Z$ from $T$.

</div>
<div class="column">

</div>
</div>

---

# Gentree

<div class="ui three column doubling stackable grid container bottom">
<div class="column">

![vae](media/img/treegeneration.png)

Trees $T$ induced from the dataset.

</div>
<div class="column">

![vae](media/img/sampling.png)

Tree-VAE learns a space $Z$ from $T$.

</div>
<div class="column">

![vae](media/img/geneticalgorithm.png)

Sample from $Z$, genetic optimization.

</div>
</div>

---

# Juicy details: Tree-VAE

<div class="ui two column doubling stackable grid container bottom">
<div class="column">


- A classic Convolutional VAE;
- Trees are encoded the good old fashioned CS way:
	- maximum capacity matrix
	- one row holding features,
	- and one row holding parameters.

</div>
<div class="column">

| Node 1 | Node 2   | ...   | Node $2^d - 1$ |
| ------ | -------- | ----- | -------------- |
| `age`  | `salary` | `...` | `-`            |
| `30`   | `10K`    | `...` | `0.9`               |

</div>
</div>

---

# Experiments

<div class="ui two column doubling stackable grid container bottom">
<div class="column">

- 18 UCI datasets​
- continuous attributes only
- Datasets randomly split as 80% - 10% - 10%​
- GenTree (GT) VS greedy trees (CART *DT*, Random Forest *RF*), optimal trees (Optimal Decision Trees *ODT*), opti-like trees (GeneSim *GS*)​    
- 10 randomized repetitions per run

</div>
<div class="column">

![gentree_datasets](./media/img/gentree_datasets.png)

</div>
</div>

---

# Performance


<img src="./media/img/gentree_results.png" style="width: 40%; margin-left: 30%;">

---

# Complexity


<img src="./media/img/gentree_complexity.png" style="width: 40%; margin-left: 30%;">

---

# Juicy analysis: the latent space

<div class="ui two column doubling stackable grid container bottom">
<div class="column">

<img src="./media/img/latent_gentree.png">

</div>
<div class="column">

- Tree-VAE (kinda) learns depth clusters!
- Depth directions exists, other may be interesting to investigate:
	- features
	- structure

</div>
</div>

---

# Gentree

- Finally another way of inducing decision trees...
- and it works!
- Continuous representations shows some promise in disentangling tree properties
- Pls no question I have this as a poster at WUCAI in a couple of days :)