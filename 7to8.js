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
  ,
  {
    "q": "Which type of signaling requires cells to be in direct membrane-membrane contact?",
    "o": [
      "Paracrine",
      "Synaptic",
      "Endocrine",
      "Contact-dependent"
    ],
    "a": 3,
    "r": "Contact-dependent signaling requires direct membrane-membrane contact."
  },
  {
    "q": "What characterizes Paracrine signaling?",
    "o": [
      "Signal is distributed body-wide via bloodstream",
      "Signal acts on neighboring cells via local mediators",
      "Signal is transmitted along axons",
      "Signal requires direct contact"
    ],
    "a": 1,
    "r": "Paracrine signaling depends on local mediators acting on neighboring cells."
  },
  {
    "q": "Why do some cell responses, like changes in cell differentiation, take a long time (minutes to hours)?",
    "o": [
      "They involve changes in gene expression and new protein synthesis",
      "They only involve altering existing protein function",
      "The signal travels slowly",
      "The receptors are slow to bind"
    ],
    "a": 0,
    "r": "Slow responses typically involve changes in gene expression and synthesis of new proteins."
  },
  {
    "q": "Where do hydrophobic signal molecules like steroid hormones typically bind?",
    "o": [
      "Cell-surface receptors",
      "Intracellular receptors (cytosol or nucleus)",
      "Ion channels",
      "Extracellular matrix"
    ],
    "a": 1,
    "r": "Hydrophobic molecules cross the membrane and bind intracellular receptors."
  },
  {
    "q": "What is the mechanism of action of Nitric Oxide (NO) in smooth muscle relaxation?",
    "o": [
      "It binds to cell surface receptors",
      "It opens calcium channels directly",
      "It diffuses into cells and activates Guanylyl Cyclase to produce cGMP",
      "It activates Adenylyl Cyclase"
    ],
    "a": 2,
    "r": "NO diffuses into smooth muscle cells and activates guanylyl cyclase."
  },
  {
    "q": "Which class of cell-surface receptors mediates rapid synaptic signaling?",
    "o": [
      "G-Protein-Coupled Receptors (GPCRs)",
      "Enzyme-Coupled Receptors",
      "Ion-Channel-Coupled Receptors",
      "Nuclear Receptors"
    ],
    "a": 2,
    "r": "Ion-channel-coupled receptors mediate rapid synaptic signaling."
  },
  {
    "q": "How many transmembrane domains does a GPCR typically have?",
    "o": [
      "1",
      "3",
      "7",
      "12"
    ],
    "a": 2,
    "r": "GPCRs are 7-transmembrane receptors."
  },
  {
    "q": "Which subunit of the trimeric G-protein binds GTP/GDP?",
    "o": [
      "Alpha",
      "Beta",
      "Gamma",
      "Beta-Gamma complex"
    ],
    "a": 0,
    "r": "The Alpha subunit binds GDP (inactive) or GTP (active)."
  },
  {
    "q": "What is the function of a Guanine Nucleotide Exchange Factor (GEF)?",
    "o": [
      "Hydrolyzes GTP to GDP",
      "Phosphorylates the protein",
      "Stimulates release of GDP and uptake of GTP (Activates)",
      "Degrades the G-protein"
    ],
    "a": 2,
    "r": "GEFs activate the protein by stimulating GDP release and GTP uptake."
  },
  {
    "q": "Which enzyme converts ATP to Cyclic AMP (cAMP)?",
    "o": [
      "Phosphodiesterase",
      "Adenylyl Cyclase",
      "Guanylyl Cyclase",
      "Protein Kinase A"
    ],
    "a": 1,
    "r": "Adenylyl Cyclase synthesizes cAMP from ATP."
  },
  {
    "q": "Which enzyme primarily degrades cAMP?",
    "o": [
      "Adenylyl Cyclase",
      "cAMP Phosphodiesterase",
      "Protein Kinase A",
      "Phospholipase C"
    ],
    "a": 1,
    "r": "cAMP Phosphodiesterase degrades cAMP to 5'-AMP."
  },
  {
    "q": "Active Protein Kinase A (PKA) can translocate to the nucleus to phosphorylate which transcription regulator?",
    "o": [
      "Ras",
      "CREB",
      "STAT",
      "NFkB"
    ],
    "a": 1,
    "r": "PKA phosphorylates CREB (cAMP Response Element Binding protein)."
  },
  {
    "q": "Phospholipase C-beta (PLC) cleaves PIP2 into which two second messengers?",
    "o": [
      "cAMP and cGMP",
      "IP3 and Diacylglycerol (DAG)",
      "Ca2+ and Calmodulin",
      "Ras and Raf"
    ],
    "a": 1,
    "r": "PLC cleaves PIP2 into IP3 (soluble) and DAG (membrane-bound)."
  },
  {
    "q": "What is the primary function of IP3 (Inositol 1,4,5-trisphosphate)?",
    "o": [
      "Activates Protein Kinase C",
      "Opens Ca2+ channels in the ER membrane",
      "Binds to DNA",
      "Activates PKA"
    ],
    "a": 1,
    "r": "IP3 triggers Ca2+ release from the Endoplasmic Reticulum."
  },
  {
    "q": "Which protein acts as a major intracellular Calcium sensor?",
    "o": [
      "Tubulin",
      "Calmodulin",
      "Actin",
      "Myosin"
    ],
    "a": 1,
    "r": "Calmodulin binds Ca2+ and activates other proteins like CaM-kinases."
  },
  {
    "q": "How are Receptor Tyrosine Kinases (RTKs) typically activated?",
    "o": [
      "By binding G-proteins",
      "By dimerization and cross-phosphorylation",
      "By opening ion channels",
      "By entering the nucleus"
    ],
    "a": 1,
    "r": "Ligand binding causes dimerization and cross-phosphorylation of the kinase domains."
  },
  {
    "q": "Which monomeric GTPase is commonly activated by RTKs and initiates the MAP Kinase module?",
    "o": [
      "Ran",
      "Rab",
      "Ras",
      "Rho"
    ],
    "a": 2,
    "r": "Ras is a key mediator activated by RTKs (via adaptors like Grb2/Sos)."
  },
  {
    "q": "The JAK-STAT pathway is primarily associated with which type of receptors?",
    "o": [
      "GPCRs",
      "Cytokine Receptors",
      "Nuclear Receptors",
      "Ion Channels"
    ],
    "a": 1,
    "r": "Cytokine receptors associate with JAKs to activate STATs."
  },
  {
    "q": "Which transcription factor is held inactive in the cytoplasm by I-kappa-B relative to inflammatory responses?",
    "o": [
      "p53",
      "NF-kappa-B",
      "CREB",
      "Smad"
    ],
    "a": 1,
    "r": "NF-kappa-B is released from inhibition to trigger inflammatory gene expression."
  },
  {
    "q": "Nuclear receptors, when activated by ligand, function as:",
    "o": [
      "Protein Kinases",
      "Transcription Regulators",
      "Ion Channels",
      "Second Messengers"
    ],
    "a": 1,
    "r": "Nuclear receptors act as transcription regulators binding to specific DNA sequences."
  }
];
