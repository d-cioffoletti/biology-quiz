const masterBank = [
  {
    "q": "What is the primary function of anchoring junctions in tissues?",
    "o": [
      "To allow the passage of ions between cells",
      "To transmit mechanical stresses and link the cytoskeleton to the extracellular structures",
      "To create an impermeable barrier to fluid loss",
      "To actively transport nutrients into the cell"
    ],
    "a": 1,
    "r": "Anchoring junctions transmit stresses and are directly linked to the cytoskeleton."
  },
  {
    "q": "Which protein superfamily primarily mediates cell-cell interactions in anchoring junctions?",
    "o": [
      "Integrins",
      "Cadherins",
      "Selectins",
      "Fibronectins"
    ],
    "a": 1,
    "r": "Cadherins mediate cell-cell interactions, whereas Integrins mediate cell-matrix attachment."
  },
  {
    "q": "Which ion is essential for the function of Cadherin-mediated adhesion?",
    "o": [
      "Mg2+",
      "Na+",
      "Ca2+",
      "K+"
    ],
    "a": 2,
    "r": "Cadherin-mediated adhesions are dependent on Ca2+ ions to maintain their rigid structure."
  },
  {
    "q": "What do Adherens junctions connect to within the cell?",
    "o": [
      "Intermediate filaments",
      "Actin filaments",
      "Microtubules",
      "The nuclear lamina"
    ],
    "a": 1,
    "r": "Adherens junctions bind bundles of actin filaments."
  },
  {
    "q": "Which type of junction connects intermediate filaments of adjacent cells, providing mechanical strength?",
    "o": [
      "Adherens junctions",
      "Gap junctions",
      "Desmosomes",
      "Hemidesmosomes"
    ],
    "a": 2,
    "r": "Desmosomes are anchoring junctions that connect intermediate filaments (like keratin) of adjacent cells."
  },
  {
    "q": "What do Hemidesmosomes connect the cell to?",
    "o": [
      "Adjacent cells via actin",
      "Adjacent cells via intermediate filaments",
      "The extracellular matrix via actin",
      "The extracellular matrix via intermediate filaments"
    ],
    "a": 3,
    "r": "Hemidesmosomes are cell-matrix junctions that link intermediate filaments to the matrix."
  },
  {
    "q": "Which transmembrane protein superfamily mediates attachment to the extracellular matrix?",
    "o": [
      "Cadherins",
      "Integrins",
      "Claudins",
      "Occludins"
    ],
    "a": 1,
    "r": "Integrins mediate cell-matrix attachment."
  },
  {
    "q": "What is the primary function of Tight Junctions (Occluding junctions)?",
    "o": [
      "To provide mechanical strength",
      "To allow communication between cells",
      "To serve as a barrier to solute diffusion and seal the epithelium",
      "To anchor the cell to the basal lamina"
    ],
    "a": 2,
    "r": "Tight junctions serve as barriers to diffusion and create a seal between cells."
  },
  {
    "q": "Which proteins are the main components of Tight Junctions?",
    "o": [
      "Cadherins and Catenins",
      "Claudins and Occludins",
      "Actin and Myosin",
      "Collagen and Elastin"
    ],
    "a": 1,
    "r": "Tight junctions are made of proteins including Claudins and Occludins."
  },
  {
    "q": "What is the function of Gap Junctions?",
    "o": [
      "They form channels allowing ions and small molecules to pass between cells",
      "They prevent the movement of membrane proteins",
      "They anchor cells to the collagen matrix",
      "They mediate immune responses"
    ],
    "a": 0,
    "r": "Gap junctions function as channels connecting the cytoplasm of adjacent cells."
  },
  {
    "q": "What is the approximate molecular mass limit for molecules passing through Gap Junctions?",
    "o": [
      "100 daltons",
      "1000 daltons",
      "50 000 daltons",
      "They exert no size limit"
    ],
    "a": 1,
    "r": "Only molecules with a mass less than about 1000 daltons can pass."
  },
  {
    "q": "Which fibrous protein is the most abundant component of the extracellular matrix in mammals?",
    "o": [
      "Elastin",
      "Fibronectin",
      "Collagen",
      "Laminin"
    ],
    "a": 2,
    "r": "Collagen constitutes about 25% of the total protein mass in mammals."
  },
  {
    "q": "What is the function of Fibronectin in the extracellular matrix?",
    "o": [
      "It forms the rigid structural framework alone",
      "It acts as a bridge between collagen and the cell cytoskeleton (via integrins)",
      "It allows the tissue to stretch and recoil",
      "It creates a hydrated gel"
    ],
    "a": 1,
    "r": "Fibronectin acts as a bridge between collagen and the cell cytoskeleton."
  },
  {
    "q": "Which component of the ECM provides elasticity to tissues like skin and blood vessels?",
    "o": [
      "Collagen",
      "Elastin",
      "Laminin",
      "Proteoglycans"
    ],
    "a": 1,
    "r": "Elastin gives elasticity to tissues, allowing them to stretch."
  },
  {
    "q": "What property of Glycosaminoglycans (GAGs) allows them to form hydrated gels?",
    "o": [
      "They are hydrophobic",
      "They are neutral and compact",
      "They are negatively charged and attract cations (Na+) and water",
      "They form covalent cross-links with calcium"
    ],
    "a": 2,
    "r": "GAGs are negatively charged, attracting Na+ and thus water, forming voluminous gels."
  },
  {
    "q": "Which structure supports all epithelia and surrounds muscle cells?",
    "o": [
      "The cell cortex",
      "The Basal Lamina",
      "The apical surface",
      "The nuclear envelope"
    ],
    "a": 1,
    "r": "The Basal Lamina is an essential support for all epithelia."
  },
  {
    "q": "Which specific collagen type is a major component of the Basal Lamina?",
    "o": [
      "Type I",
      "Type II",
      "Type IV",
      "Type X"
    ],
    "a": 2,
    "r": "The Basal Lamina is composed of Type IV collagen and other molecules like laminin."
  },
  {
    "q": "What is Laminin?",
    "o": [
      "A cytoskeletal filament",
      "A heterotrimeric glycoprotein in the Basal Lamina",
      "A lipid molecule",
      "A transcription factor"
    ],
    "a": 1,
    "r": "Laminin is a glycoprotein heterotrimer (alpha, beta, gamma chains) in the Basal Lamina."
  },
  {
    "q": "Focal adhesions connect the extracellular matrix to which intracellular cytoskeletal element?",
    "o": [
      "Microtubules",
      "Actin filaments",
      "Intermediate filaments",
      "Spectrin"
    ],
    "a": 1,
    "r": "Focal adhesions connect the ECM to actin filaments."
  },
  {
    "q": "What is the equivalent of Gap Junctions in plant cells?",
    "o": [
      "Desmosomes",
      "Plasmodesmata",
      "Tight junctions",
      "Synapses"
    ],
    "a": 1,
    "r": "Plasmodesmata serve the communicating function in vegetables (plants)."
  }
];
