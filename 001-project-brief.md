## project description

i'm building a statically served next.js website that provides a data-driven and evidence-based fact to common anti-vegan arguments (e.g. "you can't get enough protein", "plants feel pain", "crop deaths", etc.).

the project will be structured around a json file (`data/arguments.json`) that stores all claims and facts in this format:

```json
{
  "id": "protein-deficiency",
  "category": "health",
  "claim": "you can't get enough protein on a vegan diet.",
  "fact": "a well-planned vegan diet provides all essential amino acids and adequate protein levels...",
  "citations": [
    {
      "title": "academy of nutrition and dietetics: position on vegetarian diets",
      "url": "https://pubmed.ncbi.nlm.nih.gov/27886704/"
    }
  ]
}

### Website Structure
- `/` — Homepage with search and category navigation
- `/[category]` — Displays all arguments in that category
- `/argument/[id]` — Detailed fact with citations

### Tech Stack
- **Next.js** (with `getStaticProps` and `getStaticPaths`)
- **TypeScript**
- **JSON** file-based content
- **TailwindCSS** (optional, for styling)
- **Components**:
  - `ArgumentCard`
  - `fact`
  - `CategoryNav`

### Tasks for the Model
- Implement the JSON data loading logic (`/lib/getArguments.ts`)
- Render dynamic routes using `getStaticPaths` and `getStaticProps`
- Display arguments and facts from JSON
- Implement basic client-side search on the homepage
- Keep code modular, minimal, and clean



### Layout

#### homepage

+------------------------------------------------------------+
|                        [ search 🔍 ]                       |
+------------------------------------------------------------+
| [ health ] [ nutrition ] [ ethics ] [ environment ] [ ⋯ ] |
+------------------------------------------------------------+

+------------------------------------------------------------+
| ❗ claim: "you can't get enough protein on a vegan diet."  |
| ✅ fact: "a well-planned vegan diet provides all ..."  |
| [ read more ]              [ health ]                      |
+------------------------------------------------------------+

+------------------------------------------------------------+
| ❗ claim: "plants feel pain."                               |
| ✅ fact: "there's no evidence plants have nervous ..." |
| [ read more ]              [ ethics ]                      |
+------------------------------------------------------------+

#### category page (/health)

+------------------+
| category: health |
+------------------+

[ back to all categories ]

+------------------------------------------------------------+
| ❗ claim: "vegans lack b12."                                |
| ✅ fact: "b12 is a supplement for everyone over 50 ..."|
| [ read more ]                                              |
+------------------------------------------------------------+


#### argument detail page (/argument/protein-deficiency)


+------------------------------------------------------------+
| ❗ claim: "you can't get enough protein on a vegan diet."  |
+------------------------------------------------------------+

✅ fact:

- vegan diets provide all 9 essential amino acids
- average intake exceeds recommended daily protein levels
- legumes, tofu, seitan, soy milk, quinoa, etc.

📚 citations:
- [ academy of nutrition and dietetics (2016) ]
- [ ncbi: protein quality in vegan diets ]
- [ harvard health: myths about protein ]

[ back to health ]