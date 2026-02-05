const masterBank = [
  {
    "q": "What is the primary energy source for microtubule polymerization?",
    "o": [
      "ATP",
      "GTP",
      "CTP",
      "TTP"
    ],
    "a": 1,
    "r": "Beta-tubulin hydrolyzes GTP."
  },
  {
    "q": "Which motor protein moves cargo toward the 'plus' end of microtubules?",
    "o": [
      "Dynein",
      "Myosin II",
      "Kinesin",
      "Myosin V"
    ],
    "a": 2,
    "r": "Kinesins move toward the plus end."
  },
  {
    "q": "In which cellular structure are actin filaments primarily concentrated?",
    "o": [
      "The Nuclear Lamina",
      "The Cell Cortex",
      "The Mitochondrial Matrix",
      "The Endoplasmic Reticulum (ER) Lumen"
    ],
    "a": 1,
    "r": "Actin filaments form the cell cortex just beneath the plasma membrane."
  },
  {
    "q": "What term describes the simultaneous growth at one end and shrinkage at the other end of an actin filament?",
    "o": [
      "Dynamic Instability",
      "Catastrophe",
      "Treadmilling",
      "Nucleation"
    ],
    "a": 2,
    "r": "Treadmilling is the key dynamic behavior of actin filaments in steady state."
  },
  {
    "q": "What is the primary function of the Arp2/3 complex?",
    "o": [
      "Capping actin filaments",
      "Nucleating branched actin filaments",
      "Cross-linking actin bundles",
      "Depolymerizing actin"
    ],
    "a": 1,
    "r": "The Arp2/3 complex nucleates the formation of branched actin networks."
  },
  {
    "q": "Which type of intermediate filament is found lining the inner membrane of the nucleus?",
    "o": [
      "Keratin",
      "Vimentin",
      "Neurofilament",
      "Nuclear Lamins"
    ],
    "a": 3,
    "r": "Nuclear Lamins form the meshwork that supports the nuclear envelope."
  },
  {
    "q": "Which protein links the actin cytoskeleton to the extracellular matrix and is mutated in Duchenne Muscular Dystrophy?",
    "o": [
      "Integrin",
      "Dystrophin",
      "Cadherin",
      "Spectrin"
    ],
    "a": 1,
    "r": "Dystrophin acts as a critical anchor; its loss leads to muscle degeneration."
  },
  {
    "q": "What type of covalent bond links monosaccharides together to form polysaccharides?",
    "o": [
      "Peptide bond",
      "Phosphodiester bond",
      "Glycosidic bond",
      "Ester bond"
    ],
    "a": 2,
    "r": "Glycosidic bonds link sugar monomers."
  },
  {
    "q": "Which polysaccharide is the major structural component of plant cell walls?",
    "o": [
      "Starch",
      "Glycogen",
      "Cellulose",
      "Chitin"
    ],
    "a": 2,
    "r": "Cellulose creates the rigid fibers of the plant cell wall."
  },
  {
    "q": "What are the molecular components of a triglyceride molecule?",
    "o": [
      "Cholesterol and fatty acids",
      "Glycerol backbone esterified with three fatty acids",
      "Sphingosine and fatty acids",
      "Phosphate and glycerol"
    ],
    "a": 1,
    "r": "A triglyceride consists of a glycerol backbone linked to three fatty acids."
  },
  {
    "q": "The property of phospholipids having both hydrophilic and hydrophobic regions is known as:",
    "o": [
      "Hydrophobic",
      "Hydrophilic",
      "Amphipathic",
      "Air-soluble"
    ],
    "a": 2,
    "r": "Amphipathic molecules have both polar and non-polar parts."
  },
  {
    "q": "Which molecule serves as the common precursor for the synthesis of all steroid hormones?",
    "o": [
      "Testosterone",
      "Cholesterol",
      "Vitamin D",
      "Phosphatidylcholine"
    ],
    "a": 1,
    "r": "Cholesterol is the parent molecule for all steroid hormones."
  },
  {
    "q": "What is the structural difference between the sugars found in Deoxyribonucleic Acid (DNA) and Ribonucleic Acid (RNA)?",
    "o": [
      "DNA contains ribose",
      "RNA contains deoxyribose",
      "DNA contains 2-deoxyribose (lacks 2' oxygen)",
      "RNA lacks the 3' oxygen"
    ],
    "a": 2,
    "r": "DNA uses 2-deoxyribose, whereas RNA uses ribose."
  },
  {
    "q": "Which nitrogenous base is found exclusively in RNA and not in DNA?",
    "o": [
      "Adenine",
      "Guanine",
      "Thymine",
      "Uracil"
    ],
    "a": 3,
    "r": "Uracil replaces Thymine in RNA molecules."
  },
  {
    "q": "According to Chargaff's rules, if a DNA sample contains 15% Guanine, what is the percentage of Thymine?",
    "o": [
      "15%",
      "35%",
      "70%",
      "30%"
    ],
    "a": 1,
    "r": "If G=15%, then C=15%. G+C=30%. The remaining 70% is A+T, so T=35%."
  },
  {
    "q": "How many hydrogen bonds form between Adenine and Thymine base pairs?",
    "o": [
      "1",
      "2",
      "3",
      "4"
    ],
    "a": 1,
    "r": "Adenine and Thymine are connected by 2 hydrogen bonds (G-C has 3)."
  },
  {
    "q": "What term describes the orientation of the two strands in a DNA double helix relative to each other?",
    "o": [
      "Parallel",
      "Perpendicular",
      "Antiparallel",
      "Unidirectional"
    ],
    "a": 2,
    "r": "The strands run in opposite directions (5' to 3' and 3' to 5')."
  },
  {
    "q": "Alpha-helices and Beta-sheets are examples of which level of protein structure?",
    "o": [
      "Primary",
      "Secondary",
      "Tertiary",
      "Quaternary"
    ],
    "a": 1,
    "r": "They are common motifs of secondary structure stabilized by backbone hydrogen bonds."
  },
  {
    "q": "What is the primary thermodynamic driving force for the folding of proteins into their tertiary structure?",
    "o": [
      "Ionic bonds",
      "Disulfide bridges",
      "The Hydrophobic Effect",
      "Peptide bonding"
    ],
    "a": 2,
    "r": "Burial of hydrophobic residues away from water drives folding."
  },
  {
    "q": "What is the main cellular function of molecular chaperones?",
    "o": [
      "To degrade proteins",
      "To synthesize proteins",
      "To assist in correct protein folding",
      "To transport proteins"
    ],
    "a": 2,
    "r": "Chaperones prevent misfolding and aggregation."
  },
  {
    "q": "How do prions cause disease?",
    "o": [
      "By viral infection",
      "By bacterial toxin",
      "By inducing the misfolding of normal proteins into the prion conformation",
      "By blocking ribosomes"
    ],
    "a": 2,
    "r": "Prions act as infectious templates for protein misfolding."
  },
  {
    "q": "What is the approximate thickness of a typical lipid bilayer?",
    "o": [
      "1 nm",
      "5 nm",
      "10 nm",
      "50 nm"
    ],
    "a": 1,
    "r": "A typical biological membrane is about 5 nm thick."
  },
  {
    "q": "Which enzyme is responsible for maintaining Phosphatidylserine (PS) on the inner leaflet of the plasma membrane?",
    "o": [
      "Scramblase",
      "Lipase",
      "Flippase",
      "Floppase"
    ],
    "a": 2,
    "r": "Flippases (P-type pumps) specifically move PS to the cytosolic leaflet."
  },
  {
    "q": "What effect does cholesterol have on membrane fluidity at high temperatures?",
    "o": [
      "It increases fluidity",
      "It decreases fluidity (stiffens the membrane)",
      "No effect",
      "It dissolves the membrane"
    ],
    "a": 1,
    "r": "Cholesterol restrains phospholipid movement, reducing fluidity at high temperatures."
  },
  {
    "q": "Which of the following substances can cross the lipid bilayer via simple diffusion?",
    "o": [
      "Glucose",
      "K+ ions",
      "N2 (Nitrogen gas)",
      "Water (bulk flow)"
    ],
    "a": 2,
    "r": "Small non-polar molecules like gases diffuse freely."
  },
  {
    "q": "Which type of transport uses the energy from an existing ion gradient to drive the transport of another molecule?",
    "o": [
      "Simple diffusion",
      "Facilitated diffusion",
      "Primary active transport",
      "Secondary active transport"
    ],
    "a": 3,
    "r": "Coupled transport using a gradient is Secondary Active Transport."
  },
  {
    "q": "What is the stoichiometry of ions transported by the Na+/K+ ATPase pump?",
    "o": [
      "2 Na+ out / 3 K+ in",
      "3 Na+ out / 2 K+ in",
      "1:1 ratio",
      "3 Na+ in / 2 K+ out"
    ],
    "a": 1,
    "r": "The pump moves 3 Sodium ions out and 2 Potassium ions in per cycle."
  },
  {
    "q": "Which ion movement is primarily responsible for the depolarization phase of an action potential?",
    "o": [
      "K+ efflux",
      "Na+ influx",
      "Cl- influx",
      "Water influx"
    ],
    "a": 1,
    "r": "Opening of voltage-gated Na+ channels allows sodium influx, depolarizing the cell."
  },
  {
    "q": "How does the potassium channel selectivity filter distinguish K+ from Na+?",
    "o": [
      "By ATP hydrolysis",
      "Carbonyl oxygens precisely mimic the hydration shell of K+",
      "By charge repulsion",
      "By anchoring proteins"
    ],
    "a": 1,
    "r": "The geometry of the carbonyls fits K+ perfectly but is too large for the smaller Na+."
  },
  {
    "q": "What is the default destination for a protein that lacks a sorting signal?",
    "o": [
      "The ER",
      "The Nucleus",
      "The Cytosol",
      "The Mitochondria"
    ],
    "a": 2,
    "r": "Without a signal, proteins remain in the cytosol where they differ."
  },
  {
    "q": "Which molecule binds to the nuclear import receptor to trigger the release of its cargo in the nucleus?",
    "o": [
      "Ran-GDP",
      "Ran-GTP",
      "Arf",
      "Rab"
    ],
    "a": 1,
    "r": "Ran-GTP binding causes the nuclear import receptor to release its cargo."
  },
  {
    "q": "When are mitochondrial precursor proteins imported into the mitochondrion?",
    "o": [
      "Co-translationally",
      "Post-translationally",
      "Via vesicles",
      "Through nuclear pores"
    ],
    "a": 1,
    "r": "Mitochondrial proteins are fully synthesized in the cytosol before import."
  },
  {
    "q": "What are the characteristics of a typical ER signal sequence?",
    "o": [
      "KDEL sequence",
      "Nuclear Localization Signal",
      "A hydrophobic stretch at the N-terminus",
      "Mannose-6-Phosphate"
    ],
    "a": 2,
    "r": "An N-terminal hydrophobic sequence targets the ribosome to the ER."
  },
  {
    "q": "Which type of coated vesicle mediates transport from the Endoplasmic Reticulum (ER) to the Golgi apparatus?",
    "o": [
      "Clathrin",
      "Coat Protein Complex I (COPI)",
      "Coat Protein Complex II (COPII)",
      "Retromer"
    ],
    "a": 2,
    "r": "COPII coat proteins drive vesicle formation at the ER exit sites."
  },
  {
    "q": "Which GTPase is responsible for recruiting the COPII coat to the ER membrane?",
    "o": [
      "Arf",
      "Sar1",
      "Rab",
      "Ran"
    ],
    "a": 1,
    "r": "Sar1-GTP recruits the COPII coat subunits."
  },
  {
    "q": "Which family of proteins on the vesicle and target membrane ensures specificity during vesicle docking?",
    "o": [
      "SNAREs",
      "Rab proteins",
      "Coat proteins",
      "Cargo receptors"
    ],
    "a": 1,
    "r": "Rab GTPases serve as the primary address labels for trafficking."
  },
  {
    "q": "Which protein complex catalyzes the fusion of the vesicle membrane with the target membrane?",
    "o": [
      "Rab complex",
      "Coatomer",
      "SNARE complex (v-SNARE and t-SNARE)",
      "Dynamin"
    ],
    "a": 2,
    "r": "SNAREs wind together to force membranes into fusion."
  },
  {
    "q": "What happens to the Signal Recognition Particle (SRP) after it delivers the ribosome to the ER membrane?",
    "o": [
      "It enters the ER lumen",
      "It is degraded",
      "It is released and recycled to the cytosol",
      "It becomes part of the translocator"
    ],
    "a": 2,
    "r": "The SRP detaches from the receptor and returns to the cytosol."
  },
  {
    "q": "Which amino acid is capable of forming disulfide bridges?",
    "o": [
      "Methionine",
      "Cysteine",
      "Serine",
      "Threonine"
    ],
    "a": 1,
    "r": "Cysteine residues can oxidize to form covalent disulfide bonds."
  },
  {
    "q": "Where is the SRP receptor located?",
    "o": [
      "In the mitochondrial membrane",
      "In the plasma membrane",
      "In the Rough ER membrane",
      "In the nucleus"
    ],
    "a": 2,
    "r": "The SRP Receptor acts as the docking site on the Rough ER."
  },
  {
    "q": "Which GTPase is responsible for pinching off clathrin-coated vesicles from the membrane?",
    "o": [
      "Adaptin",
      "Clathrin",
      "Dynamin",
      "Sar1"
    ],
    "a": 2,
    "r": "Dynamin constricts and severs the vesicle neck."
  },
  {
    "q": "What molecular tag targets proteins to the lysosome proper regarding soluble enzymes?",
    "o": [
      "KDEL",
      "Mannose-6-Phosphate (M6P)",
      "Signal Peptide",
      "Ubiquitin"
    ],
    "a": 1,
    "r": "The M6P tag directs lysosomal hydrolases to the lysosome."
  },
  {
    "q": "In which organelle does O-linked glycosylation primarily occur?",
    "o": [
      "RER",
      "SER",
      "Golgi",
      "Lysosome"
    ],
    "a": 2,
    "r": "The Golgi stack."
  },
  {
    "q": "Which protein complex translocates proteins across the inner mitochondrial membrane?",
    "o": [
      "TOM",
      "TIM",
      "OXA",
      "SAM"
    ],
    "a": 1,
    "r": "TIM moves proteins in."
  },
  {
    "q": "What is the primary function of the KDEL sequence found on Endoplasmic Reticulum (ER) resident proteins?",
    "o": [
      "Lysosome",
      "ER retrieval",
      "Nuclear",
      "Secretory"
    ],
    "a": 1,
    "r": "ER retrieval signal."
  },
  {
    "q": "Which phospholipid is typically the most abundant in the plasma membrane?",
    "o": [
      "Cholesterol",
      "PC",
      "Glyco",
      "Sphingo"
    ],
    "a": 1,
    "r": "Phosphatidylcholine (PC)."
  },
  {
    "q": "Which enzyme facilitates the random flip-flop of lipids between ER membrane leaflets?",
    "o": [
      "Flippase",
      "Floppase",
      "Scramblase",
      "Lipase"
    ],
    "a": 2,
    "r": "Scramblase (ATP-independent)."
  },
  {
    "q": "Which ion channels are the dominant determinant of the resting membrane potential?",
    "o": [
      "Na",
      "Ca",
      "K",
      "Cl"
    ],
    "a": 2,
    "r": "K+ leak channels."
  },
  {
    "q": "What is the function of the signal peptidase enzyme?",
    "o": [
      "Bind SRP",
      "Cleave signal",
      "Sugar",
      "Degrade"
    ],
    "a": 1,
    "r": "Removes signal peptide."
  },
  {
    "q": "Where are nuclear proteins synthesized before being imported into the nucleus?",
    "o": [
      "Bound ribo",
      "Free ribo",
      "Mito",
      "Nuclear"
    ],
    "a": 1,
    "r": "Free cytosolic ribosomes."
  },
  {
    "q": "What provides the energy for extracting misfolded proteins from the ER during ERAD?",
    "o": [
      "GTP",
      "ATP",
      "Light",
      "Gradient"
    ],
    "a": 1,
    "r": "ATP/AAA-ATPases."
  },
  {
    "q": "Which mechanism does the cell use to internalize Low Density Lipoprotein (LDL) particles?",
    "o": [
      "Diff",
      "Macropino",
      "Receptor-mediated",
      "Phago"
    ],
    "a": 2,
    "r": "Clathrin-mediated endocytosis."
  },
  {
    "q": "Which pump is responsible for maintaining the acidic pH of the lysosome?",
    "o": [
      "Na/K",
      "V-type H-ATPase",
      "Diff",
      "Ca"
    ],
    "a": 1,
    "r": "V-type H+ pump."
  },
  {
    "q": "Which intermediate filament type is the major structural component of skin epithelial cells?",
    "o": [
      "Vimen",
      "Desmin",
      "Keratin",
      "Lamin"
    ],
    "a": 2,
    "r": "Keratins."
  },
  {
    "q": "What specific event triggers the force-generating 'power stroke' of the myosin head?",
    "o": [
      "ATP binding",
      "ATP hydrolysis",
      "Inorganic Phosphate (Pi) release",
      "ADP binding"
    ],
    "a": 2,
    "r": "Inorganic Phosphate (Pi) release."
  },
  {
    "q": "On which side of the plasma membrane are the carbohydrate chains of glycoproteins and glycolipids located?",
    "o": [
      "Cytosol",
      "Extracellular",
      "Core",
      "Both"
    ],
    "a": 1,
    "r": "Face the exterior."
  },
  {
    "q": "Which of the following is a classic example of a second messenger molecule?",
    "o": [
      "Glucose",
      "Cyclic AMP (cAMP)",
      "Insulin",
      "Cellulose"
    ],
    "a": 1,
    "r": "Cyclic Adenosine Monophosphate (cAMP)."
  },
  {
    "q": "How do unsaturated fatty acids with cis-double bonds affect membrane fluidity?",
    "o": [
      "Lower fluidity",
      "Higher fluidity",
      "None",
      "Solidify"
    ],
    "a": 1,
    "r": "Kinks increase fluidity."
  },
  {
    "q": "Which of the following nitrogenous bases is classified as a Purine?",
    "o": [
      "C",
      "T",
      "U",
      "A"
    ],
    "a": 3,
    "r": "Adenine/Guanine."
  },
  {
    "q": "What is the length of one complete turn (10 base pairs) of the B-DNA double helix?",
    "o": [
      "0.34",
      "2.0",
      "3.4",
      "10"
    ],
    "a": 2,
    "r": "3.4 nm per turn."
  },
  {
    "q": "What are the monomeric building blocks of nucleic acids?",
    "o": [
      "Amino",
      "Sugar",
      "Nucleotide",
      "Fatty"
    ],
    "a": 2,
    "r": "Nucleotides."
  },
  {
    "q": "What type of covalent bond links amino acids together in a protein?",
    "o": [
      "Ionic",
      "H",
      "Peptide",
      "Covalent"
    ],
    "a": 2,
    "r": "Peptide bonds."
  },
  {
    "q": "Which organelle is analogous to a 'post office', sorting and packaging proteins?",
    "o": [
      "ER",
      "Mito",
      "Golgi",
      "Peroxi"
    ],
    "a": 2,
    "r": "Golgi Apparatus."
  },
  {
    "q": "What is the cellular process of 'self-eating' used to degrade damaged organelles?",
    "o": [
      "Suicide",
      "Division",
      "Self-eating",
      "Synth"
    ],
    "a": 2,
    "r": "Organelle degradation."
  },
  {
    "q": "Which term best describes the chemical environment of the interior of a lipid bilayer?",
    "o": [
      "Hydrophilic",
      "Hydrophobic",
      "Gas",
      "Acid"
    ],
    "a": 1,
    "r": "Non-polar core."
  },
  {
    "q": "Which cytoskeletal filaments are apolar (lacking distinction between ends)?",
    "o": [
      "MT",
      "Actin",
      "IF",
      "Septin"
    ],
    "a": 2,
    "r": "Intermediate filaments."
  },
  {
    "q": "Which small GTPase recruits adaptor proteins for clathrin-coated vesicles at the Golgi?",
    "o": [
      "Sar1",
      "Ran",
      "Arf1",
      "Rab"
    ],
    "a": 2,
    "r": "Arf GTPases."
  },
  {
    "q": "In a symport system, in which direction do the two transported solutes move?",
    "o": [
      "Opposite",
      "Same",
      "Random",
      "None"
    ],
    "a": 1,
    "r": "Same direction."
  },
  {
    "q": "The glycocalyx covering the cell surface is primarily composed of what molecules?",
    "o": [
      "Protein",
      "Sugar",
      "DNA",
      "RNA"
    ],
    "a": 1,
    "r": "Carbohydrate coat."
  },
  {
    "q": "Which experimental technique is used to measure the lateral mobility of proteins in a membrane?",
    "o": [
      "PAGE",
      "Fluorescence Recovery After Photobleaching (FRAP)",
      "Western",
      "PCR"
    ],
    "a": 1,
    "r": "Fluorescence Recovery After Photobleaching (FRAP)."
  },
  {
    "q": "What structure serves as the selective gate for transport between the nucleus and cytosol?",
    "o": [
      "Vesicle",
      "Translocator",
      "Nuclear Pore",
      "Diff"
    ],
    "a": 2,
    "r": "Nuclear Pore Complex."
  },
  {
    "q": "What are the components of the Signal Recognition Particle (SRP)?",
    "o": [
      "DNA",
      "RNA+Protein",
      "Lipid",
      "Glyco"
    ],
    "a": 1,
    "r": "Ribonucleoprotein."
  },
  {
    "q": "Binding Immunoglobulin Protein (BiP) is a member of which heat-shock protein family residing in the ER?",
    "o": [
      "Cleave",
      "ER Chaperone",
      "Lipid",
      "Degrade"
    ],
    "a": 1,
    "r": "Endoplasmic Reticulum (ER) Hsp70 member."
  },
  {
    "q": "In which organelle does the initial addition of an N-linked oligosaccharide occur?",
    "o": [
      "Cytosol",
      "Golgi",
      "ER",
      "Lyso"
    ],
    "a": 2,
    "r": "ER lumen."
  },
  {
    "q": "Which protein tag marks cytosolic proteins for degradation by the proteasome?",
    "o": [
      "Pi",
      "Sugar",
      "Ubiquitin",
      "Chol"
    ],
    "a": 2,
    "r": "Poly-ubiquitin."
  },
  {
    "q": "Which organelle is the primary site for the oxidation of Very Long Chain Fatty Acids (VLCFAs)?",
    "o": [
      "ER",
      "Lyso",
      "Peroxi",
      "Mito"
    ],
    "a": 2,
    "r": "Peroxisomes."
  },
  {
    "q": "Zellweger syndrome is a lethal disorder caused by a defect in the biogenesis of which organelle?",
    "o": [
      "Mito",
      "Peroxi biogenesis",
      "Nuclear",
      "Lyso"
    ],
    "a": 1,
    "r": "Peroxisomal import failure."
  },
  {
    "q": "Why is the flip-flop of phospholipids across the bilayer rare without enzymatic catalysis?",
    "o": [
      "Heavy",
      "Head/Core energy",
      "Solid",
      "Enzymes"
    ],
    "a": 1,
    "r": "Thermodynamics of head crossing."
  },
  {
    "q": "Which type of lipid is used primarily for energy storage in lipid droplets?",
    "o": [
      "PL",
      "Steroid",
      "TG",
      "Glyco"
    ],
    "a": 2,
    "r": "Triglycerides."
  },
  {
    "q": "Where does a competitive inhibitor bind to an enzyme?",
    "o": [
      "Allo",
      "Active",
      "C-term",
      "Reg"
    ],
    "a": 1,
    "r": "Active site binding."
  },
  {
    "q": "What type of chemical bond is responsible for base pairing between the two strands of DNA?",
    "o": [
      "Covalent bond",
      "Ionic bond",
      "Hydrogen bond",
      "Hydrophobic interaction"
    ],
    "a": 2,
    "r": "Hydrogen bonds hold the complementary bases together."
  },
  {
    "q": "The Endoplasmic Reticulum (ER) membrane is continuous with the membrane of which other organelle?",
    "o": [
      "Golgi Apparatus",
      "Nuclear Envelope",
      "Plasma Membrane",
      "Mitochondria"
    ],
    "a": 1,
    "r": "The ER membrane shares a continuous lumen with the nuclear envelope."
  },
  {
    "q": "Which of the following organelles is NOT part of the endomembrane system?",
    "o": [
      "ER",
      "Golgi Apparatus",
      "Lysosome",
      "Mitochondria"
    ],
    "a": 3,
    "r": "Mitochondria are independent organelles with their own DNA."
  },
  {
    "q": "The aggregation of which protein is associated with the neurofibrillary tangles in Alzheimer's disease?",
    "o": [
      "Tau",
      "Dynein",
      "Kinesin",
      "Plectin"
    ],
    "a": 0,
    "r": "Hyperphosphorylated Tau forms the characteristic tangles."
  },
  {
    "q": "Which protein acts as a nucleotide exchange factor, replacing Adenosine Diphosphate (ADP) with Adenosine Triphosphate (ATP) on actin monomers?",
    "o": [
      "Thymosin",
      "Profilin",
      "Cofilin",
      "Gelsolin"
    ],
    "a": 1,
    "r": "Profilin promotes elongation by recharging actin monomers."
  },
  {
    "q": "Which protein sequesters actin monomers in the cytosol to prevent spontaneous polymerization?",
    "o": [
      "Profilin",
      "Thymosin beta-4",
      "Arp2/3",
      "CapZ"
    ],
    "a": 1,
    "r": "Thymosin keeps a reserve pool of actin monomers available."
  },
  {
    "q": "Vimentin is the characteristic intermediate filament protein of which cell type?",
    "o": [
      "Skin cells",
      "Connective tissue (Mesenchymal cells)",
      "Brain cells",
      "Muscle cells"
    ],
    "a": 1,
    "r": "Vimentin is a marker for mesenchymal origin."
  },
  {
    "q": "Which giant protein integrates the cytoskeletal networks by cross-linking actin, microtubules, and intermediate filaments?",
    "o": [
      "Plectin",
      "Filamin",
      "Spectrin",
      "Vinculin"
    ],
    "a": 0,
    "r": "Plectin acts as a mechanical linker between systems."
  },
  {
    "q": "Hutchinson-Gilford Progeria Syndrome (Progeria) is caused by a defect in which nuclear protein?",
    "o": [
      "Nuclear Pore",
      "Nucleolus",
      "Lamin A",
      "Heterochromatin"
    ],
    "a": 2,
    "r": "A mutation in Lamin A creates a toxic protein called Progerin."
  },
  {
    "q": "What structure within the centrosome serves as the primary nucleator of microtubules?",
    "o": [
      "Plasma membrane",
      "Nuclear Pore",
      "Gamma-Tubulin Ring Complex (gamma-TuRC)",
      "Lysosome"
    ],
    "a": 2,
    "r": "The gamma-TuRC templates new microtubules."
  },
  {
    "q": "Where are non-polar amino acids typically found in a folded cytosolic protein?",
    "o": [
      "On the surface",
      "Exposed to water",
      "Buried in the hydrophobic core",
      "In the active site only"
    ],
    "a": 2,
    "r": "They are buried to avoid water (hydrophobic effect)."
  },
  {
    "q": "Which chemical groups are involved in forming the peptide bond backbone?",
    "o": [
      "Hydroxyl/Hydroxyl",
      "Amino and Carboxyl groups",
      "Sulfhydryl/Sulfhydryl",
      "Methyl/Phosphate"
    ],
    "a": 1,
    "r": "Condensation between the carboxyl and amino groups."
  },
  {
    "q": "A protein consisting of multiple polypeptide subunits exhibits which level of structure?",
    "o": [
      "Primary",
      "Secondary",
      "Tertiary",
      "Quaternary"
    ],
    "a": 3,
    "r": "Quaternary structure refers to the assembly of subunits."
  },
  {
    "q": "Lipid rafts are membrane microdomains enriched in which components?",
    "o": [
      "PC and Sodium",
      "Cholesterol and Sphingolipids",
      "Actin and Myosin",
      "Water and Glucose"
    ],
    "a": 1,
    "r": "The long saturated tails of sphingolipids pack tight with cholesterol."
  },
  {
    "q": "What structure can act as a 'membrane fence' to restrict protein diffusion?",
    "o": [
      "Ion pump",
      "Tight Junction",
      "Sugar chain",
      "ECM"
    ],
    "a": 1,
    "r": "Tight junctions separate apical and basolateral domains."
  },
  {
    "q": "Where are the sensors for the Unfolded Protein Response (UPR) located?",
    "o": [
      "Inner Mitochondria",
      "Plasma Membrane",
      "ER Membrane/Lumen",
      "Golgi"
    ],
    "a": 2,
    "r": "They detect the accumulation of misfolded proteins in the ER."
  },
  {
    "q": "Which Endoplasmic Reticulum (ER) chaperone is a lectin that binds to monoglucosylated proteins?",
    "o": [
      "BiP",
      "Calnexin",
      "Protein Disulfide Isomerase (PDI)",
      "Peptidase"
    ],
    "a": 1,
    "r": "Calnexin binds the single glucose on the N-glycan."
  },
  {
    "q": "How many glucose residues are present on the precursor N-linked oligosaccharide?",
    "o": [
      "1",
      "2",
      "3",
      "None"
    ],
    "a": 2,
    "r": "The 14-sugar block ends with 3 glucoses."
  },
  {
    "q": "What function does the RNA component of the Signal Recognition Particle (SRP) serve?",
    "o": [
      "Coding for protein",
      "Structural scaffold (7S RNA)",
      "Catalytic enzyme",
      "DNA template"
    ],
    "a": 1,
    "r": "It provides the structural backbone for the particle."
  },
  {
    "q": "Which translocator complex handles the insertion of multipass membrane proteins?",
    "o": [
      "Sec61",
      "TIM23",
      "TOM40",
      "Nuclear Pore"
    ],
    "a": 0,
    "r": "Sec61 can open laterally to release transmembrane helices."
  },
  {
    "q": "What is the fate of the LDL receptor after it releases LDL in the endosome?",
    "o": [
      "Degraded in lysosome",
      "Recycled to the Plasma Membrane",
      "Stays in Endosome",
      "Secreted"
    ],
    "a": 1,
    "r": "The receptor is recycled for another round of uptake."
  },
  {
    "q": "Which model describes the Golgi apparatus as a dynamic structure where cisternae mature and move?",
    "o": [
      "Vesicular Transport Model",
      "Cisternal Maturation Model",
      "Static Model",
      "Disappearance Model"
    ],
    "a": 1,
    "r": "Cisternae progress from cis to trans, carrying cargo."
  },
  {
    "q": "Which Rab protein is the specific marker for Early Endosomes?",
    "o": [
      "Rab1",
      "Rab5",
      "Rab7",
      "Rab11"
    ],
    "a": 1,
    "r": "Rab5 organizes the early endosome."
  },
  {
    "q": "What is the most common effect of the Delta-F508 mutation in Cystic Fibrosis Transmembrane Conductance Regulator (CFTR)?",
    "o": [
      "Hyperactivity",
      "Misfolding and ER Retention",
      "Membrane bursting",
      "Channel collapse"
    ],
    "a": 1,
    "r": "The protein works but is stuck in the Endoplasmic Reticulum (ER) and degraded."
  },
  {
    "q": "Which enzyme is responsible for unraveling the SNARE complex after fusion?",
    "o": [
      "Dynamin",
      "NSF",
      "Rab",
      "Clathrin"
    ],
    "a": 1,
    "r": "NSF is an ATPase that recycles SNAREs."
  },
  {
    "q": "Adrenoleukodystrophy (ALD) is caused by a defect in the transport of VLCFAs into which organelle?",
    "o": [
      "Mitochondria",
      "Peroxisome",
      "ER",
      "Lysosome"
    ],
    "a": 1,
    "r": "The ABC transporter for peroxisomal entry is defective."
  },
  {
    "q": "Which protein blocks the myosin-binding sites on actin in resting muscle?",
    "o": [
      "Troponin",
      "Tropomyosin",
      "Dystrophin",
      "Nebulin"
    ],
    "a": 1,
    "r": "Tropomyosin masks the interaction sites until Ca2+ arrives."
  },
  {
    "q": "Which amino acid is known as a 'helix breaker' because it disrupts alpha-helices?",
    "o": [
      "Glycine",
      "Proline",
      "Tryptophan",
      "Histidine"
    ],
    "a": 1,
    "r": "Proline's rigid ring structure kinks the backbone."
  },
  {
    "q": "What is the 'minor groove' of DNA?",
    "o": [
      "A sugar defect",
      "The narrower depression between backbones",
      "An RNA structure",
      "A region with no bases"
    ],
    "a": 1,
    "r": "DNA has a wide Major groove and a narrow Minor groove."
  },
  {
    "q": "Why does DNA with high G-C content have a higher melting temperature (Tm)?",
    "o": [
      "Because of A-T bonds",
      "G-C base pairs have 3 Hydrogen bonds",
      "Phosphate repulsion",
      "Water stabilization"
    ],
    "a": 1,
    "r": "More hydrogen bonds mean more energy is needed to separate strands."
  },
  {
    "q": "Which specialized lipid is a major component of the myelin sheath?",
    "o": [
      "Cholesterol",
      "Sphingomyelin",
      "Phosphatidylinositol",
      "Cardiolipin"
    ],
    "a": 1,
    "r": "Sphingomyelin provides electrical insulation."
  },
  {
    "q": "When a signal sequence is internal (not at N-terminus), what is it called?",
    "o": [
      "Cleaved signal",
      "Signal-anchor (Start-transfer) sequence",
      "Nuclear signal",
      "Ribosome signal"
    ],
    "a": 1,
    "r": "It acts as a transmembrane domain and is not cleaved."
  },
  {
    "q": "How are mitochondria inherited in humans?",
    "o": [
      "Paternally",
      "Maternally",
      "From both parents",
      "De novo"
    ],
    "a": 1,
    "r": "Mitochondria come exclusively from the egg (mother)."
  },
  {
    "q": "Which combination of fatty acid tails yields the maximum membrane fluidity?",
    "o": [
      "Long and Saturated",
      "Short and Unsaturated",
      "Long and Unsaturated",
      "Short and Saturated"
    ],
    "a": 1,
    "r": "Short tails imply less Van der Waals and kinks prevent packing."
  },
  {
    "q": "Which proteins on the vesicle membrane interact with tethering proteins on the target membrane?",
    "o": [
      "SNAREs",
      "Rab effectors (bound to Rab-GTP)",
      "Clathrin",
      "Peptidases"
    ],
    "a": 1,
    "r": "Rab-GTP binds effectors to bridge the distance."
  },
  {
    "q": "The KKXX signal targets membrane proteins to which location?",
    "o": [
      "Secretory vesicles",
      "ER membrane (Retrieval)",
      "Nucleus",
      "Degradation"
    ],
    "a": 1,
    "r": "It is the retrieval signal for ER membrane residents."
  },
  {
    "q": "What is the lipid backbone of a glycolipid?",
    "o": [
      "Glycerol",
      "Ceramide (Sphingosine)",
      "Cholesterol",
      "ATP"
    ],
    "a": 1,
    "r": "Glycolipids are derivatives of sphingosine."
  },
  {
    "q": "Which organelle is famously known as the 'powerhouse of the cell'?",
    "o": [
      "Nucleus",
      "Golgi",
      "Mitochondria",
      "Ribosome"
    ],
    "a": 2,
    "r": "It generates the vast majority of the cell's ATP."
  },
  {
    "q": "For a Type I transmembrane protein, where is the N-terminus located?",
    "o": [
      "Cytosol",
      "ER Lumen / Extracellular",
      "In the membrane",
      "Unknown"
    ],
    "a": 1,
    "r": "Type I has a cleaved N-terminal signal, putting the N-term in the lumen."
  },
  {
    "q": "How many turns of the Calvin Cycle are required to produce one molecule of Glyceraldehyde-3-phosphate (G3P)?",
    "o": [
      "1",
      "3",
      "6",
      "12"
    ],
    "a": 1,
    "r": "3 cycles fix 3 CO2 molecules to yield 1 G3P."
  },
  {
    "q": "What does the Nernst equation calculate regarding ion movement?",
    "o": [
      "Protein color",
      "The equilibrium potential for a single ion",
      "Cell size",
      "ATP production"
    ],
    "a": 1,
    "r": "It calculates the voltage at which chemical and electrical forces are balanced."
  },
  {
    "q": "What is the definition of a liposome?",
    "o": [
      "A protein complex",
      "An artificial spherical lipid bilayer",
      "A sugar structure",
      "A protein fold"
    ],
    "a": 1,
    "r": "Liposomes are synthetic vesicles often used for drug delivery."
  },
  {
    "q": "Which chaperone is known as the 'Master Regulator' of the Endoplasmic Reticulum (ER) stress response?",
    "o": [
      "BiP",
      "Hsp90",
      "Calnexin",
      "Trigger factor"
    ],
    "a": 0,
    "r": "BiP dissociation from sensors triggers the UPR."
  },
  {
    "q": "Which amino acid side chain acts as a physiological buffer near neutral pH?",
    "o": [
      "Lysine",
      "Arginine",
      "Histidine",
      "Aspartate"
    ],
    "a": 2,
    "r": "Histidine's imidazole ring has a pKa close to 6.0."
  },
  {
    "q": "Where is the targeting signal for mitochondrial matrix proteins typically located?",
    "o": [
      "C-terminus",
      "N-terminus",
      "Middle",
      "None"
    ],
    "a": 1,
    "r": "It is an amphipathic alpha-helix at the N-terminus."
  },
  {
    "q": "Mutations in Peroxin (Pex) genes lead to which group of disorders?",
    "o": [
      "Muscular Dystrophy",
      "Peroxisome Biogenesis Disorders (e.g., Zellweger)",
      "Alzheimer's",
      "Cystic Fibrosis"
    ],
    "a": 1,
    "r": "Defects in peroxins (Pex proteins) prevent peroxisome assembly."
  },
  {
    "q": "Which cytoskeletal filament is the most stable and resistant to salt/detergents?",
    "o": [
      "Actin",
      "Microtubules",
      "Intermediate filaments",
      "Septins"
    ],
    "a": 2,
    "r": "Intermediate filaments are strong, ropelike polymers."
  },
  {
    "q": "Which lipid does not form a bilayer but instead forms hydrophobic droplets?",
    "o": [
      "Phospholipid",
      "Cholesterol",
      "Triacylglycerol",
      "Glycolipid"
    ],
    "a": 2,
    "r": "Neutral fats (TGs) form lipid droplets for energy storage."
  },
  {
    "q": "Is the flip-flop of cholesterol across the bilayer fast or slow compared to phospholipids?",
    "o": [
      "Impossible",
      "Very slow",
      "Relatively fast",
      "Needs ATP"
    ],
    "a": 2,
    "r": "Cholesterol's small polar head makes crossing easier."
  },
  {
    "q": "How does an Aquaporin channel prevent the passage of protons (H+)?",
    "o": [
      "By pore size only",
      "By reorienting water molecules (NPA motif)",
      "By a lid",
      "By charge repulsion only"
    ],
    "a": 1,
    "r": "The NPA motif breaks the hydrogen-bond wire needed for proton hopping."
  },
  {
    "q": "Which staining method allowed Camillo Golgi to discover the Golgi apparatus?",
    "o": [
      "Gram stain",
      "Black reaction (Silver nitrate)",
      "Trypan Blue",
      "H&E"
    ],
    "a": 1,
    "r": "The silver impregnation method revealed the structure."
  },
  {
    "q": "Which coat protein is used for vesicular transport from the Golgi to the Endosome?",
    "o": [
      "COPI",
      "COPII",
      "Clathrin",
      "Caveolin"
    ],
    "a": 2,
    "r": "Clathrin mediates traffic from the TGN to endosomes."
  },
  {
    "q": "What does the 'G-C content' of a DNA segment indicate?",
    "o": [
      "Number of genes",
      "The percentage of Guanine and Cytosine bases",
      "Replication speed",
      "Protein content"
    ],
    "a": 1,
    "r": "Higher GC content implies higher melting stability."
  },
  {
    "q": "Where do the reactions of the Tricarboxylic Acid (TCA) cycle takes place?",
    "o": [
      "Cytosol",
      "Mitochondrial Matrix",
      "Intermembrane Space",
      "Smooth ER"
    ],
    "a": 1,
    "r": "The enzymes are located in the Mitochondrial Matrix."
  },
  {
    "q": "What is the net gain of ATP from one molecule of glucose during Glycolysis?",
    "o": [
      "1 ATP",
      "2 ATP",
      "4 ATP",
      "36 ATP"
    ],
    "a": 1,
    "r": "4 ATP produced minus 2 ATP invested equals 2 Net ATP."
  },
  {
    "q": "What is the final electron acceptor in the mitochondrial electron transport chain?",
    "o": [
      "Water",
      "Oxygen (O2)",
      "Nicotinamide Adenine Dinucleotide (NADH)",
      "ATP"
    ],
    "a": 1,
    "r": "Oxygen accepts electrons to form water."
  },
  {
    "q": "Which phospholipid is unique to the mitochondrial inner membrane?",
    "o": [
      "Cholesterol",
      "Cardiolipin (Diphosphatidylglycerol)",
      "Sphingomyelin",
      "Lecithin"
    ],
    "a": 1,
    "r": "Cardiolipin makes the inner membrane impermeable to ions."
  },
  {
    "q": "What is the function of the Translocase of the Outer Membrane (TOM) complex in mitochondria?",
    "o": [
      "Translocator of the Inner Membrane",
      "Translocator of the Outer Membrane",
      "Nuclear transport",
      "Plasma membrane transport"
    ],
    "a": 1,
    "r": "It imports proteins across the outer membrane."
  },
  {
    "q": "What is the function of the SAM complex (Sorting and Assembly Machinery)?",
    "o": [
      "Matrix folding",
      "Insertion of Beta-barrel proteins into the outer membrane",
      "Signal cleavage",
      "Protein degradation"
    ],
    "a": 1,
    "r": "It folds beta-barrel proteins like porins in the outer membrane."
  },
  {
    "q": "Which complex of the Electron Transport Chain is NOT a proton pump?",
    "o": [
      "Complex I",
      "Complex II (Succinate Dehydrogenase)",
      "Complex III",
      "Complex IV"
    ],
    "a": 1,
    "r": "Complex II does not pump protons."
  },
  {
    "q": "What are the two components of the Proton-Motive Force (PMF)?",
    "o": [
      "ATP and ADP",
      "Membrane potential (Voltage) and pH gradient",
      "Glucose and Na+",
      "Sodium and Potassium"
    ],
    "a": 1,
    "r": "It is the sum of the electrical and chemical gradients."
  },
  {
    "q": "Which class of proteins regulates lipid bilayer fusion in mitochondria?",
    "o": [
      "Dynamin-related GTPases (Mitofusins)",
      "Actin",
      "Tubulin",
      "Lipases"
    ],
    "a": 0,
    "r": "Mitofusins (Mfn1/2) and OPA1 mediate fusion."
  },
  {
    "q": "Complex I deficiency is associated with which hereditary disorder?",
    "o": [
      "Cystic Fibrosis",
      "Leber's Hereditary Optic Neuropathy (LHON)",
      "Zellweger Syndrome",
      "Gout"
    ],
    "a": 1,
    "r": "LHON causes blindness due to mitochondrial failure."
  },
  {
    "q": "Where are the enzyme complexes of the Electron Transport Chain located?",
    "o": [
      "Outer Membrane",
      "Inner Mitochondrial Membrane (Cristae)",
      "Matrix",
      "Nucleus"
    ],
    "a": 1,
    "r": "They are embedded in the inner membrane."
  },
  {
    "q": "How many Nicotinamide Adenine Dinucleotide (NADH) molecules are produced per turn of the TCA cycle (per Acetyl-CoA)?",
    "o": [
      "1",
      "2",
      "3",
      "4"
    ],
    "a": 2,
    "r": "3 NADH are produced per turn."
  },
  {
    "q": "What is the enzymatic role of Catalase in the peroxisome?",
    "o": [
      "Produce H2O2",
      "Degrade Hydrogen Peroxide (H2O2)",
      "Synthesize ATP",
      "Replicate DNA"
    ],
    "a": 1,
    "r": "It converts potentially damaging H2O2 into water and oxygen."
  },
  {
    "q": "Where does the oxidation of branched-chain fatty acids (like phytanic acid) primarily occur?",
    "o": [
      "Mitochondria",
      "Lysosomes",
      "Peroxisomes",
      "Cytosol"
    ],
    "a": 2,
    "r": "Peroxisomes perform Alpha-oxidation to shorten branched chains."
  },
  {
    "q": "Refsum disease is characterized by the accumulation of which substance?",
    "o": [
      "Glucose",
      "Phytanic acid",
      "Uric acid",
      "Cholesterol"
    ],
    "a": 1,
    "r": "Defective alpha-oxidation leads to toxic levels of Phytanic acid."
  },
  {
    "q": "What is the functional characteristic of Euchromatin?",
    "o": [
      "Structural support",
      "Transcriptionally silent",
      "Transcriptionally active DNA",
      "Lipid storage"
    ],
    "a": 2,
    "r": "Euchromatin is less condensed and accessible for transcription."
  },
  {
    "q": "What is the primary function of the Nucleolus?",
    "o": [
      "mRNA synthesis",
      "tRNA synthesis",
      "rRNA synthesis and ribosome assembly",
      "Steroid synthesis"
    ],
    "a": 2,
    "r": "It is the site of ribosome biogenesis."
  },
  {
    "q": "Which receptor mediates the export of proteins from the nucleus?",
    "o": [
      "Importin",
      "Exportin (CRM1)",
      "GEF",
      "Ribosome"
    ],
    "a": 1,
    "r": "Exportins bind the Nuclear Export Signal (NES)."
  },
  {
    "q": "What provides the energy for the directionality of nuclear transport?",
    "o": [
      "ATP hydrolysis",
      "Guanosine Triphosphate (GTP) hydrolysis by Ran",
      "Sodium gradient",
      "Light energy"
    ],
    "a": 1,
    "r": "The Ran-GTP/GDP gradient drives transport."
  },
  {
    "q": "What is the function of the Oxidase Assembly (OXA) complex in the mitochondria?",
    "o": [
      "Matrix protein import",
      "Insertion of proteins into the Inner Membrane",
      "Beta-oxidation",
      "Signal cleavage"
    ],
    "a": 1,
    "r": "It inserts proteins synthesized in the mitochondria into the inner membrane."
  },
  {
    "q": "Which mobile electron carrier transfers electrons from Complex III to Complex IV?",
    "o": [
      "Ubiquinone (Q)",
      "Cytochrome c",
      "NADH",
      "Oxygen"
    ],
    "a": 1,
    "r": "Cytochrome c is a soluble protein in the intermembrane space."
  },
  {
    "q": "How many protons are pumped by Complex IV per electron pair?",
    "o": [
      "1",
      "2",
      "4",
      "10"
    ],
    "a": 1,
    "r": "2 protons are pumped per pair of electrons."
  },
  {
    "q": "Which part of the ATP Synthase forms the rotating ring largely within the membrane?",
    "o": [
      "F1 head",
      "F0 (specifically the c-ring)",
      "Stalk",
      "Cytosolic domain"
    ],
    "a": 1,
    "r": "The Fo c-ring rotates as protons flow through."
  },
  {
    "q": "What is the function of Thermogenin (Uncoupling Protein 1)?",
    "o": [
      "ATP synthesis",
      "Heat generation",
      "Blocks TCA cycle",
      "Stops Oxygen use"
    ],
    "a": 1,
    "r": "It uncouples electron transport from ATP synthesis to produce heat."
  },
  {
    "q": "How do peroxisomes replicate?",
    "o": [
      "Mitosis",
      "Fission of existing peroxisomes and de novo formation from ER",
      "They do not replicate",
      "Binary fission like bacteria"
    ],
    "a": 1,
    "r": "They can split or bud from the ER."
  },
  {
    "q": "The synthesis of Heme begins with Glycine and which other molecule?",
    "o": [
      "Alanine",
      "Succinyl-CoA",
      "Lysine",
      "Tryptophan"
    ],
    "a": 1,
    "r": "Glycine and Succinyl-CoA condense in the mitochondria."
  },
  {
    "q": "What triggers the breakdown of the nuclear lamina during mitosis?",
    "o": [
      "Proteolysis",
      "Phosphorylation",
      "Ubiquitination",
      "Folding"
    ],
    "a": 1,
    "r": "Phosphorylation by Mitotic Cyclin-Dependent Kinase (Cdk) causes disassembly."
  },
  {
    "q": "What is the key characteristic of Heterochromatin?",
    "o": [
      "High mutation rate",
      "Highly condensed and transcriptionally silent",
      "RNA bound",
      "Mitochondrial DNA"
    ],
    "a": 1,
    "r": "It acts as a silencer for gene expression."
  },
  {
    "q": "What effect does the binding of SRP to the signal sequence have on translation?",
    "o": [
      "Speeds up elongation",
      "Causes a transient translation arrest",
      "Terminates translation immediately",
      "Primes the ribosome"
    ],
    "a": 1,
    "r": "It pauses translation until the ribosome docks at the ER."
  },
  {
    "q": "What is a major clinical symptom of X-linked Adrenoleukodystrophy (X-ALD)?",
    "o": [
      "Skin rash",
      "Neurological deficits due to myelin loss",
      "Muscle hypertrophy",
      "Vision enhancement"
    ],
    "a": 1,
    "r": "Accumulation of Very Long Chain Fatty Acids (VLCFAs) destroys myelin."
  },
  {
    "q": "Approximately how much ATP is yielded from the oxidation of one Flavin Adenine Dinucleotide (FADH2)?",
    "o": [
      "1.5",
      "2.5",
      "3.0",
      "36"
    ],
    "a": 0,
    "r": "Since it enters at Complex II, it yields ~1.5 ATP."
  },
  {
    "q": "Which enzyme complex converts Pyruvate into Acetyl-CoA?",
    "o": [
      "Hexokinase",
      "Pyruvate Dehydrogenase Complex (PDC)",
      "Aldolase",
      "Lipase"
    ],
    "a": 1,
    "r": "PDC links Glycolysis to the TCA cycle."
  },
  {
    "q": "What is the primary biological purpose of fermentation in anaerobic conditions?",
    "o": [
      "To enter mitochondria",
      "To regenerate NAD+ for Glycolysis",
      "To degrade glucose",
      "To bind ATP"
    ],
    "a": 1,
    "r": "It regenerates electron carriers (NAD+) to keep glycolysis running."
  },
  {
    "q": "Which protein exchanges ADP and ATP across the inner mitochondrial membrane?",
    "o": [
      "GLUT transporter",
      "Aquaporin",
      "Adenine Nucleotide Translocase (ANT)",
      "Na+/K+ Pump"
    ],
    "a": 2,
    "r": "ANT is an antiporter moving ATP out and ADP in."
  },
  {
    "q": "Where is the phospholipid Cardiolipin synthesized?",
    "o": [
      "ER",
      "Golgi Apparatus",
      "Inner Mitochondrial Membrane",
      "Plasma Membrane"
    ],
    "a": 2,
    "r": "It is synthesized in the mitochondria where it is used."
  },
  {
    "q": "What is the function of Porins in the mitochondrial outer membrane?",
    "o": [
      "Active transport",
      "Form aqueous channels for small molecules",
      "Pump protons",
      "Bind actin"
    ],
    "a": 1,
    "r": "They allow free diffusion of molecules < 5000 Daltons."
  },
  {
    "q": "According to the endosymbiotic theory, what is the origin of mitochondria?",
    "o": [
      "Viruses",
      "Fungi",
      "Aerobic Proteobacteria",
      "Archaea"
    ],
    "a": 2,
    "r": "They evolved from engulfed aerobic bacteria."
  },
  {
    "q": "Which enzyme is shared between the TCA cycle and the Electron Transport Chain?",
    "o": [
      "Citrate Synthase",
      "Succinate Dehydrogenase (Complex II)",
      "Aconitase",
      "Isocitrate Dehydrogenase"
    ],
    "a": 1,
    "r": "Succinate Dehydrogenase is physically part of both pathways."
  },
  {
    "q": "What is the result of chemiosmosis in mitochondria?",
    "o": [
      "Sugar breakdown",
      "Coupling of proton gradient to ATP synthesis",
      "Cell movement",
      "DNA replication"
    ],
    "a": 1,
    "r": "The proton motive force drives ATP synthase."
  },
  {
    "q": "What event triggers 'catastrophe' (rapid shrinkage) of a microtubule?",
    "o": [
      "Guanosine Triphosphate (GTP) hydrolysis exceeds subunit addition (Loss of GTP cap)",
      "Hitting the cell membrane",
      "Loss of ATP",
      "Dynein binding"
    ],
    "a": 0,
    "r": "Loss of the stabilizing Guanosine Triphosphate (GTP) cap leads to depolymerization."
  },
  {
    "q": "What is the purpose of the 'trans-SNARE complex' (SNARE-pin)?",
    "o": [
      "Bind Rab",
      "Drive membrane fusion by forcing bilayers together",
      "Prevent exocytosis",
      "Generate ATP"
    ],
    "a": 1,
    "r": "The winding of helices releases energy to fuse membranes."
  },
  {
    "q": "What is the ultimate outcome of prolonged, unresolvable ER stress?",
    "o": [
      "Apoptosis (Cell death)",
      "Hyperactivity",
      "Slowed growth",
      "Membrane fusion"
    ],
    "a": 0,
    "r": "The Unfolded Protein Response (UPR) eventually triggers apoptotic pathways."
  },
  {
    "q": "O-linked glycosylation involves the attachment of sugars to which amino acids?",
    "o": [
      "Asparagine",
      "Serine or Threonine",
      "Cysteine",
      "Proline"
    ],
    "a": 1,
    "r": "The hydroxyl groups of Ser/Thr are targets."
  },
  {
    "q": "What is the approximate pH of the mitochondrial matrix?",
    "o": [
      "5 (Acidic)",
      "7 (Neutral)",
      "8 (Alkaline)",
      "9 (Very Alkaline)"
    ],
    "a": 2,
    "r": "Proton pumping makes the matrix alkaline (pH ~8)."
  },
  {
    "q": "Which chaperone aids the SAM complex in inserting beta-barrels into the outer membrane?",
    "o": [
      "Chaperonins",
      "Mitochondrial Hsp70",
      "Sec61",
      "BiP"
    ],
    "a": 1,
    "r": "Small TIM chaperones in the Intermembrane Space (IMS) prevent aggregation."
  },
  {
    "q": "Which metabolic pathway produces the most CO2?",
    "o": [
      "Glycolysis",
      "TCA (Krebs) Cycle",
      "Electron Transport Chain",
      "Beta-oxidation"
    ],
    "a": 1,
    "r": "The TCA cycle fully oxidizes acetyl-CoA to CO2."
  },
  {
    "q": "What is the function of N-glycanase (PNGase) in Endoplasmic Reticulum-associated Degradation (ERAD)?",
    "o": [
      "Add sugars",
      "Remove N-linked glycans before proteasomal degradation",
      "Form peptide bonds",
      "Bind BiP"
    ],
    "a": 1,
    "r": "Proteins must be deglycosylated to enter the proteasome."
  },
  {
    "q": "What was the classic Pulse-Chase experiment used to discover?",
    "o": [
      "FRAP dynamics",
      "The secretory pathway protein trafficking Order",
      "PAGE separation",
      "NMR structure"
    ],
    "a": 1,
    "r": "George Palade tracked proteins from ER to Golgi to vesicles."
  },
  {
    "q": "Approximately how many different proteins (nucleoporins) make up the Nuclear Pore Complex?",
    "o": [
      "3",
      "30",
      "300",
      "3000"
    ],
    "a": 1,
    "r": "The Nuclear Pore Complex (NPC) is composed of ~30 distinct nucleoporins."
  },
  {
    "q": "How do small molecules (<40 kDa) enter the nucleus?",
    "o": [
      "Active Transport only",
      "Passive diffusion through NPCs",
      "Vesicle fusion",
      "Ion channels"
    ],
    "a": 1,
    "r": "They diffuse freely through the pore channels."
  },
  {
    "q": "Where is the Ran-Guanosine Nucleotide Exchange Factor (GEF) located?",
    "o": [
      "Cytosol",
      "Mitochondria",
      "Nucleus (Chromatin-bound)",
      "Golgi"
    ],
    "a": 2,
    "r": "Chromatin binding ensures Ran-GTP is generated inside the nucleus."
  },
  {
    "q": "Where in the nucleus does rRNA transcription take place?",
    "o": [
      "Granular Component",
      "Fibrillar Center / Dense Fibrillar Component",
      "Nuclear Matrix",
      "Nuclear Envelope"
    ],
    "a": 1,
    "r": "The nucleolus Fibrillar centers are the sites of transcription."
  },
  {
    "q": "What are the protein translocators in the outer and inner chloroplast membranes called?",
    "o": [
      "TOM/TIM",
      "TOC/TIC",
      "SAM/OXA",
      "Sec61/SecY"
    ],
    "a": 1,
    "r": "Translocon at the Outer/Inner Envelope of Chloroplasts."
  },
  {
    "q": "Why is the peptide bond planar and rigid?",
    "o": [
      "C-alpha constraints",
      "Partial double-bond character (Resonance)",
      "R-group steric hindrance",
      "Hydrogen bonding"
    ],
    "a": 1,
    "r": "Resonance prevents rotation around the C-N bond."
  },
  {
    "q": "What does a Ramachandran Plot visualize?",
    "o": [
      "Free energy",
      "Allowed combinations of Phi and Psi angles",
      "Amino acid sequence",
      "Melting point"
    ],
    "a": 1,
    "r": "It shows sterically allowed backbone conformations."
  },
  {
    "q": "Which amino acid is considered a 'helix breaker'?",
    "o": [
      "Leucine",
      "Proline",
      "Alanine",
      "Valine"
    ],
    "a": 1,
    "r": "Proline's cyclic side chain disrupts the H-bond network."
  },
  {
    "q": "How many base pairs are there per complete turn of the B-DNA helix?",
    "o": [
      "5",
      "10.5",
      "15",
      "20"
    ],
    "a": 1,
    "r": "There are approximately 10.5 base pairs per helical turn."
  },
  {
    "q": "Which polyunsaturated fatty acid is the precursor for prostaglandins?",
    "o": [
      "Cholesterol",
      "Arachidonic acid",
      "Sphingosine",
      "Stearic acid"
    ],
    "a": 1,
    "r": "Arachidonic acid is cleaved from phospholipids to make signaling molecules."
  },
  {
    "q": "What does the 'Fluid Mosaic Model' describe about cell membranes?",
    "o": [
      "They are made of water",
      "They are a heterogeneous mixture of lipids and proteins",
      "They move fast",
      "They are colorful"
    ],
    "a": 1,
    "r": "The membrane is a fluid structure with a 'mosaic' of various proteins embedded in it."
  },
  {
    "q": "Which protein serves as a marker for the Trans-Golgi Network (TGN)?",
    "o": [
      "Calnexin",
      "TGN38",
      "Galactosyltransferase",
      "BiP"
    ],
    "a": 1,
    "r": "TGN38 is a specific integral membrane protein of the TGN."
  },
  {
    "q": "What is the effect of the fungal toxin Brefeldin A on the Golgi apparatus?",
    "o": [
      "Stabilizes actin",
      "Causes the Golgi to collapse back into the ER",
      "Blocks ATP synthesis",
      " degrades DNA"
    ],
    "a": 1,
    "r": "It inhibits ADP-Ribosylation Factor 1 (ARF1) activation, causing retrograde collapse."
  },
  {
    "q": "What is the primary cause of Lysosomal Storage Diseases (LSDs)?",
    "o": [
      "DNA replication failure",
      "Defects in lysosomal hydrolases or transport proteins",
      "Mitochondrial DNA mutations",
      "Actin polymerization"
    ],
    "a": 1,
    "r": "Accumulation of undigested substrates destroys cell function."
  },
  {
    "q": "Which cellular component occupies the largest volume in a hepatocyte?",
    "o": [
      "Nucleus",
      "ER",
      "Mitochondria",
      "Cytosol"
    ],
    "a": 3,
    "r": "The cytosol makes up more than half (~54%) of the cell volume."
  },
  {
    "q": "What is the derivation of the name 'Peroxisome'?",
    "o": [
      "Cell eater",
      "Peroxide-producing/degrading body",
      "Energy body",
      "Messenger body"
    ],
    "a": 1,
    "r": "Named for its ability to produce and degrade Hydrogen Peroxide."
  },
  {
    "q": "What is the typical pH inside a Lysosome?",
    "o": [
      "5 (Acidic)",
      "7 (Neutral)",
      "8 (Alkaline)",
      "9 (Very Alkaline)"
    ],
    "a": 0,
    "r": "Acid hydrolases require an acidic environment (pH ~5)."
  },
  {
    "q": "Which family of proteins is essential for the process of Autophagy?",
    "o": [
      "Clathrin",
      "SNAREs",
      "Atg (Autophagy-related) proteins",
      "Rab proteins"
    ],
    "a": 2,
    "r": "Atg proteins coordinate autophagosome formation."
  },
  {
    "q": "Which lipid translocator is NOT a P-type pump and does not require ATP directly?",
    "o": [
      "Scramblase",
      "Aminophospholipid translocase",
      "Lipase",
      "Kinase"
    ],
    "a": 0,
    "r": "Scramblases move lipids bidirectionally down their gradient."
  },
  {
    "q": "In which direction do protons flow through ATP Synthase to generate ATP?",
    "o": [
      "From Matrix to IMS",
      "From Intermembrane Space (IMS) to Matrix",
      "From Cytosol to Matrix",
      "From ER to Matrix"
    ],
    "a": 1,
    "r": "Protons flow down their gradient back into the matrix."
  },
  {
    "q": "Which mobile electron carrier is located in the Intermembrane Space?",
    "o": [
      "Ubiquinone",
      "Cytochrome c",
      "Nicotinamide Adenine Dinucleotide (NADH)",
      "Flavin Adenine Dinucleotide (FADH2)"
    ],
    "a": 1,
    "r": "Cytochrome c shuttles electrons on the outer surface of the Inner Mitochondrial Membrane (IMM)."
  },
  {
    "q": "What defines the Mitochondrial Matrix?",
    "o": [
      "Mitochondrial DNA",
      "The space enclosed by the Inner Mitochondrial Membrane",
      "Intermembrane Space",
      "Cristae folds"
    ],
    "a": 1,
    "r": "It is the innermost compartment containing TCA enzymes."
  },
  {
    "q": "How many membranes must a protein cross to reach the Mitochondrial Matrix from the cytosol?",
    "o": [
      "0",
      "1",
      "2",
      "3"
    ],
    "a": 2,
    "r": "It crosses both the Outer and Inner membranes."
  },
  {
    "q": "Which targeting signal is typically NOT cleaved after transport?",
    "o": [
      "ER signal",
      "Mitochondrial signal",
      "Nuclear Localization Signal (NLS)",
      "Thylakoid signal"
    ],
    "a": 2,
    "r": "Nuclear proteins often need to re-enter after mitosis."
  },
  {
    "q": "What is the fate of Ran-GTP after it enters the cytoplasm?",
    "o": [
      "Converted to ATP",
      "Hydrolyzed to Ran-Guanosine Diphosphate (GDP) by Ran-GTPase Activating Protein (GAP)",
      "Synthesized",
      "Remains Ran-GTP"
    ],
    "a": 1,
    "r": "Cytosolic Ran-GAP triggers GTP hydrolysis."
  },
  {
    "q": "Leigh Syndrome disrupts energy production leading to what primary symptom?",
    "o": [
      "Skin rash",
      "Subacute Necrotizing Encephalopathy",
      "Muscle hypertrophy",
      "Enhanced vision"
    ],
    "a": 1,
    "r": "It causes severe neurodegeneration in the brainstem."
  },
  {
    "q": "What is the common name for Complex IV of the Electron Transport Chain?",
    "o": [
      "NADH Dehydrogenase",
      "Succinate Dehydrogenase",
      "Cytochrome bc1 complex",
      "Cytochrome c Oxidase"
    ],
    "a": 3,
    "r": "It oxidizes cytochrome c and reduces Oxygen."
  },
  {
    "q": "Which reaction converts Succinate to Fumarate?",
    "o": [
      "Citrate Synthase",
      "Succinate Dehydrogenase",
      "Aconitase",
      "Isocitrate Dehydrogenase"
    ],
    "a": 1,
    "r": "This is the oxidation step performed by Complex II."
  },
  {
    "q": "ER Membrane %?",
    "o": [
      "1",
      "10",
      ">50",
      "100"
    ],
    "a": 2,
    "r": "Major portion of cell membrane."
  },
  {
    "q": "Max Ca2+ resting?",
    "o": [
      "Cyto",
      "Nucleus",
      "Endoplasmic Reticulum (ER) Lumen",
      "Matrix"
    ],
    "a": 2,
    "r": "ER stores Calcium."
  },
  {
    "q": "Golgi-Centrosome proximity?",
    "o": [
      "ER",
      "Golgi",
      "Lyso",
      "Mito"
    ],
    "a": 1,
    "r": "Golgi is MTOC-associated."
  },
  {
    "q": "g-TuRC role?",
    "o": [
      "Alpha",
      "Beta",
      "Minus anchor",
      "Centrin"
    ],
    "a": 2,
    "r": "Nucleates minus ends."
  },
  {
    "q": "Fluid Mosaic movement?",
    "o": [
      "Walk",
      "Lateral diffusion",
      "Hop",
      "Spin"
    ],
    "a": 1,
    "r": "Lateral lipid movement."
  },
  {
    "q": "SRP removal?",
    "o": [
      "Translocator",
      "SRP Receptor",
      "BiP",
      "PDI"
    ],
    "a": 1,
    "r": "Interaction with receptor."
  },
  {
    "q": "Mito protein state cyto?",
    "o": [
      "Heat",
      "Cold",
      "Unfolded (Hsp70)",
      "Lipid"
    ],
    "a": 2,
    "r": "Kept unfolded for import."
  },
  {
    "q": "Quiz total Qs?",
    "o": [
      "10",
      "100",
      "200",
      "300"
    ],
    "a": 3,
    "r": "300 complete."
  },
  {
    "q": "Helicase role?",
    "o": [
      "Join",
      "Unwind",
      "Stabilize",
      "Synth"
    ],
    "a": 1,
    "r": "Breaks H-bonds between bases."
  },
  {
    "q": "SSB protein role?",
    "o": [
      "Torsion",
      "Glue",
      "Stabilize single strand",
      "Prime"
    ],
    "a": 2,
    "r": "Prevents re-annealing."
  },
  {
    "q": "Semi-conservative meaning?",
    "o": [
      "Half degraded",
      "1 old/1 new per helix",
      "1 template",
      "Nuclear"
    ],
    "a": 1,
    "r": "Meselson-Stahl result."
  },
  {
    "q": "What is the approximate error rate of DNA replication after proofreading and mismatch repair?",
    "o": [
      "1 in 100",
      "1 in 10,000",
      "1 in 1 million",
      "1 in 1 billion"
    ],
    "a": 3,
    "r": "High fidelity is achieved through multiple repair steps."
  },
  {
    "q": "Which repair pathway fixes deaminated bases (like Cytosine to Uracil)?",
    "o": [
      "NER",
      "Base Excision Repair (BER)",
      "Mismatch Repair",
      "Non-Homologous End Joining (NHEJ)"
    ],
    "a": 1,
    "r": "Glycosylases remove the damaged base first."
  },
  {
    "q": "What is the function of the 5' Cap on mRNA?",
    "o": [
      "Encodes amino acids",
      "Protects RNA and recruits the ribosome",
      "Marks the end",
      "Initiates transcription"
    ],
    "a": 1,
    "r": "It protects against degradation and helps translation initiation."
  },
  {
    "q": "What are snRNPs (Small Nuclear Ribonucleoproteins)?",
    "o": [
      "Pure proteins",
      "Complexes of snRNA and proteins making up the Spliceosome",
      "Mitochondrial factors",
      "Repair enzymes"
    ],
    "a": 1,
    "r": "They recognize splice sites and catalyze splicing."
  },
  {
    "q": "Where is the Poly-A tail added to the mRNA?",
    "o": [
      "At the 5' end",
      "At the 3' end",
      "In the middle",
      "At the start codon"
    ],
    "a": 1,
    "r": "It protects the 3' end and aids stability."
  },
  {
    "q": "What is the biological significance of Alternative Splicing?",
    "o": [
      "It is a defect",
      "It creates protein diversity from a single gene",
      "It degrades mRNA",
      "It allows introns to be translated"
    ],
    "a": 1,
    "r": "One gene can code for multiple protein isoforms."
  },
  {
    "q": "What does it mean that the Genetic Code is 'degenerate'?",
    "o": [
      "It is broken",
      "Multiple codons can specify the same amino acid",
      "One codon specifies multiple amino acids",
      "It changes constantly"
    ],
    "a": 1,
    "r": "There is redundancy (64 codons for 20 amino acids)."
  },
  {
    "q": "Which part of the tRNA recognizes the codon on the mRNA?",
    "o": [
      "Acceptor arm",
      "D-loop",
      "Anticodon loop",
      "T-loop"
    ],
    "a": 2,
    "r": "The anticodon base-pairs with the mRNA codon."
  },
  {
    "q": "What is 'tRNA Charging'?",
    "o": [
      "Synthesizing tRNA",
      "Attaching the correct amino acid to the tRNA",
      "Translating mRNA",
      "Repairing tRNA"
    ],
    "a": 1,
    "r": "Aminoacyl-tRNA synthetases attach the amino acid (charging)."
  },
  {
    "q": "What does the 'Wobble Hypothesis' explain?",
    "o": [
      "Ribosome movement",
      "Flexibility in base-pairing at the 3rd codon position",
      "Twisted DNA",
      "Protein degradation"
    ],
    "a": 1,
    "r": "It allows one tRNA to recognize multiple codons."
  },
  {
    "q": "Which site on the ribosome holds the growing polypeptide chain?",
    "o": [
      "A (Aminoacyl) site",
      "P (Peptidyl) site",
      "E (Exit) site",
      "S site"
    ],
    "a": 1,
    "r": "The P-site holds the tRNA linked to the polypeptide."
  },
  {
    "q": "What acts as the catalyst for peptide bond formation (Peptidyl Transferase)?",
    "o": [
      "Ribosomal protein",
      "rRNA (Ribozyme)",
      "ATP",
      "mRNA"
    ],
    "a": 1,
    "r": "The 23S/28S rRNA acts as the enzyme (Ribozyme)."
  },
  {
    "q": "What binds to the Stop Codon to terminate translation?",
    "o": [
      "Start tRNA",
      "Promoter",
      "Release Factor (protein)",
      "Intron"
    ],
    "a": 2,
    "r": "Release Factors mimic tRNA and hydrolyze the bond."
  },
  {
    "q": "What is a Polysome?",
    "o": [
      "An organelle",
      "Multiple ribosomes translating a single mRNA simultaneously",
      "A DNA complex",
      "A lipid raft"
    ],
    "a": 1,
    "r": "It increases the efficiency of protein synthesis."
  },
  {
    "q": "How do many antibiotics function?",
    "o": [
      "Block replication",
      "Target bacterial ribosomes (Translation)",
      "Destroy lipids",
      "Break cell wall"
    ],
    "a": 1,
    "r": "They exploit differences between prokaryotic and eukaryotic ribosomes."
  },
  {
    "q": "What is the primary role of Transcription Factors?",
    "o": [
      "Degrade DNA",
      "Regulate the initiation of transcription",
      "Replicate DNA",
      "Slice mRNA"
    ],
    "a": 1,
    "r": "They recruit RNA Polymerase to the promoter."
  },
  {
    "q": "What is an example of an enzyme that functions as a Reverse Transcriptase?",
    "o": [
      "Helicase",
      "RNA Polymerase",
      "Telomerase",
      "Topoisomerase"
    ],
    "a": 2,
    "r": "Telomerase uses an RNA template to synthesize DNA."
  },
  {
    "q": "What does an A-G mismatch in DNA result in?",
    "o": [
      "Sugar damage",
      "Phosphate damage",
      "Distortion of the backbone",
      "Nucleolus degradation"
    ],
    "a": 2,
    "r": "The mismatch creates a bulge that is recognized by repair enzymes."
  },
  {
    "q": "What does Nucleotide Excision Repair (NER) remove?",
    "o": [
      "A single base",
      "A short oligonucleotide patch",
      "An entire chromosome",
      "The 5' Cap"
    ],
    "a": 1,
    "r": "It excises a patch of nucleotides around the damage."
  },
  {
    "q": "What is the function of the Shine-Dalgarno sequence?",
    "o": [
      "Eukaryotic initiation",
      "Ribosome binding site in bacteria",
      "Archaea initiation",
      "Viral entry"
    ],
    "a": 1,
    "r": "It aligns the ribosome with the start codon in prokaryotes."
  },
  {
    "q": "What provides the energy for Translocation during translation?",
    "o": [
      "Initiation factors",
      "Peptide bond formation",
      "GTP hydrolysis by EF-G",
      "Termination factors"
    ],
    "a": 2,
    "r": "Elongation Factor G (EF-G) hydrolyzes GTP to move the ribosome."
  },
  {
    "q": "What type of mutation results in a different amino acid being incorporated?",
    "o": [
      "Silent mutation",
      "Missense mutation",
      "Nonsense mutation",
      "Frameshift mutation"
    ],
    "a": 1,
    "r": "A change in the codon sequence leads to a different amino acid."
  },
  {
    "q": "What typically causes a Frameshift mutation?",
    "o": [
      "Single base substitution",
      "Insertion or Deletion of non-multiples of 3",
      "UV light",
      "Heat shock"
    ],
    "a": 1,
    "r": "It shifts the reading frame of the ribosome."
  },
  {
    "q": "What are the core components of the Spliceosome?",
    "o": [
      "Lipids",
      "snRNAs and proteins",
      "DNA",
      "Tubulin"
    ],
    "a": 1,
    "r": "It is a ribozyme complex driven by snRNAs."
  },
  {
    "q": "What is the role of the Sliding Clamp (Proliferating Cell Nuclear Antigen - PCNA) in DNA replication?",
    "o": [
      "Unzip DNA",
      "Increase DNA Polymerase processivity",
      "Synthesize primer",
      "Remove primers"
    ],
    "a": 1,
    "r": "It prevents the polymerase from falling off the DNA."
  },
  {
    "q": "What type of bond connects the nitrogenous base to the sugar?",
    "o": [
      "Phosphodiester",
      "N-glycosidic bond",
      "Hydrogen bond",
      "Peptide bond"
    ],
    "a": 1,
    "r": "It links the base to the 1' carbon of the sugar."
  },
  {
    "q": "Which molecule acts as the 'adapter' between the genetic code and proteins?",
    "o": [
      "mRNA",
      "tRNA",
      "rRNA",
      "snRNA"
    ],
    "a": 1,
    "r": "tRNA matches amino acids to codons."
  },
  {
    "q": "What chemical group is found at the 3' end of a DNA strand?",
    "o": [
      "Phosphate",
      "Free Hydroxyl (-OH) group",
      "Methyl",
      "Amino"
    ],
    "a": 1,
    "r": "DNA synthesis requires a free 3'-OH."
  },
  {
    "q": "In which direction is the template strand read for Lagging Strand synthesis?",
    "o": [
      "5' to 3'",
      "3' to 5'",
      "Parallel",
      "Perpendicular"
    ],
    "a": 0,
    "r": "This necessitates discontinuous Okazaki fragments."
  },
  {
    "q": "Which enzyme is used to seal 'nicks' in the DNA backbone?",
    "o": [
      "Helicase",
      "Primase",
      "DNA Ligase",
      "Nuclease"
    ],
    "a": 2,
    "r": "It forms a phosphodiester bond to repair the break."
  },
  {
    "q": "How many nucleotides make up a single codon?",
    "o": [
      "1",
      "2",
      "3",
      "4"
    ],
    "a": 2,
    "r": "The genetic code is a triplet code."
  },
  {
    "q": "What is the fundamental unit of chromatin structure?",
    "o": [
      "Centromere",
      "Nucleosome",
      "Ribosome",
      "Repair complex"
    ],
    "a": 1,
    "r": "DNA wrapped around a histone octamer."
  },
  {
    "q": "What is the sequence of the Coding Strand identical to (except T for U)?",
    "o": [
      "Template strand",
      "mRNA",
      "Degraded DNA",
      "Introns"
    ],
    "a": 1,
    "r": "The coding strand matches the RNA transcript."
  },
  {
    "q": "Where does transcription occur in a eukaryotic cell?",
    "o": [
      "Cytosol",
      "Ribosome",
      "Nucleus",
      "Mitochondrial Matrix"
    ],
    "a": 2,
    "r": "DNA is transcribed to RNA inside the nucleus."
  },
  {
    "q": "Which double-strand break repair pathway is considered 'error-prone'?",
    "o": [
      "NER",
      "BER",
      "Non-Homologous End Joining (NHEJ)",
      "Mismatch Repair"
    ],
    "a": 2,
    "r": "NHEJ simply ligates ends and often loses bases."
  },
  {
    "q": "Which type of RNA is the most abundant in the cell?",
    "o": [
      "mRNA",
      "tRNA",
      "rRNA",
      "snRNA"
    ],
    "a": 2,
    "r": "rRNA makes up ~80% of total cellular RNA."
  },
  {
    "q": "What is the total number of questions included in the Milestone 4 set?",
    "o": [
      "100",
      "200",
      "300",
      "400"
    ],
    "a": 3,
    "r": "There are 400 total questions."
  },
  {
    "q": "G-protein coupled receptors (GPCRs) have how many transmembrane segments?",
    "o": [
      "1",
      "3",
      "7",
      "12"
    ],
    "a": 2,
    "r": "GPCRs are 7-pass transmembrane proteins."
  },
  {
    "q": "Which molecule acts as the 'switch' to activate a heterotrimeric G-protein?",
    "o": [
      "ATP",
      "GTP replacing GDP",
      "cAMP",
      "Calcium"
    ],
    "a": 1,
    "r": "Exchange of GDP for GTP on the alpha subunit triggers activation."
  },
  {
    "q": "Adenylate cyclase is the enzyme that produces which second messenger?",
    "o": [
      "Inositol Trisphosphate (IP3)",
      "Diacylglycerol (DAG)",
      "Cyclic Adenosine Monophosphate (cAMP)",
      "Nitric Oxide"
    ],
    "a": 2,
    "r": "It converts ATP to cyclic AMP."
  },
  {
    "q": "Phospholipase C (PLC) cleaves Phosphatidylinositol 4,5-bisphosphate (PIP2) into which two signaling molecules?",
    "o": [
      "ATP and ADP",
      "cAMP and cGMP",
      "Inositol Trisphosphate (IP3) and Diacylglycerol (DAG)",
      "Glucose and Lipid"
    ],
    "a": 2,
    "r": "IP3 releases Calcium; DAG activates Protein Kinase C (PKC)."
  },
  {
    "q": "What is the role of 'Calmodulin' in the cell?",
    "o": [
      "Produces ATP",
      "Binds Calcium to regulate other proteins",
      "Synthesizes DNA",
      "Degrades mRNA"
    ],
    "a": 1,
    "r": "It is a universal Calcium-responsive relay protein."
  },
  {
    "q": "Receptor Tyrosine Kinases (RTKs) are activated primarily by:",
    "o": [
      "Single binding",
      "Dimerization and autophosphorylation",
      "G-proteins",
      "Hydrolysis"
    ],
    "a": 1,
    "r": "Ligand binding brings two receptors together to cross-phosphorylate."
  },
  {
    "q": "Ras is a monomeric GTPase that often initiates which signaling cascade?",
    "o": [
      "JAK/STAT",
      "MAP Kinase pathway",
      "UPR",
      "Glycolysis"
    ],
    "a": 1,
    "r": "Ras-Raf-MEK-ERK pathway regulates cell growth."
  },
  {
    "q": "Nitric Oxide (NO) signaling causes smooth muscle relaxation by activating:",
    "o": [
      "Adenylate cyclase",
      "Guanylate cyclase (making Cyclic Guanosine Monophosphate - cGMP)",
      "Proteasome",
      "Na+ pump"
    ],
    "a": 1,
    "r": "cGMP activates protein kinase G to induce relaxation."
  },
  {
    "q": "Where are the receptors for steroid hormones (like cortisol or estrogen) usually found?",
    "o": [
      "Cell surface",
      "In the cytosol or nucleus",
      "Inside mitochondria",
      "Attached to actin"
    ],
    "a": 1,
    "r": "Steroids are hydrophobic and cross the membrane to find internal receptors."
  },
  {
    "q": "The Janus Kinase / Signal Transducer and Activator of Transcription (JAK/STAT) pathway is commonly used by which types of signals?",
    "o": [
      "Adrenaline",
      "Light",
      "Cytokines and Growth Factors",
      "Ions"
    ],
    "a": 2,
    "r": "Important for immune response and hematopoiesis."
  },
  {
    "q": "Which type of signaling involves a signal molecule remaining bound to the surface of the signaling cell?",
    "o": [
      "Endocrine",
      "Paracrine",
      "Contact-dependent (Juxtacrine)",
      "Synaptic"
    ],
    "a": 2,
    "r": "Example: Notch/Delta signaling in development."
  },
  {
    "q": "Which proteins regulate the activity of CDKs (Cyclin-dependent kinases)?",
    "o": [
      "Actins",
      "Cyclins",
      "Lipids",
      "Histones"
    ],
    "a": 1,
    "r": "CDKs are inactive without their specific cyclin partner."
  },
  {
    "q": "p53 is known as the 'Guardian of the Genome' because it:",
    "o": [
      "Replicates DNA",
      "Triggers cell cycle arrest or apoptosis in response to DNA damage",
      "Synthesizes glucose",
      "Pumps sodium"
    ],
    "a": 1,
    "r": "It prevents the propagation of mutations."
  },
  {
    "q": "Which protein prevents entry into S-phase by binding and inhibiting E2F transcription factors?",
    "o": [
      "p53",
      "Rb (Retinoblastoma protein)",
      "Cyclin D",
      "Cdk2"
    ],
    "a": 1,
    "r": "Phosphorylation of Rb by Cdk releases E2F to start S-phase."
  },
  {
    "q": "Chromatin condensation and spindle assembly begin in which stage of mitosis?",
    "o": [
      "Prophase",
      "Metaphase",
      "Anaphase",
      "Telophase"
    ],
    "a": 0,
    "r": "The first step of M-phase."
  },
  {
    "q": "What marks the start of Anaphase?",
    "o": [
      "Nuclear envelope breakdown",
      "Alignment at the plate",
      "Cleavage of cohesins and separation of sister chromatids",
      "Cytokinesis"
    ],
    "a": 2,
    "r": "The Anaphase-Promoting Complex/Cyclosome (APC/C) triggers the destruction of securin, allowing separase to cut cohesins."
  },
  {
    "q": "The 'Contractile Ring' used for cytokinesis in animal cells is made of:",
    "o": [
      "Microtubules",
      "Actin and Myosin II",
      "Intermediate filaments",
      "Septins"
    ],
    "a": 1,
    "r": "It pinches the cell into two daughter cells."
  },
  {
    "q": "What is a 'Chiasma'?",
    "o": [
      "A type of organelle",
      "The physical point of contact between non-sister chromatids during crossing over",
      "A DNA repair enzyme",
      "A mitochondrial fold"
    ],
    "a": 1,
    "r": "Visible evidence of recombination."
  },
  {
    "q": "Nondisjunction during meiosis results in:",
    "o": [
      "Faster division",
      "Aneuploidy (incorrect number of chromosomes)",
      "Normal gametes",
      "Cell death only"
    ],
    "a": 1,
    "r": "Can lead to conditions like Down Syndrome (Trisomy 21)."
  },
  {
    "q": "Apoptosis is characterized by:",
    "o": [
      "Cell swelling and bursting",
      "Inflammation",
      "Cell shrinkage, DNA fragmentation, and phagocytosis without inflammation",
      "ATP gain"
    ],
    "a": 2,
    "r": "Controlled, programmed cell death."
  },
  {
    "q": "Which enzymes are the main executioners of apoptosis?",
    "o": [
      "Kinases",
      "Lipases",
      "Caspases",
      "Polymerases"
    ],
    "a": 2,
    "r": "Cysteine-dependent aspartate-directed proteases."
  },
  {
    "q": "The Intrinsic Pathway of apoptosis is triggered by the release of ______ from the mitochondria.",
    "o": [
      "Oxygen",
      "ATP",
      "Cytochrome c",
      "Glucose"
    ],
    "a": 2,
    "r": "Release through Bax/Bak pores into the cytosol."
  },
  {
    "q": "Which family of proteins regulates the permeability of the mitochondrial outer membrane during apoptosis?",
    "o": [
      "SNARE",
      "Bcl-2 family",
      "Ras",
      "Mitogen-Activated Protein Kinase (MAPK)"
    ],
    "a": 1,
    "r": "Includes both pro-apoptotic (Bax/Bak) and anti-apoptotic (B-cell lymphoma 2 - Bcl-2) members."
  },
  {
    "q": "Necrosis is different from Apoptosis because it always involves:",
    "o": [
      "DNA repair",
      "ATP use",
      "Membrane rupture and inflammatory response",
      "Cell shrinkage"
    ],
    "a": 2,
    "r": "Uncontrolled death due to injury."
  },
  {
    "q": "An 'Oncogene' is a mutated gene that:",
    "o": [
      "Stops cancer",
      "Promotes uncontrolled cell growth (gain of function)",
      "Repairs DNA",
      "Pumps ions"
    ],
    "a": 1,
    "r": "Usually the mutant form of a proto-oncogene."
  },
  {
    "q": "Which of the following is a classic Tumor Suppressor gene?",
    "o": [
      "Ras",
      "Myc",
      "p53",
      "Cyclin D"
    ],
    "a": 2,
    "r": "Loss of p53 function is a hallmark of many cancers."
  },
  {
    "q": "'Metastasis' refers to:",
    "o": [
      "Cell division",
      "The spread of cancer cells to distant sites",
      "DNA replication",
      "ATP synthesis"
    ],
    "a": 1,
    "r": "Migration through blood or lymph vessels."
  },
  {
    "q": "A 'Totipotent' stem cell can give rise to:",
    "o": [
      "Only one cell type",
      "All embryonic and extra-embryonic tissues",
      "Only blood cells",
      "Only skin"
    ],
    "a": 1,
    "r": "Found only in the very early embryo (e.g. zygote)."
  },
  {
    "q": "Which enzyme in the ER ensures that cysteine residues form the correct disulfide bonds?",
    "o": [
      "BiP",
      "PDI (Protein Disulfide Isomerase)",
      "Peptidase",
      "Glycosylase"
    ],
    "a": 1,
    "r": "It catalyzes thiol-disulfide exchange."
  },
  {
    "q": "N-linked glycosylation happens on which amino acid residue?",
    "o": [
      "Serine",
      "Threonine",
      "Asparagine",
      "Lysine"
    ],
    "a": 2,
    "r": "Added to the amide group of Asparagine (N)."
  },
  {
    "q": "What happens to a protein in the ER that remains misfolded for too long?",
    "o": [
      "It is secreted",
      "It is targeted to the lysosome",
      "It is exported to the cytosol and degraded by the proteasome (ERAD)",
      "It stays there forever"
    ],
    "a": 2,
    "r": "ER-Associated Degradation pathway."
  },
  {
    "q": "The 26S Proteasome consists of a 20S core and two 19S ______.",
    "o": [
      "Membranes",
      "Regulatory caps",
      "Lipid rafts",
      "Pores"
    ],
    "a": 1,
    "r": "The caps recognize and unfold ubiquitinated proteins."
  },
  {
    "q": "The 'Ubiquitin-Proteasome System' requires how many distinct enzymes for tagging?",
    "o": [
      "1 (E1)",
      "2 (E1, E2)",
      "3 (E1, E2, E3)",
      "4"
    ],
    "a": 2,
    "r": "E3 is the ligase that provides specificity for the substrate."
  },
  {
    "q": "Nuclear Pore Complexes (NPCs) use which disordered proteins to form a 'hydrophobic sieve'?",
    "o": [
      "Tubulin",
      "FG-nucleoporins (Phenylalanine-Glycine repeats)",
      "Actin",
      "Lamins"
    ],
    "a": 1,
    "r": "These create the selective permeability barrier."
  },
  {
    "q": "Where is Ran-GAP (GTPase Activating Protein) located?",
    "o": [
      "Nucleus",
      "Cytosol",
      "Mitochondria",
      "ER"
    ],
    "a": 1,
    "r": "It ensures Ran-GTP is converted to Ran-GDP in the cytosol."
  },
  {
    "q": "The mitochondrial 'Cardiolipin' is unusual because it has how many fatty acid tails?",
    "o": [
      "1",
      "2",
      "3",
      "4"
    ],
    "a": 3,
    "r": "It is a double-phospholipid structure."
  },
  {
    "q": "Which retrieval signal is used for soluble ER resident proteins?",
    "o": [
      "KKXX",
      "KDEL",
      "M6P",
      "NLS"
    ],
    "a": 1,
    "r": "Lys-Asp-Glu-Leu at the C-terminus."
  },
  {
    "q": "The 'Clathrin' coat consists of three heavy and three light chains forming a structure called a:",
    "o": [
      "Doublet",
      "Triskelion",
      "Dimer",
      "Ring"
    ],
    "a": 1,
    "r": "A three-legged protein complex."
  },
  {
    "q": "Adaptor proteins (like AP2) link clathrin to:",
    "o": [
      "The cytoskeleton",
      "Cargo receptors in the membrane",
      "ATP",
      "Mitochondria"
    ],
    "a": 1,
    "r": "They select the specific cargo to be internalized."
  },
  {
    "q": "Which small GTPase acts as a 'molecular clock' to regulate the timing of vesicle docking and tethering?",
    "o": [
      "Ran",
      "Arf",
      "Rab",
      "Ras"
    ],
    "a": 2,
    "r": "Hydrolysis of Rab-GTP to Rab-GDP controls the process."
  },
  {
    "q": "NSF is an enzyme that uses ATP to:",
    "o": [
      "Fuse membranes",
      "Dissociate the SNARE complex after fusion",
      "Synthesize lipids",
      "Move vesicles"
    ],
    "a": 1,
    "r": "It resets the SNAREs for the next round of transport."
  },
  {
    "q": "The 'Proton Hopping' (Grotthuss mechanism) is prevented in Aquaporins by:",
    "o": [
      "Size exclusion",
      "Conserved Asparagine residues (NPA motif)",
      "Negative charge",
      "Oil"
    ],
    "a": 1,
    "r": "Prevents the dissipation of the cell's pH gradient."
  },
  {
    "q": "The Na+/K+ pump exists in two main conformational states known as:",
    "o": [
      "Alpha and Beta",
      "E1 and E2",
      "Cis and Trans",
      "High and Low"
    ],
    "a": 1,
    "r": "The Albers-Post cycle involves phosphorylation-driven shifts between E1 and E2."
  },
  {
    "q": "Which transporter uses the Sodium gradient to move glucose into intestinal cells against its concentration gradient?",
    "o": [
      "GLUT1",
      "GLUT4",
      "SGLT (Sodium-Glucose Linked Transporter)",
      "Na+/K+ pump"
    ],
    "a": 2,
    "r": "A classic example of symport (Secondary Active Transport)."
  },
  {
    "q": "In the neuron, the 'Refractory Period' is caused by:",
    "o": [
      "Lack of ATP",
      "Inactivation of voltage-gated Na+ channels",
      "Opening of Cl- channels",
      "Cold temp"
    ],
    "a": 1,
    "r": "Channels must reset from the 'inactivated' state before a second action potential can occur."
  },
  {
    "q": "Duchenne Muscular Dystrophy (DMD) is a defect in the link between:",
    "o": [
      "MT and the nucleus",
      "Actin and the extracellular matrix (via Dystrophin)",
      "Lipids and sugars",
      "DNA and RNA"
    ],
    "a": 1,
    "r": "Fragility of the sarcolemma results in muscle fiber death."
  },
  {
    "q": "Which amino acid has a unique cyclic structure that induces 'bends' in the protein backbone?",
    "o": [
      "Glycine",
      "Proline",
      "Alanine",
      "Valine"
    ],
    "a": 1,
    "r": "Its side chain is covalently bonded to its amino group."
  },
  {
    "q": "A mutation that changes a codon for Glutamic acid to Valine causes which disease?",
    "o": [
      "Cystic Fibrosis",
      "Sickle Cell Anemia",
      "Alzheimer's",
      "Gout"
    ],
    "a": 1,
    "r": "A single missense mutation in the beta-globin gene."
  },
  {
    "q": "What is the 'Wobble' position of a codon?",
    "o": [
      "The 1st base",
      "The 2nd base",
      "The 3rd base",
      "The whole codon"
    ],
    "a": 2,
    "r": "Flexibility in the 3rd base allows one tRNA to read multiple codons."
  },
  {
    "q": "Which ribosomal subunit performs the decoding function (matching tRNA to mRNA)?",
    "o": [
      "Small subunit (40S/30S)",
      "Large subunit (60S/50S)",
      "Both equally",
      "None"
    ],
    "a": 0,
    "r": "The small subunit handles accuracy and decoding."
  }
];